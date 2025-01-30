"use client"
import * as React from "react"

import { BannerHero } from '@/components/about/hero';
import * as Quotes from '@/lib/quotes';
import { useState, useEffect } from 'react';


import '../../globals.css';
import Footer from "@/components/footers/simple";
import { Card } from "@/components/ui/card";
import { ImageBanner } from "@/components/about/imagebanner";
import { Banner, HeroText } from "@/components/about/hero";

const positions = [
  { title: 'Research Scientist', institution: 'Quantinuum (Oxford)', date: '2024-Present', link: 'https://www.quantinuum.com' },
  { title: 'Research Assistant', institution: 'Purdue University', date: '2019-2024', link: 'https://www.purdue.edu' },
  { title: 'Researcher', institution: 'QuEra Computing', date: '2022', link: 'https://www.quera.com' },
];

const projects = [
  {
    name: 'Generative Optimization and ML for Device Design',
    description: "When designing devices, we try to generate designs to optimize some objective function, such as computation time, power draw, spectrum, etc. In the past, solving design problems relied on the designers intuition, searching large design spaces or even sampling NP-Hard problems. To reduce the design problem's difficulty, we use latent models, such as LDMs, GANs, and VAEs, to extract symmetries and features in the data to construct a more efficient search space for design optimizers. ",
    tags: ["StatMech", "E&M"],
    date: '2022',
    img: './images/RAPTOR.png',
    link: './'
  },
  {
    name: 'Physics-Inspired Generative Modeling',
    description: 'Generative modeling constructs probabilistic models often by exploiting symmetries, constraints, and physics in data to reduce what needs to be learned. ',
    tags: ["StatMech", "E&M"],
    date: '2024-Present',
    link: '',
    img: './images/MarioBoltzmann.gif'
  },
  {
    name: 'Graph Learning',
    description: 'Graph networks are prevalent throughout mathematics, computer science, and engineering. Message passing, graph neural networks, and more recently graph transformers allow for the manipulation of graphs in machine learning.',
    tags: ["StatMech", "E&M"], date: '2019-2024', link: 'https://www.purdue.edu',
    img: './images/multiphysics_genmodel.svg'
  },
];


const groupmembers = [
  {
    name: "Yuheng Chen",
    title: "PhD Student, NanoML Lead",
    education: "2024, Purdue University, Computer Science, B.S.",
    img: "./images/yuheng.jpg"
  },
  {
    name: "Vaishnavi Iyer",
    title: "PhD Student",
    education: "2024, Purdue University, Computer Science, B.S.",
    img: "./images/vea.jpg"
  },
  {
    name: "Michael Bezick",
    title: "Undergraduate Researcher",
    education: "2026, Purdue University, Computer Science, B.S.",
    img: "./images/michael.jpg"
  },
  {
    name: "Daksh Kumar Singh",
    title: "Undergraduate Researcher",
    education: "2026, Purdue University, Electrical Engineering, B.S.",
    img: "./images/daksh.jpg"
  },
  {
    name: "Rohan Ojha",
    title: "Undergraduate Researcher",
    education: "2026, Purdue University, Electrical Engineering, B.S.",
    img: "./images/rohan_ojha.jpg"
  },
]


export default function Page() {

  const [quote, setQuote] = useState("")

  useEffect(() => {
    newQuote();
  }, [])

  const newQuote = () => {
    let q = Quotes.getRandomQuote();
    setQuote(q[0] + ' - ' + q[1]);
  }

  return (
    <div className="w-full bg-base-300" >

      <Banner
        backgroundImageUrl="./images/purpleCover.png"
      >
        <HeroText
          title='Research Groups'
          subtitle="A society grows when old men plant trees in whose shade they will never sit - Greek Proverb" />
      </Banner>

      <Card className="m-2">
        <div className="m-4 flex items-center">
          <img
            src="./images/portrait_boston.jpg"
            alt="Blake A. Wilson"
            className="w-1/3 h-auto rounded shadow-lg"
          />
          <div className="ml-4 text-xl">
            <h1 className="text-4xl">Blake A. Wilson</h1>
            <h2 className="mb-2 text-2xl">Research Scientist and NanoML Founder</h2>
            <h3 className="text-md">2024 - Oxford Theory Group, Quantinuum</h3>
            <h3 className="text-md">2024 - PhD in ECE, Purdue University</h3>
            <h3 className="text-md">2022 - Quantum Algorithms Researcher, QuEra Computing</h3>
            <h3 className="text-md">2019 - BS in ECE, Purdue University</h3>
          </div>
        </div>

      </Card>
      <Card className="m-2 p-2">
        <h1 className="text-4xl">NanoML</h1>
        <h2 className="mb-2 text-2xl">Purdue University</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-4">
          {groupmembers.map((member: any, index: number) => (
            <Card key={index} className="m-auto p-4 shadow-primary max-w-xs">
              {/* Profile Image */}
              <img
                src={member.img}
                alt={`${member.name}'s profile`}
                className="w-48 h-48 rounded-l mx-auto mb-4"
              />
              {/* Member Details */}
              <div className="text-xl font-medium text-center">{member.name}</div>
              <div className="text-md text-center">{member.title}</div>
            </Card>
          ))}
        </div>
        <h1 className="m-2 mt-4 text-4xl">Alumni</h1>
        <ul className="m-4 list-disc">
          <li className="ml-4 text-2xl">Geetika Chitturi - (Undergraduate Researcher 2024)</li>
          <li className="ml-4 text-2xl">Trang Do - (Undergraduate Researcher 2024)</li>
          <li className="ml-4 text-2xl">Rohan Malavathu - (Undergraduate Researcher 2024)</li>
          <li className="ml-4 text-2xl">Sarthak Tandon - (Undergraduate Researcher 2024)</li>
          <li className="ml-4 text-2xl">Advay Welling - (Undergraduate Researcher 2024)</li>
          <li className="ml-4 text-2xl">Jaxon Pottle - (Undergraduate Researcher 2023)</li>
          <li className="ml-4 text-2xl">Lee Dongeun - (Undergraduate Researcher 2023)</li>
          <li className="ml-4 text-2xl">Seoyoung Cho - (Undergraduate Researcher 2023)</li>
        </ul>
      </Card>
      <Card>
        <h1 className="m-2 text-lg">Collaborators</h1>
        <ImageBanner urls={['../../images/quera.png', '../../images/qsc.jpg', '../../images/microsoft.svg']} />

      </Card>
      <Footer />
    </div>
  );
}

//
