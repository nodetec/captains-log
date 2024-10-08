import { Trash } from "&/github.com/nodetec/comet/db/models";
import { Badge } from "~/components/ui/badge";

type Props = {
  trashNote: Trash;
};

export default function ReadOnlyTagList({ trashNote }: Props) {
  return (
    <div className="w-full border-t py-2 pl-4 pr-2">
      <div className="flex items-center gap-x-2">
        {trashNote.Tags?.String !== "" &&
          trashNote.Tags?.String.split(",").map((tag, tagIndex) => {
            return (
              <div key={tagIndex}>
                <Badge
                  className="cursor-default select-none whitespace-nowrap rounded-full"
                  variant="secondary"
                >
                  {tag}
                </Badge>
              </div>
            );
          })}
        <div className="py-[1.125rem]"></div>
      </div>
    </div>
  );
}
