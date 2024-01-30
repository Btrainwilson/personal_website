import Head from 'next/head';

export function AwardEntry({award}) {
  return (
    <table class="table-auto w-full">
      <thead>
          <tr>
            <td class="font-bold  w-4/12">
              {award[0]}
            </td>
            <td class="w-4/12">
              {award[1]}
            </td>
            <td class="w-4/12 text-right">
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
    <table className="table-auto w-full ">
      <thead>
          <tr>
            <td class="font-bold  w-3/12" dangerouslySetInnerHTML={{ __html: data[0] }}/>
            <td class="w-3/12" dangerouslySetInnerHTML={{ __html: data[1] }}/>
            <td class="w-3/12 italic" dangerouslySetInnerHTML={{ __html: data[2] }}/>
            <td class="w-3/12 text-right"> 
              <pre dangerouslySetInnerHTML={{ __html: data[3].padEnd(11, ' ') }}/>
            </td>
          </tr>
        </thead>
    </table>
    <div className="ml-2">
      {children}
    </div>
  </div>
  );
}


export function ListFromJSON({ items }) {

  // Generating list items for each component
  const listItems = items.map((component, index) => (
    <li dangerouslySetInnerHTML={{ __html: component }}/>
  ));

  return (
    <ul class="list-disc ml-4">
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
    <h2 class="border-b mt-2 font-serif text-2xl">{title}</h2>
    <div className="ml-2 mt-2">
      {children}
    </div>
    </>
  );
}

export function Header({name, title}) {
  return (
    <>
    <h1 className="font-serif text-3xl">{name}</h1>
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
        console.log(json[key][k2]);
        htmlResult.push(<p> {joinItems(json[key][k2])} </p>);
      }
    }

    return htmlResult;
}


export function EducationFromJSON({json}) {

  let htmlResult = [];

  for (const key in json) {
      console.log(json[key]);
      let award = json[key];
      let contentObj = <div dangerouslySetInnerHTML={{ __html: award.body }} />
      htmlResult.push(<ExpHeading data = {award.head} children={contentObj} />);
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
        htmlResult.push(<AwardEntry award={json[key][k2]}/>);
      }
    }

    return (
    <div class="w-full">
      {htmlResult}
    </div>);

}

