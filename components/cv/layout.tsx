import * as React from "react";
import { cn } from "@/lib/utils";
import type { TextContentProps } from './lists'
import { ContentList } from "./lists";

type ExpHeadingProps = {
  title: string;
  subtitle?: string;
  location?: string;
  date: string;
  link?: string;
};

const ExpHeading = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & ExpHeadingProps
>(({ className, title, subtitle, location, date, link, ...props }, ref) => {
  const inner = (
    <tr>
      <td className="font-bold px-4 py-2 w-4/12">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        ) : (
          title
        )}
      </td>
      <td className="w-4/12">{subtitle}</td>
      <td className="w-3/12 italic">{location}</td>
      <td className="w-1/12 text-right">
        <pre>{date.padEnd(11, " ")}</pre>
      </td>
    </tr>
  );

  return (
    <table
      ref={ref}
      className={cn("table-auto w-full", className)}
      {...props}
    >
      <thead>{inner}</thead>
    </table>
  );
});

ExpHeading.displayName = "Heading";

type ExpSectionProps = {
  heading: ExpHeadingProps;
  content: TextContentProps[];
}

const ExpSection = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & ExpSectionProps
>(({ className, heading, content, ...props }, ref) => {

  return (
    <div className={className}>
      <ExpHeading title={heading.title} subtitle={heading.subtitle} location={heading.location} date={heading.date} link={heading.link} />
      <ContentList className="ml-8" contentList={content} />
    </div>
  );
});



export { ExpHeading, ExpSection }
export type { ExpHeadingProps }

