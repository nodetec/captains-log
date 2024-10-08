import { useInfiniteQuery } from "@tanstack/react-query";
import { NoteService } from "&/github.com/nodetec/comet/service";
import { ScrollArea } from "~/components/ui/scroll-area";
import { assignRef } from "~/lib/utils";
import { useAppState } from "~/store";
import { useInView } from "react-intersection-observer";

import TrashNoteCard from "./TrashNoteCard";

export default function TrashFeed() {
  const orderBy = useAppState((state) => state.orderBy);
  const setActiveTrashNote = useAppState((state) => state.setActiveTrashNote);
  const timeSortDirection = useAppState((state) => state.timeSortDirection);
  const titleSortDirection = useAppState((state) => state.titleSortDirection);

  async function fetchNotes({ pageParam = 1 }) {
    const pageSize = 50;

    const sortDirection =
      orderBy === "title" ? titleSortDirection : timeSortDirection;

    const notes = await NoteService.ListNotesFromTrash(
      pageSize,
      pageParam,
      orderBy,
      sortDirection,
    );
    console.log(notes);

    if (notes.length === 0) {
      setActiveTrashNote(undefined);
    }

    // if (!activeTrashNote && notes.length > 0) {
    //   setActiveTrashNote(notes[0]);
    // }

    return {
      data: notes || [],
      nextPage: pageParam + 1,
      nextCursor: notes.length === pageSize ? pageParam + 1 : undefined,
    };
  }

  const { status, data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["trash-notes"],
      queryFn: fetchNotes,
      initialPageParam: 0,
      getNextPageParam: (lastPage, _pages) => lastPage.nextCursor ?? undefined,
    });

  const { ref: lastNoteRef } = useInView({
    onChange: (inView) => {
      if (inView && !isFetchingNextPage && hasNextPage) {
        void fetchNextPage();
      }
    },
  });

  if (status === "pending") {
    return undefined;
  }

  if (status === "error") {
    return <div>Error fetching notes</div>;
  }
  return (
    <ScrollArea className="h-screen">
      {data.pages.map((page, pageIndex) => (
        <div className="flex flex-col items-center px-3">
          {page.data.map((project, noteIndex) => (
            <div
              className="mx-3 flex w-full flex-col items-center"
              key={noteIndex}
              ref={assignRef(lastNoteRef, pageIndex, noteIndex, data)}
            >
              <TrashNoteCard trashNote={project} />
            </div>
          ))}
        </div>
      ))}
    </ScrollArea>
  );
}
