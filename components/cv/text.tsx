import * as React from "react";
import { cn } from "@/lib/utils";


type SeparatedProps = {
  skills: string[];
  separator?: string;
}

const SeparatedList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & SeparatedProps
>(({ className, skills, separator = '|', ...props }, ref) => {

  return (
    <div
      ref={ref}
      className={
        cn(className)
      }
      {...props}
    >
      {skills.map((skill, idx) => (
        <p key={idx} className="inline">
          {" " + skill} {separator}
        </p>
      ))}
    </div>
  );
});

SeparatedList.displayName = 'SeparatedList';
export { SeparatedList }

type TextContentProps = {
  text: string | HTMLParagraphElement;
  link?: string;
}

const TextContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & TextContentProps
>(({ className, text, link, ...props }, ref) => {
  const inner = (
    <p>
      {text}
    </p>
  );

  return (
    <>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      ) : (
        inner
      )}
    </>
  );
});

export { TextContent }
