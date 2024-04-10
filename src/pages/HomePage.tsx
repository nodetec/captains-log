import Editor from "~/components/editor/Editor";
import EditorControls from "~/components/editor/EditorControls";
import EditorTitle from "~/components/editor/EditorTitle";
import TagInput from "~/components/editor/TagInput";
import NoteFeed from "~/components/notes/NoteFeed";
import NoteFeedHeader from "~/components/notes/NoteFeedHeader";
import SearchNotes from "~/components/notes/SearchNotes";
import TagList from "~/components/tags/TagList";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/resizable";

export default function HomePage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <ResizablePanelGroup direction="horizontal" className="h-full w-full">
        <ResizablePanel defaultSize={15} minSize={15}>
          <TagList />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={30} minSize={30}>
          <div className="px-2">
            <NoteFeedHeader />
            <SearchNotes />
            <NoteFeed />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel minSize={10}>
          <div className="px-4 pt-4">
            <div className="flex items-center justify-between">
              <EditorTitle />
              <EditorControls />
            </div>
            <TagInput />
            <Editor />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
