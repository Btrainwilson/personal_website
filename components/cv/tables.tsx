import * as React from "react";
import { cn } from "@/lib/utils";
import { TextContent } from "./text";
import { ExpHeadingProps } from "./layout";

type AwardProps = {
  title: string;
  location: string;
  date: string;
  link?: string;
};

type AwardRowProps = {
  even: boolean;
  award: AwardProps;
};

const AwardRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> & AwardRowProps
>(({ className, even, award, ...props }, ref) => {
  return (
    <tr
      ref={ref}
      className={cn(
        `hover:bg-base-300 ${even ? "bg-base-100" : "bg-base-200"}`,
        className
      )}
      {...props}
    >
      {award.link ? (
        <td className="font-bold w-4/12 px-4 py-2">
          <a href={award.link}>{award.title}</a>
        </td>
      ) : (
        <td className="font-bold w-4/12 px-4 py-2">{award.title}</td>
      )}
      <td className="w-6/12 px-4 py-2">{award.location}</td>
      <td className="w-1/12 px-4 py-2 text-right">
        <pre>{award.date.padEnd(11, " ")}</pre>
      </td>
    </tr>
  );
});

AwardRow.displayName = "AwardRow";

type AwardTableProps = {
  awards: AwardProps[];
};

const AwardTable = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & AwardTableProps
>(({ className, awards, ...props }, ref) => {
  return (
    <table
      ref={ref}
      className={cn(
        "mx-auto border-neutral text-base-content w-full table-auto",
        className
      )}
      {...props}
    >
      <tbody>
        {awards.map((award, index) => (
          <AwardRow
            key={index} // Add a unique key
            award={award}
            even={index % 2 === 0}
          />
        ))}
      </tbody>
    </table>
  );
});

AwardTable.displayName = "AwardTable";



export type PublicationProps = {
  title: string;
  authors: string;
  citation: string;
  link?: string;
};

const Publication = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & PublicationProps
>(({ className, title, authors, citation, link, ...props }, ref) => {
  const inner = (
    <>{authors}, <strong>{title}</strong>, {citation}</>
  );

  return (
    <div ref={ref} className={`m-1 w-full ${className ?? ''}`} {...props}>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      ) : (
        inner
      )}
    </div>
  );
});

Publication.displayName = "Publication";

type PublicationRowProps = {
  publications: PublicationProps[];
};

const PublicationTable = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & PublicationRowProps
>(({ className, publications, ...props }, ref) => {
  return (
    <ol type='1' className='m-4'>
      {publications.map((pub, index) => (
        <li key={index} className={`mb-4 hover:bg-base-300 hover:underline 
                ${index % 2 === 0 ? 'bg-base-100 ' : 'bg-base-200 '
          }`}
        >
          <Publication
            title={pub.title}
            authors={pub.authors}
            citation={pub.citation}
            link={pub.link}

          />
        </li>
      ))}

    </ol>
  );
});

PublicationTable.displayName = "PublicationTable"


type ExpRowProps = {
  even: boolean;
  exp: ExpHeadingProps;
};

const ExperienceTableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> & ExpRowProps
>(({ className, even, exp, ...props }, ref) => {
  return (
    <tr
      ref={ref}
      className={cn(
        `hover:bg-base-300 mb-2 ${even ? "bg-base-100" : "bg-base-200"}`,
        className
      )}
      {...props}
    >
      {exp.link ? (
        <td className="font-bold w-4/12 px-4 py-2">
          <a href={exp.link}>{exp.title}</a>
        </td>
      ) : (
        <td className="font-bold w-4/12 px-4 py-2">{exp.title}</td>
      )}
      <td className="w-4/12 italic px-4 py-2">{exp.subtitle}</td>
      <td className="w-3/12 px-4 py-2">{exp.location}</td>
      <td className="w-1/12 px-4 py-2 text-right">
        <pre>{exp.date.padEnd(11, " ")}</pre>
      </td>
    </tr>
  );
});

type ExperienceTableProps = {
  experiences: ExpHeadingProps[];
};

const ExperienceTable = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & ExperienceTableProps
>(({ className, experiences, ...props }, ref) => {
  return (
    <table
      ref={ref}
      className={cn(
        "mx-auto border-neutral text-base-content w-full table-auto",
        className
      )}
      {...props}
    >
      <tbody>
        {experiences.map((exp, index) => (
          <ExperienceTableRow
            key={index} // Add a unique key
            exp={exp}
            even={index % 2 === 0}
          />
        ))}
      </tbody>
    </table>
  );
});


const NewsTableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> & ExpRowProps
>(({ className, even, exp, ...props }, ref) => {
  return (
    <tr
      ref={ref}
      className={cn(
        `hover:bg-base-300 ${even ? "bg-base-100" : "bg-base-200"}`,
        className
      )}
      {...props}
    >
      {exp.link ? (
        <td className="font-bold w-8/12 px-4 py-2">
          <a href={exp.link}>{exp.title}</a>
        </td>
      ) : (
        <td className="font-bold w-8/12 px-4 py-2">{exp.title}</td>
      )}
      <td className="w-3/12 px-4 py-2">{exp.location}</td>
      <td className="w-1/12 px-4 py-2 text-right">
        <pre>{exp.date.padEnd(11, " ")}</pre>
      </td>
    </tr>
  );
});

const NewsTable = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & ExperienceTableProps
>(({ className, experiences, ...props }, ref) => {
  return (
    <table
      ref={ref}
      className={cn(
        "mx-auto border-neutral text-base-content w-full table-auto",
        className
      )}
      {...props}
    >
      <tbody>
        {experiences.map((exp, index) => (
          <NewsTableRow
            key={index} // Add a unique key
            exp={exp}
            even={index % 2 === 0}
          />
        ))}
      </tbody>
    </table>
  );
});

AwardTable.displayName = "AwardTable";

PublicationTable.displayName = "PublicationTable"

export { ExperienceTable, PublicationTable, AwardRow, AwardTable, NewsTable };
