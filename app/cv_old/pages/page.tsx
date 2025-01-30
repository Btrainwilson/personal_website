
"use client"
import * as React from "react"

import Hero from '@/components/about/hero';

import Footer from "@/components/footers/simple";
import { AcademicTable, PubList, PubTable } from "@/components/about/academiccard";
import { Card } from "@/components/ui/card";
import BannerHero from "@/components/about/hero";


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
  { title: 'Research Scientist', department: 'Oxford Theory Group', institution: 'Quantinuum', date: '2024-', link: 'https://www.quantinuum.com' },
  { title: 'Visiting Researcher', department: 'NanoML', institution: 'Purdue University', date: '2024-', link: 'https://www.purdue.edu' },
  { title: 'Team Lead and Founder', department: 'NanoML', institution: 'Purdue University', date: '2021-2024', link: 'https://www.purdue.edu' },
  { title: 'Research Assistant', department: 'Elmore Family School of ECE', institution: 'Purdue University', date: '2019-2024', link: 'https://www.purdue.edu' },
  { title: 'Algorithms Graduate Researcher', department: 'Elmore Emerging Frontiers Center', institution: 'Purdue University', date: '2021-2024', link: 'https://www.purdue.edu' },
  { title: 'Quantum Algorithms Graduate Researcher', department: 'Quantum Science Center', institution: 'Oak Ridge National Laboratory', date: '2021-2024', link: 'https://www.purdue.edu' },
  { title: 'Quantum Algorithms Researcher', department: 'QuEra Computing', institution: 'Harvard University / MIT', date: '2022', link: 'https://www.quera.com' },
  { title: 'Summer Undergraduate Research Fellow', department: 'Elmore Family School of ECE', institution: 'Purdue University', date: '2017', link: 'https://www.purdue.edu' },
];

const affiliations = [
  { title: 'Oxford Theory Group', institution: 'Quantinuum', date: '2024-', link: 'https://www.quantinuum.com' },
  { title: 'Quantum Science Institute', institution: 'Purdue University', date: '2020-2024', link: 'https://www.purdue.edu' },
  { title: 'Oak Ridge National Laboratory', institution: 'Quantum Science Center', date: '2020-2024', link: 'https://www.qscience.com' },
  { title: 'Quantum Applications and Algorithms', institution: 'QuEra Computing', date: '2022', link: 'https://www.purdue.edu' },
  { title: 'Summer Undergraduate Research Fellow', institution: 'Purdue University', date: '2017', link: 'https://www.purdue.edu' },
];



const publications = [
  { citation: 'Oxford Theory Group', institution: 'Quantinuum', date: '2024-', link: 'https://www.quantinuum.com' },
  { citation: 'Quantum Science Institute', institution: 'Purdue University', date: '2020-2024', link: 'https://www.purdue.edu' },
  { citation: 'Oak Ridge National Laboratory', institution: 'Quantum Science Center', date: '2020-2024', link: 'https://www.qscience.com' },
  { citation: 'Quantum Applications and Algorithms', institution: 'QuEra Computing', date: '2022', link: 'https://www.purdue.edu' },
  { citation: 'Summer Undergraduate Research Fellow', institution: 'Purdue University', date: '2017', link: 'https://www.purdue.edu' },
];

const interests = [
  "Machine Learning and Generative Modeling for Multiphysics and Design",
  "Discrete Mathematics and Statistical Mechanics",
  "Graph-Theoretic Analysis for Opimization",
  "Nanophotonic Design for Quantum Computing",
  "Software Engineering and Dev-Ops"
];

export default function MainPage(props: any) {
  console.log(props.cv)

  return (
    <div className="w-full" >
      <BannerHero
        title='Curriculum Vitae'
        subtitle='Updated 10/2024'
        backgroundImageUrl='./images/paper-pens.png'
        buttonText='Download'
        onButtonClick={() => console.log('Button clicked!')}
      />
      <div className="m-2">
        <Card>
          <div className="m-2">
            <div className="text-2xl divider divider-base text-base-content"> Education </div>
            <AcademicTable positions={education} />
            <div className="mt-8 text-2xl divider divider-base text-base-content"> Positions </div>
            <AcademicTable positions={positions} />
            <div className="mt-8 text-2xl divider divider-base text-base-content"> Affiliations </div>
            <AcademicTable positions={affiliations} />
            <div className="mt-8 text-2xl divider divider-base text-base-content"> Relevant Publications </div>
            <PubTable citations={props.cv} />
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

//
