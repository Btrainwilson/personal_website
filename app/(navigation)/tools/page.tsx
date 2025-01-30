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
import { ProjectCard } from "@/components/projects/card";

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
    let q = ["New directions in science are launched by new tools much more often than by new concepts. The effect of a concept-driven revolution is to explain old things in new ways. The effect of a tool-driven revolution is to discover new things that have to be explained.\n", "Freeman Dyson"]
    setQuote(q[0] + ' - ' + q[1]);
  }

  return (
    <div className="w-full bg-base-300" >

      <Banner
        backgroundImageUrl="./images/purpleCover.png"
      >
        <HeroText
          title='Tools'
          subtitle={quote} />
      </Banner>

      <Card className="m-2">
        <h1 className="m-2 text-lg">To Be Added</h1>
      </Card>
      <Footer />
    </div>
  );
}

//
//      <div className="flex">
//        <ProjectCard name={"PearSAN"} description={"HI"} img={"../../../public/images/ox.jpg"} />
//      </div>
