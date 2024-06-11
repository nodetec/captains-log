import { useEffect, useRef, useState } from "react";

import { closeBrackets } from "@codemirror/autocomplete";
import { history } from "@codemirror/commands";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { bracketMatching, indentOnInput } from "@codemirror/language";
import { languages } from "@codemirror/language-data";
import { EditorState } from "@codemirror/state";
import {
  crosshairCursor,
  drawSelection,
  dropCursor,
  highlightSpecialChars,
  lineNumbers,
  rectangularSelection,
  // scrollPastEnd,
} from "@codemirror/view";
import { vim } from "@replit/codemirror-vim";
import { useQueryClient } from "@tanstack/react-query";
import { getNote, updateNote } from "~/api";
import useThemeChange from "~/hooks/useThemeChange";
import { useAppContext } from "~/store";
import { EditorView } from "codemirror";

import { darkTheme, lightTheme } from "../components/editor/editor-themes";

interface Props {
  initialDoc: string;
  onChange: (state: string) => void;
}

export const useCM6Editor = ({ initialDoc, onChange }: Props) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [editorView, setEditorView] = useState<EditorView>();

  const { filter, currentNote, settings } = useAppContext();

  const queryClient = useQueryClient();

  const theme = useThemeChange();

  async function handleBlur(view: EditorView) {
    const content = currentNote?.content;
    const id = currentNote?.id;
    if (id === undefined || content === undefined) {
      return;
    }
    const response = await getNote(id);
    if (response.data.content !== view.state.doc.toString()) {
      void updateNote({ id, content: view.state.doc.toString() });
      void queryClient.invalidateQueries({ queryKey: ["notes"] });
    }
  }

  const blurHandlerExtension = EditorView.domEventHandlers({
    blur: (_, view) => {
      void handleBlur(view);
      return false; // Return false if you don't want to prevent the default behavior
    },
  });

  useEffect(() => {
    if (!editorRef.current) return;

    const extensions = [
      theme === "dark" ? darkTheme : lightTheme,
      blurHandlerExtension,
      // highlightActiveLineGutter(),
      highlightSpecialChars(),
      history(),
      // foldGutter(),
      drawSelection(),
      dropCursor(),
      // EditorState.allowMultipleSelections.of(true),
      indentOnInput(),
      // syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
      bracketMatching(),
      closeBrackets(),
      // autocompletion(),
      rectangularSelection(),
      crosshairCursor(),
      // scrollPastEnd(),
      EditorView.lineWrapping,
      EditorState.readOnly.of(filter === "archived" || filter === "trashed"),
      EditorView.updateListener.of((update) => {
        if (
          update.changes &&
          currentNote?.content !== update.state.doc.toString()
        ) {
          onChange(update.state.doc.toString());
        }
      }),

      // basicSetup,
      markdown({
        base: markdownLanguage,
        codeLanguages: languages,
        // addKeymap: true,
      }),
    ];

    if (settings.vim === "true") {
      extensions.push(vim());
    }
    if (settings.line_numbers === "true") {
      extensions.push(lineNumbers());
    }

    const startState = EditorState.create({
      doc: initialDoc,
      extensions,
    });

    const view = new EditorView({
      state: startState,
      parent: editorRef.current,
    });
    setEditorView(view);

    return () => {
      view.destroy();
    };
  }, [theme, currentNote?.id]);

  return { editorRef, editorView };
};
