import Head from 'next/head';

export function AwardEntry({award}) {
  return (
    <table className="hover:bg-gray-200 rounded-lg table-auto w-full">
      <thead>
          <tr>
            <td className="font-bold  w-4/12" dangerouslySetInnerHTML={{ __html: award[0] }}/>
            <td className="w-4/12">
              {award[1]}
            </td>
            <td className="w-4/12 text-right">
              <pre>{award[2].padEnd(11, ' ')}</pre>
            </td>
          </tr>
        </thead>
    </table>
  );
}

export function ExpHeading({ data, children }) {
  return (
  <div className="w-full mb-1">
    <table className="table-auto w-full rounded-lg hover:bg-gray-200 ">
      <thead>
          <tr>
            <td key="0" className="font-bold text-accent w-3/12" dangerouslySetInnerHTML={{ __html: data[0] }}/>
            <td key="1" className="w-3/12" dangerouslySetInnerHTML={{ __html: data[1] }}/>
            <td key="2" className="w-3/12 italic" dangerouslySetInnerHTML={{ __html: data[2] }}/>
            <td key="3" className="w-3/12 text-right"> 
              <pre key="4" dangerouslySetInnerHTML={{ __html: data[3].padEnd(11, ' ') }}/>
            </td>
          </tr>
        </thead>
    </table>
    <div className="ml-2 hover:bg-gray-200 rounded-lg">
      {children}
    </div>
  </div>
  );
}


export function ListFromJSON({ items }) {

  // Generating list items for each component
  const listItems = items.map((component, index) => (
    <li key={index} dangerouslySetInnerHTML={{ __html: component }}/>
  ));

  return (
    <ul className="list-disc ml-4">
      {listItems}
    </ul>
  );
}

export function ExpFromJSON({data}) {
  // Helper function to join items with a separator
  return (
    <ExpHeading data={data.head} children = <ListFromJSON items = {data.body}/> />
  );
}

export function Divider({title, children}) {
  return (
    <>
    <h2 className="border-b text-accent mt-2 font-serif text-2xl">{title}</h2>
    <div className="ml-2 mt-2">
      {children}
    </div>
    </>
  );
}

export function Header({name, title}) {
  return (
    <>
    <h1 className="font-serif text-3xl mt-2">{name}</h1>
    <div className="border-b font-serif text-xl">
      {title}
    </div>
    </>
  );
}

export function SkillsFromJSON(json) {
    // Helper function to join items with a separator
    const joinItems = (items) => items.join(' | ');

    // Build HTML for each key in the JSON object
  //  indents.push(<span className='indent' key={i}></span>);

    let htmlResult = [];
    for (const key in json) {
      for (const k2 in json[key]) {
        htmlResult.push(<p key={k2} className="hover:bg-gray-200 rounded-lg"> {joinItems(json[key][k2])} </p>);
      }
    }

    return htmlResult;
}


export function EducationFromJSON({json}) {

  let htmlResult = [];

  for (const key in json) {
      let award = json[key];
      let contentObj = <div dangerouslySetInnerHTML={{ __html: award.body }} />
      htmlResult.push(<ExpHeading key={key} data = {award.head} children={contentObj} />);
  }

  return htmlResult;
}

export function AwardsTable(json) {
    // Helper function to join items with a separator

    // Build HTML for each key in the JSON object
  //  indents.push(<span className='indent' key={i}></span>);

    let htmlResult = [];

    for (const key in json) {
      for (const k2 in json[key]) {
        htmlResult.push(<AwardEntry key={k2} award={json[key][k2]}/>);
      }
    }

    return (
    <div className="w-full">
      {htmlResult}
    </div>);

}

export function Citation({ citation }) {
  if (citation.link) {
    return (
      <a  href={citation.link} target="_blank" rel="noopener noreferrer">
      <div className="hover:bg-gray-200 rounded-lg w-full">
        <p>{citation.authors}, <strong>{citation.title}</strong>,{' '}{citation.citation}
        </p>
      </div>
      </a>
    );
  }
    return (
      <div className="hover:bg-gray-200 rounded-lg w-full">
        <p>
          {citation.authors}, <strong>{citation.title}</strong>,{' '}
          {citation.citation}
        </p>
      </div>
    );
}

export function PubList({ items }) {

  // Generating list items for each component
  const listItems = items.map((component, index) => (
    <li key={index}>
      <Citation citation={component}/>
    </li>
  ));

  return (
    <ol className="ml-4 list-decimal">
      {listItems}
    </ol>
  );
}

export function Banner({items}) {
    
      let htmlResult = [];
      for (const idx in items) {
          htmlResult.push(
          <div className="m-auto hover:bg-gray-200 text-accent rounded-lg pr-4 pl-4">
            <a href={items[idx].link} target="_blank" rel="noopener noreferrer">
              <div className="flex justify-content text-center w-auto m-auto max-h-14">
                <img className="w-4 mr-2" src={items[idx].imgsrc} key={idx}/>
                <p>{items[idx].body}</p>
              </div>
            </a>
          </div>
          );
      }
  
    return (
      <div className="flex justify-content w-full mt-2">
      <div className=" content-center w-9/12 m-auto text-xl flex justify-content">
        {htmlResult}
      </div>
      </div>
      );


}
