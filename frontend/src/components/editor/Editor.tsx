import {
  AdmonitionDirectiveDescriptor,
  codeBlockPlugin,
  codeMirrorPlugin,
  diffSourcePlugin,
  directivesPlugin,
  headingsPlugin,
  imagePlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  MDXEditorMethods,
  quotePlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
} from "@mdxeditor/editor";

import "@mdxeditor/editor/style.css";
import "./styles.css"

import { useEffect, useRef } from "react";

import { ScrollArea } from "../ui/scroll-area";
import { Toolbar } from "./Toolbar";

// import { Toolbar } from "~/components/article/Toolbar";
// import useStore from "~/store";

const allPlugins = (diffMarkdown: string) => [
  toolbarPlugin({ toolbarContents: () => <Toolbar /> }),
  listsPlugin(),
  quotePlugin(),
  headingsPlugin(),
  linkPlugin(),
  linkDialogPlugin(),

  // eslint-disable-next-line @typescript-eslint/require-await
  imagePlugin(),
  tablePlugin(),
  thematicBreakPlugin(),
  codeBlockPlugin({ defaultCodeBlockLanguage: "txt" }),
  codeMirrorPlugin({
    codeBlockLanguages: {
      js: "JavaScript",
      css: "CSS",
      txt: "text",
      tsx: "TypeScript",
    },
  }),
  directivesPlugin({ directiveDescriptors: [AdmonitionDirectiveDescriptor] }),
  diffSourcePlugin({ viewMode: "rich-text", diffMarkdown }),
  markdownShortcutPlugin(),
];

export default function WritePage() {
  // save content to store on unmount
  const mdxEditorRef = useRef<MDXEditorMethods>(null);

  // const setMdxEditorRef = useStore((state) => state.setMdxEditorRef);

  // useEffect(() => {
  //   setMdxEditorRef(mdxEditorRef.current ?? undefined);
  // }, [mdxEditorRef, setMdxEditorRef]);

  return (
      <MDXEditor
        ref={mdxEditorRef}
        markdown={"# Your title!"}
        className="border-4 border-green-300 flex flex-col h-svh overflow-hidden"
        contentEditableClassName="text-white"
        plugins={allPlugins("# Your title")}
      />
  );
}
