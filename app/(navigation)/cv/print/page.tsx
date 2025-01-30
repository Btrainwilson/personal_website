"use client"
import * as React from "react"

import Footer from "@/components/footers/simple";
import { AcademicTable, AwardsTable, ExperienceTable, PubTable, SkillsList } from "@/components/about/academiccard";

import cv from '@/content/cv.json'

const education = [
  {
    title: "Doctorate of Philosophy", department: 'Electrical and Computer Engineering', institution: "Purdue University",
    date: "2019 - 2024", link: "https://www.purdue.edu"
  },
  {
    title: "Bachelor of Science", department: 'Computer Engineering', institution: "Purdue University",
    date: "2015 - 2019", link: "https://www.purdue.edu"
  }
];

const positions = [
  { title: 'Research Scientist', department: 'Oxford Theory Group', institution: 'Quantinuum', date: '2024 - ', link: 'https://www.quantinuum.com' },
  { title: 'Visiting Researcher', department: 'NanoML', institution: 'Purdue University', date: '2024 - ', link: 'https://www.purdue.edu' },
  { title: 'Team Lead and Founder', department: 'NanoML', institution: 'Purdue University', date: '2021 - 2024', link: 'https://www.purdue.edu' },
  { title: 'Research Assistant', department: 'Elmore Family School of ECE', institution: 'Purdue University', date: '2019 - 2024', link: 'https://www.purdue.edu' },
  { title: 'Algorithms Graduate Researcher', department: 'Elmore Emerging Frontiers Center', institution: 'Purdue University', date: '2021 - 2024', link: 'https://www.purdue.edu' },
  { title: 'Quantum Algorithms Graduate Researcher', department: 'Quantum Science Center', institution: 'Oak Ridge National Laboratory', date: '2021 - 2024', link: 'https://www.purdue.edu' },
  { title: 'Quantum Algorithms Researcher', department: 'QuEra Computing', institution: 'Harvard University / MIT', date: '2022', link: 'https://www.quera.com' },
  { title: 'Summer Undergraduate Research Fellow', department: 'Elmore Family School of ECE', institution: 'Purdue University', date: '2017', link: 'https://www.purdue.edu' },
];

const affiliations = [
  { title: 'Oxford Theory Group', institution: 'Quantinuum', date: '2024 - ', link: 'https://www.quantinuum.com' },
  { title: 'Quantum Science Institute', institution: 'Purdue University', date: '2020 - 2024', link: 'https://www.purdue.edu' },
  { title: 'Oak Ridge National Laboratory', institution: 'Quantum Science Center', date: '2020 - 2024', link: 'https://www.qscience.com' },
  { title: 'Quantum Applications and Algorithms', institution: 'QuEra Computing', date: '2022', link: 'https://www.purdue.edu' },
  { title: 'Summer Undergraduate Research Fellow', institution: 'Purdue University', date: '2017', link: 'https://www.purdue.edu' },
];

export default function Page() {

  return (
    <div className="m-4">

    </div>
  );
}


//      <h1 className="font-serif text-3xl mt-2">Blake A. Wilson</h1>
//      <div className="border-b  font-serif text-xl">
//        Research Scientist @ Quantinuum
//      </div>
//      <SkillsList skills={cv.skillList} />
//      <div className="text-2xl divider divider-base text-base-content"> Education </div>
//      <AcademicTable positions={education} />
//      <div className="mt-8 text-2xl divider divider-base text-base-content"> Experience </div>
//      <ExperienceTable data={cv.experience.quantinuum} />
//      <ExperienceTable data={cv.experience.ml} />
//      <ExperienceTable data={cv.experience.quera} />
//
//       <div className="mt-8 text-2xl divider divider-base text-base-content"> Positions </div>
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
//
