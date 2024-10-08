import { useEffect } from "react";

import { useQueryClient } from "@tanstack/react-query";
import { Events } from "@wailsio/runtime";
import { WailsEvent } from "@wailsio/runtime/types/events";
import { useAppState } from "~/store";

const useTrashNoteMenu = () => {
  const queryClient = useQueryClient();

  const activeTrashNote = useAppState((state) => state.activeTrashNote);
  const setActiveTrashNote = useAppState((state) => state.setActiveTrashNote);


  useEffect(() => {
    const handleNoteDeleted = (event: WailsEvent) => {
      if (activeTrashNote?.ID === event.data) {
        console.log("setting active note to undefined");
        // TODO: set active note to the next note in the list if it exists
        setActiveTrashNote(undefined);
      }
      void queryClient.invalidateQueries({
        queryKey: ["trash-notes"],
      });
    };

    Events.On("trashNoteDeleted", handleNoteDeleted);
    Events.On("noteRestored", handleNoteDeleted);

    return () => {
      Events.Off("trashNoteDeleted");
      Events.Off("noteRestored");
    };
  }, [activeTrashNote, setActiveTrashNote, queryClient]);
};

export default useTrashNoteMenu;
