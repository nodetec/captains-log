import { useInfiniteQuery } from "@tanstack/react-query";
import { NoteService } from "&/github.com/nodetec/captains-log/service";
import { assignRef } from "~/lib/utils";
import { useAppState } from "~/store";
import { useInView } from "react-intersection-observer";

import { ScrollArea } from "../ui/scroll-area";
import TrashNoteCard from "./TrashNoteCard";

export default function TrashFeed() {
  const { setActiveNote } = useAppState();

  async function fetchNotes({ pageParam = 1 }) {
    const pageSize = 50;
    console.log("fetching trash notes");
    const notes = await NoteService.ListNotesFromTrash(pageSize, pageParam);
    console.log(notes);

    if (notes.length === 0) {
      setActiveNote(undefined);
    }

    // if (!activeNote && notes.length > 0) {
    //   setActiveNote(notes[0]);
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
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error fetching notes</div>;
  }
  return (
    <ScrollArea className="w-full rounded-md">
      {data.pages.map((page, pageIndex) => (
        <ul key={pageIndex}>
          {page.data.map((trashNote, noteIndex) => (
            <li
              key={noteIndex}
              ref={assignRef(lastNoteRef, pageIndex, noteIndex, data)}
            >
              <TrashNoteCard trashNote={trashNote} />
            </li>
          ))}
        </ul>
      ))}
    </ScrollArea>
  );
}