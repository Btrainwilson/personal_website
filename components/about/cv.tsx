

export function SeparatedList({ skills, seperator = '|' }: { skills: string[], seperator: string }) {
  return (
    <div>
      {skills.map((skill, idx) => (
        <p key={idx} className="inline">
          {" " + skill} {seperator}
        </p>
      ))}
    </div>
  );
}


export function Publication({ citation }: any) {
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

export const AwardsTable: React.FC<AcademicCardProps> = ({ positions }: any) => {

  return (
    <table className="mx-auto border-neutral  text-base-content  w-full table-auto">
      <tbody>
        {positions.map((award, index) => (
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
