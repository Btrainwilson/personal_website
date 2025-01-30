"use client"
import * as React from "react"

import { PublicationTable, AwardTable } from "@/components/cv/tables";
import { SeparatedList } from "@/components/cv/text";

import cv from '@/content/cv.json'
import { ExpSection } from "@/components/cv/layout";
import { ExperienceTable, NewsTable } from "@/components/cv/tables";
import SocialIcons from "@/components/cv/sugar";

const education = [
  {
    title: "Doctorate of Philosophy", location: 'Electrical and Computer Engineering', institution: "Purdue University",
    date: "2019 - 2024", link: "https://www.purdue.edu"
  },
  {
    title: "Bachelor of Science", location: 'Computer Engineering', institution: "Purdue University",
    date: "2015 - 2019", link: "https://www.purdue.edu"
  }
];

const positions = [
  { title: 'Research Scientist', subtitle: 'AI for Quantum Team', location: 'Quantinuum, London', date: '2025 - ', link: 'https://www.quantinuum.com' },
  { title: 'Research Scientist', subtitle: 'Oxford QNLP Group', location: 'Quantinuum, Oxford', date: '2024 - 2025', link: 'https://www.quantinuum.com' },
  { title: 'Visiting Researcher', subtitle: 'NanoML', location: 'Purdue University', date: '2024 - ', link: 'https://www.purdue.edu' },
  { title: 'Team Lead and Founder', subtitle: 'NanoML', location: 'Purdue University', date: '2021 - 2024', link: 'https://www.purdue.edu' },
  { title: 'Research Assistant', subtitle: 'Elmore Family School of ECE', location: 'Purdue University', date: '2019 - 2024', link: 'https://www.purdue.edu' },
  { title: 'Algorithms Graduate Researcher', subtitle: 'Elmore Emerging Frontiers Center', location: 'Purdue University', date: '2021 - 2024', link: 'https://www.purdue.edu' },
  { title: 'Quantum Algorithms Graduate Researcher', subtitle: 'Quantum Science Center', location: 'Oak Ridge National Laboratory', date: '2021 - 2024', link: 'https://www.purdue.edu' },
  { title: 'Quantum Algorithms Researcher', subtitle: 'QuEra Computing', location: 'Harvard University / MIT', date: '2022', link: 'https://www.quera.com' },
  { title: 'Summer Undergraduate Research Fellow', subtitle: 'Elmore Family School of ECE', location: 'Purdue University', date: '2017', link: 'https://www.purdue.edu' },
];

const affiliations = [
  { title: 'Quantum for AI Team', location: 'Quantinuum, London', date: '2024 - ', link: 'https://www.quantinuum.com' },
  { title: 'Oxford Theory Group', location: 'Quantinuum, Oxford', date: '2024 - 2025', link: 'https://www.quantinuum.com' },
  { title: 'Quantum Science Institute', location: 'Purdue University', date: '2020 - 2024', link: 'https://www.purdue.edu' },
  { title: 'Oak Ridge National Laboratory', location: 'Quantum Science Center', date: '2020 - 2024', link: 'https://www.qscience.com' },
  { title: 'Quantum Applications and Algorithms', location: 'QuEra Computing', date: '2022', link: 'https://www.purdue.edu' },
  { title: 'Summer Undergraduate Research Fellow', location: 'Purdue University', date: '2017', link: 'https://www.purdue.edu' },
];

const listToExp = (lists: any[]) => {
  return lists.map((list) => {
    return {
      title: list[0],
      location: list[1],
      date: list[2],
    };
  });
};

export default function Page() {


  return (
    <div className="m-4">
      <div className="border-b font-serif text-xl flex items-center justify-between">
        <h1 className="font-serif text-3xl mt-2">Blake A. Wilson</h1>
        <p>Research Scientist @ Quantinuum</p>
        <SocialIcons
          githubUrl={cv.urls.github}
          blueskyUrl={cv.urls.bluesky}
          websiteUrl={cv.urls.website}
          linkedinUrl={cv.urls.linkedin}
        />
      </div>
      <div>
      </div>
      <p className="mt-2">
        {cv.summary_RS}
      </p>
      <div className="text-2xl divider divider-base text-base-content"> Skills </div>
      <SeparatedList skills={cv.skillList} />
      <div className="text-2xl divider divider-base text-base-content"> Education </div>
      <AwardTable awards={education} />
      <div className="mt-8 text-2xl divider divider-base text-base-content"> Experience </div>
      <ExpSection heading={cv.experience.quantinuum.head} content={cv.experience.quantinuum.content} />
      <ExpSection heading={cv.experience.ml.head} content={cv.experience.ml.content} />
      <ExpSection heading={cv.experience.quera.head} content={cv.experience.quera.content} />
      <div className="text-2xl divider divider-base text-base-content"> Publications </div>
      <PublicationTable publications={cv.pubs} />
      <div className="text-2xl divider divider-base text-base-content"> Conference </div>
      <PublicationTable publications={cv.confs} />
      <div className="text-2xl divider divider-base text-base-content"> In the News </div>
      <NewsTable experiences={cv.news} />
      <div className="text-2xl divider divider-base text-base-content"> Extended Experience </div>
      <ExperienceTable experiences={positions} />
      <div className="mt-8 text-2xl divider divider-base text-base-content"> Affiliations </div>
      <ExperienceTable experiences={affiliations} />
      <div className="mt-8 text-2xl divider divider-base text-base-content"> Leadership </div>
      <ExperienceTable experiences={listToExp(cv.leadership)} />
      <div className="mt-8 text-2xl divider divider-base text-base-content"> Speaking </div>
      <ExperienceTable experiences={listToExp(cv.speaking)} />
      <div className="mt-8 text-2xl divider divider-base text-base-content"> Grants </div>
      <ExperienceTable experiences={listToExp(cv.grants)} />
      <div className="mt-8 text-2xl divider divider-base text-base-content"> Competition </div>
      <ExperienceTable experiences={listToExp(cv.competitions)} />
      <div className="mt-8 text-2xl divider divider-base text-base-content"> Software </div>
      <ExperienceTable experiences={listToExp(cv.extSWE)} />
      <div className="mt-8 text-2xl divider divider-base text-base-content"> Extended Work </div>
      <ExperienceTable experiences={listToExp(cv.extWork)} />
      <div className="mt-8 text-2xl divider divider-base text-base-content"> Teaching Roles </div>
      <ExperienceTable experiences={listToExp(cv.teachingRoles)} />
      <div className="mt-8 text-2xl divider divider-base text-base-content"> Refereee Roles </div>
      <ExperienceTable experiences={listToExp(cv.refereeRoles)} />
      <div className="mt-8 text-2xl divider divider-base text-base-content"> Funding </div>
      <ExperienceTable experiences={listToExp(cv.funding)} />
      <div className="mt-8 text-2xl divider divider-base text-base-content"> Affiliations </div>
      <ExperienceTable experiences={listToExp(cv.affiliations)} />
      <div className="mt-8 text-2xl divider divider-base text-base-content"> Mentee Award </div>
      <ExperienceTable experiences={listToExp(cv.mentees)} />
      <div className="mt-8 text-2xl divider divider-base text-base-content"> References </div>
      <ExperienceTable experiences={listToExp(cv.refsnophone)} />
    </div>
  );
}


//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Affiliations </div>
//      <AwardTable awards={affiliations} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Leadership </div>
//      <AwardTable awards={cv.leadership} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Speaking </div>
//      <AwardTable awards={cv.speaking} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Grants </div>
//      <AwardTable awards={cv.grants} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Competition </div>
//      <AwardTable awards={cv.competitions} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Software </div>
//      <AwardTable awards={cv.extSWE} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Extended Work </div>
//      <AwardTable awards={cv.extWork} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Teaching Roles </div>
//      <AwardTable awards={cv.teachingRoles} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Refereee Roles </div>
//      <AwardTable awards={cv.refereeRoles} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Funding </div>
//      <AwardTable awards={cv.funding} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Affiliations </div>
//      <AwardTable awards={cv.affiliations} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Mentee Award </div>
//      <AwardTable awards={cv.mentees} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> References </div>
//      <AwardTable awards={cv.refsnophone} />
//

//
//      <AcademicTable positions={education} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Experience </div>
//      <ExperienceTable data={cv.experience.quantinuum} />
//      <ExperienceTable data={cv.experience.ml} />
//      <ExperienceTable data={cv.experience.quera} />
//
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Positions </div>
//      <AcademicTable positions={positions} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Affiliations </div>
//      <AcademicTable positions={affiliations} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Publications </div>
//      <PubTable positions={cv.pubs} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Conference </div>
//      <PubTable positions={cv.confs} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Leadership </div>
//      <AwardsTable positions={cv.leadership} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Speaking </div>
//      <AwardsTable positions={cv.speaking} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Grants </div>
//      <AwardsTable positions={cv.grants} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Competition </div>
//      <AwardsTable positions={cv.competitions} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Software </div>
//      <AwardsTable positions={cv.extSWE} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Extended Work </div>
//      <AwardsTable positions={cv.extWork} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Teaching Roles </div>
//      <AwardsTable positions={cv.teachingRoles} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Refereee Roles </div>
//      <AwardsTable positions={cv.refereeRoles} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Funding </div>
//      <AwardsTable positions={cv.funding} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Affiliations </div>
//      <AwardsTable positions={cv.affiliations} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Mentee Awards </div>
//      <AwardsTable positions={cv.mentees} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> References </div>
//      <AwardsTable positions={cv.refsnophone} />
