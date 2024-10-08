import { Note } from "&/github.com/nodetec/comet/db/models";
import { Tag } from "&/github.com/nodetec/comet/service";
import { Badge } from "~/components/ui/badge";

type Props = {
  tag: Tag;
  note: Note;
};

export default function NoteTag({ tag, note }: Props) {
  return (
    <div>
      <Badge
        style={
          {
            "--custom-contextmenu": "noteTagMenu",
            "--custom-contextmenu-data": `${note.ID}:${tag.ID}`,
          } as React.CSSProperties
        }
        className="cursor-default select-none whitespace-nowrap rounded-full"
        variant="secondary"
      >
        {tag.Name}
      </Badge>
    </div>
  );
}
