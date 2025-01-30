import * as React from "react";
import { cn } from "@/lib/utils";
import { TextContent } from "./text";

type TextContentProps = {
  text: string | HTMLParagraphElement;
  link?: string;
}

type TextContentListProps = {
  contentList: TextContentProps[];
}

const ContentList = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement> & TextContentListProps
>(({ className, contentList, ...props }, ref) => {

  return (
    <ul className={cn("list-disc ml-4", className)} ref={ref}>
      {contentList.map((component, index) => (
        <li key={index}>
          <TextContent text={component.text} link={component.link} />
        </li>
      ))}
    </ul>
  );
});


export { ContentList }
export type { TextContentListProps, TextContentProps }
