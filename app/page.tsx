"use client"
import * as React from "react"

import Hero, { Banner, BannerHero, BannerHeroNoOverlay, HeroText } from '@/components/about/hero';
import Image from 'next/image';
import * as Quotes from '@/lib/quotes';
import { useState, useEffect } from 'react';


import './globals.css';
import Footer from "@/components/footers/simple";
import AcademicCard, { AcademicTable } from "@/components/about/academiccard";
import { ProjectCardSide } from "@/components/projects/card";
import { Card } from "@/components/ui/card";
import NavigationMenuBar from "@/components/navigation/NavBar";
import { Button } from "@/components/ui/button";

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


const announcements = [
  {
    title: 'December 2024: PearSAN', list: [
      "Back in 2022, Michael Bezick joined our research group to work on machine learning.  "
    ]
  },
  {
    title: 'November 2024: Congrats to Vea :)', list: [
      "Back in 2021, just as things were beginning to wind down from Covid, Sasha asked the group if anyone would be willing to chat with a potential new undergraduate researcher. I was just starting my third year but I knew I wanted to start a research lab to work on ML for quantum devices. Luckily, this bright new researcher was extremely optimistic about quantum. I decided to meet with her and it was evident she was beyond passionate about quantum technologies. I had never mentored an undergraduate student one-on-one before, let alone led research efforts (with Sasha's guidance of course). Congratulations to Vea for being accepted to the ECE PhD Program at Purdue :)."
    ]
  },
  {
    title: 'September 2024: Off to Cambridge', list: [
      "I traveled to Cambridge for Quantinuum's internal conference. Met some great scientists, including Adam Ollanik and the Colorado photonics team."
    ]
  },
  {
    title: 'August 2024: RAPTOR ', list: [
      "RAPTOR was published in Advanced Photonics. I was surprised, but grateful, of all the media coverage, including this one from Purdue with a great title. \n https://stories.prf.org/raptor-takes-a-bite-out-of-global-counterfeit-semiconductor-market/"
    ]
  },
];


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
    <>
      <NavigationMenuBar />
      <div className="w-full bg-base-300" >
        <Banner
          backgroundImageUrl="./images/purpleCover.png"
        >
          <HeroText title="AI for Physics and Optimization" subtitle={quote} />
        </Banner>


        <Card className="m-2">
          <div className="ml-4 mt-4 text-xl underline">
            <h1 className="text-4xl">Current Research</h1>
          </div>
          <div className="m-4 text-xl">
            I lead research efforts developing statistical methods for generative modeling and optimization in the context of multiphysics and design.
            Currently, I am leading research efforts with the NanoML team at Purdue University and the AI for Quantum team at Quantinuum in developing latent polynomial and graph learning, machine learning assisted generative optimization models, and fundamental generative modeling techniques for multimodal graph network and multiphysics applications.
            Our research is highly interdisciplinary, and I am always looking for new collaborators.
            If you are interested in working with us, please reach out!
          </div>
        </Card>
        <Card className="m-2">
          <div className="ml-4 mt-4 text-xl underline">
            <h1 className="text-4xl">Generative Modeling for Device Design</h1>
          </div>
          <div className="m-4 flex justify-center items-center">
            <Image src="./images/full_design_process_flat.svg" width={2000} height={300} alt="Quantinuum" />
          </div>
          <div className="m-4 text-xl">
            Device design is a highly multidisciplinary field requiring knowledge all the way from applied mathematics and fundamental physics to algorithm design and programming to material fabrication and characterization to multiphysics and engineering.
            Improving device design requires optimizing the design process at any of these steps, from the initial concept to the final fabrication.
            When designing devices, we try to generate designs to optimize some objective function, such as computation time, power draw, spectrum, etc. In the past, solving design problems relied on the designers intuition, searching large design spaces or even sampling NP-Hard problems. To reduce the design problem's difficulty, we use latent models, such as LDMs, GANs, and VAEs, to extract symmetries and features in the data to construct a more efficient search space for design optimizers.
          </div>
        </Card>
        <div className="bg-base-300 p-2">
          {projects.map((proj: any, index: number) => (
            <div key={index} className="w-full">
              <ProjectCardSide name={proj.name} description={proj.description} img={proj.img} tags={proj.tags} descriptionOnLeft={Boolean(index % 2)} />
            </div>
          ))}
        </div>
        <div className="divider">Announcements</div>
        <div className="bg-base-300 p-2">
          {announcements.map((proj: any, index: number) => (
            <div key={index} tabIndex={0} className="collapse collapse-arrow border-base-100 mb-2 bg-base-100 border">
              <div className="collapse-title text-2xl font-medium">{proj.title}</div>
              <div className="collapse-content">
                <p className="whitespace-pre">{proj.list[0]}</p>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>);
}

//
