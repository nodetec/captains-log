import { useQuery } from "@tanstack/react-query";
import { listTags } from "~/api";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { ScrollArea } from "~/components/ui/scroll-area";
import { useGlobalState } from "~/store";
import { TagsIcon } from "lucide-react";

import AllNotes from "./AllNotes";
import ArchivedNotes from "./ArchivedNotes";
import TagItem from "./TagItem";

export default function ContextSidebar() {
  const { activeNote } = useGlobalState();

  async function fetchTags() {
    const apiResponse = await listTags();
    console.log(apiResponse);
    if (apiResponse.data) {
      return apiResponse.data;
    }
  }

  const { data } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
  });

  return (
    <ScrollArea className="flex h-full flex-col p-2">
      <div>activeNote {activeNote.note?.id}</div>
      <div>archivedNote {activeNote.archivedNote?.id}</div>
      <AllNotes />
      <ArchivedNotes />
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem className="border-none" value="item-1">
          <AccordionTrigger>
            <div className="flex pl-2 text-muted-foreground">
              <TagsIcon className="h-[1.2rem] w-[1.2rem]" />
              <span className="ml-1">Tags</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            {data?.map((tag) => <TagItem key={tag.id} tag={tag} />)}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </ScrollArea>
  );
}