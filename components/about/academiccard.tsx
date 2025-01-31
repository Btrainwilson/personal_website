import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

interface AcademicPosition {
  title: string;
  institution: string;
  department: string;
  date: string;
  link: string;
}

interface AcademicCardProps {
  positions: AcademicPosition[];
}

export function SkillsList({ skills }: { skills: string[] }) {
  return (
    <div>
      {skills.map((skill, idx) => (
        <p key={idx} className="inline">
          {" " + skill} |
        </p>
      ))}
    </div>
  );
}


export function Citation({ citation }: any) {
  if (citation.link) {
    return (
      <a href={citation.link} target="_blank" rel="noopener noreferrer">
        <div className="m-1 w-full">
          <p>{citation.authors}, <strong>{citation.title}</strong>,{' '}{citation.citation}
          </p>
        </div>
      </a>
    );
  }
  return (
    <div className="m-1 rounded-lg w-full">
      <p>
        {citation.authors}, <strong>{citation.title}</strong>,{' '}
        {citation.citation}
      </p>
    </div>
  );
}

const PubTable: React.FC<AcademicCardProps> = ({ positions }) => {

  return (
    <table className="rounded-lg mx-auto border-neutral rounded-l  text-base-content  w-full table-auto">
      <ol type='1' className='m-4'>
        {positions.map((position, index) => (
          <li key={index} className={`hover:bg-base-300 hover:underline 
                ${index % 2 === 0 ? 'bg-base-100 ' : 'bg-base-200 '
            }`}
          >
            <Citation citation={position} />
          </li>
        ))}
      </ol>
    </table>
  );
}

const RewardTable: React.FC<AcademicCardProps> = ({ positions }) => {

  return (
    <table className="rounded-lg mx-auto border-neutral rounded-l  text-base-content  w-full table-auto">
      <tbody>
        {positions.map((position, index) => (
          <tr key={index} className={` hover:bg-base-300
                ${index % 2 === 0 ? 'bg-base-100 ' : 'bg-base-200 '
            }`}
          >
            <td className="font-bold w-4/12 px-4 py-2"><a href={position.link}>{position.title}</a></td>
            <td className="w-4/12 px-4 py-2">{position.department}</td>
            <td className="w-4/12 px-4 py-2 italic">{position.institution}</td>
            <td className="w-4/12 px-4 py-2 text-right">
              <pre>{position.date.padEnd(11, ' ')}</pre>
            </td>
          </tr>
        ))}
      </tbody>
    </table >);
}


const AcademicTable: React.FC<AcademicCardProps> = ({ positions }) => {

  return (
    <table className="text-sm mx-auto border-neutral  text-base-content  w-full table-auto">
      <tbody>
        {positions.map((position, index) => (
          <tr key={index} className={` hover:bg-base-300
                ${index % 2 === 0 ? 'bg-base-100 ' : 'bg-base-200 '
            }`}
          >
            <Heading title={position.title} subtitle={position.subtitle} location={position.location} date={position.date} />
          </tr>
        ))}
      </tbody>
    </table >);
}

export function Heading({ title, subtitle, location, date }) {

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <td key="0" className="font-bold px-4 py-2  w-3/12"> {title} </td>
          <td key="1" className="w-3/12"> {subtitle} </td>
          <td key="2" className="w-3/12 italic"> {location} </td>
          <td key="3" className="w-3/12 text-right">
            <pre key="4"> {date.padEnd(11, ' ')} </pre>
          </td>
        </tr>
      </thead>
    </table>
  );

}

export function ExpHeading({ data, children }) {
  return (
    <div className="w-full mb-1">
      <Heading title={data[0]} subtitle={data[1]} location={data[2]} date={data[3]} />
      <div className="ml-2">
        {children}
      </div>
    </div>
  );
}

export function Content({ exp }) {
  const content = <p>{exp[0]}</p>;
  return exp.length > 1 ? (
    <a className='hover:underline' href={exp[1]}>{content}</a>
  ) : (
    content
  );
}

export function ContentList({ items }) {

  return (
    <ul className="list-disc ml-4">
      {items.map((component, index) => (
        <li key={index}> <Content exp={component} /> </li>
      ))}
    </ul>
  );
}

function ExperienceTable({ data }) {
  // Helper function to join items with a separator
  return (
    <ExpHeading data={data.head} children=<ContentList items={data.body} /> />
  );
}


export const AwardsTable: React.FC<AcademicCardProps> = ({ positions }: any) => {

  return (
    <table className="mx-auto border-neutral  text-base-content  w-full table-auto">
      <tbody>
        {positions.map((award, index) => (
          <tr key={index} className={`hover:bg-base-300
                ${index % 2 === 0 ? 'bg-base-100 ' : 'bg-base-200 '
            }`}
          >
            ${award.length === 3 ?
              <td className="font-bold w-4/12 px-4 py-2"> {award[0]}</td> :
              <td className="font-bold w-4/12 px-4 py-2"> <a href={award[3]}> {award[0]} </a></td>
            }
            <td className="w-4/12 px-4 py-2">{award[1]}</td>
            <td className="w-4/12 px-4 py-2 text-right">
              <pre>{award[2].padEnd(11, ' ')}</pre>
            </td>
          </tr>
        ))}
      </tbody>
    </table >);
}

export function AwardEntry({ award }) {
  return (
    <tr className='m-2'>
      <td className="font-bold  w-4/12">{award[0]}</td>
      <td className="w-4/12">
        {award[1]}
      </td>
      <td className="w-4/12 text-right">
        <pre>{award[2].padEnd(11, ' ')}</pre>
      </td>
    </tr>
  );
}

export function AwardTable(json) {
  // Helper function to join items with a separator

  // Build HTML for each key in the JSON object
  //  indents.push(<span className='indent' key={i}></span>);

  let htmlResult = [];

  for (const key in json) {
    for (const k2 in json[key]) {
      htmlResult.push(<AwardEntry key={k2} award={json[key][k2]} />);
    }
  }

  return (
    <table className="m-2 rounded-lg mx-auto border-neutral  text-base-content  table-auto w-full">
      {htmlResult}
    </table>
  );

}

const AcademicCard: React.FC<AcademicCardProps> = ({ positions }) => {

  return (
    <Card className="mx-auto shadow-md border-neutral-600 shadow-primary text-base-content bg-base-100">
      <CardHeader>
        <CardTitle >Academic Positions</CardTitle>
      </CardHeader>
      <CardContent>
        <AcademicTable positions={positions} />
      </CardContent>
    </Card>
  );
};

export default AcademicCard;
export { AcademicTable, PubTable, ExperienceTable };
