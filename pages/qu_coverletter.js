import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import NavBar from '../components/nav-bar';
import * as Resume from '../components/resume';
import React from 'react';
import { NamedTitle } from '../content/cv/titles/academia';
import { Info } from '../components/coverletter';


export async function getStaticProps() {

  const skillsJSON = require('../content/cv_static/skills/skills.json');
  const educationJSON = require('../content/cv_static/education/advisors.json');
  const positionsJSON = require('../content/cv_static/experience/current.json');
  const expJSON = require('../content/cv_static/experience/exp.json');
  const cvJSON = require('../content/cv_static/cv.json');
  const projJSON = require('../content/cv_static/projects.json');

  return {
    props: {
      skillsJSON,
      educationJSON,
      positionsJSON,
      expJSON,
      cvJSON,
      projJSON,
    },
  };
}


export default function Home({ skillsJSON, educationJSON, positionsJSON, expJSON, cvJSON, projJSON }) {
  let titles = ["Graduate Researcher", "Elmore Emerging Frontiers Center", "Machine Learning Team Lead", "Quantum Science Center", "Purdue University", "West Lafayette, IN"];

  return (
    <div className="ml-20 mr-20">
      <div className="mb-10">
      <Info name="Blake Wilson" titles={titles} address="" email="wilso692@purdue.edu" phone="317-504-7249" />

      </div>
    <p className="mb-2"> Dear Rigetti Hiring Manager,</p>
    <p> I am writing to express my interest in the position of Quantum Engineer at Rigetti. I am a Ph.D. Candidate developing quantum machine learning algorithms and software at the Quantum Science Center at Purdue University. This role at Rigetti is a perfect fit given my background as a quantum algorithms researcher at QuEra Computing. During my time at QuEra, I worked on a team of software engineers and researchers proving quantum advantage with neutral atom simulations in Julia, designing quantum optical devices for coherent neutral atom control, and software for neutral atom simulations on AWS. This experience solidified my ability to work quickly in a fast-paced start-up environment, lead software and research projects for integrating PyTorch machine learning algorithms with coherent quantum algorithms, and develop quantum devices with commercial device simulation software on a research and development team. On top of my quantum algorithms responsibilities at QuEra, I also represented both QuEra and the Quantum Science Center in negotiations for obtaining funding for quantum algorithms research from AWS. Not only do I have ample experience as a quantum engineer, but I also have experience leading quantum software development through my time as the lead researcher and founder of the NanoML team at Purdue University. 

        Over the past three years, I've led a team of 10+ optical engineers and data scientists researching new quantum optimization and machine learning algorithms for optical and quantum device design. On top of publishing our algorithms in top venues, my team and I are dedicated to developing useful, open-source tools, such as full-stack cloud apps using AWS and Nvidia Triton, front-end web apps in React and Tailwind, and highly-parallel CUDA-accelerated polynomial and MCMC python packages on PyPi (polytensor and nanomcmc) which have up to a 66x speed-up over CPU-based methods. Using these techniques, we've published work in Applied Physics Reviews and Quantum 2.0 and wrapping up submissions to PRL, CVPR 2024, and SPIE.
        Throughout my time leading this team, I have led software teams and publishing scientific software and am confident in bringing that leadership to Rigetti for developing quantum devices and software stacks for bleeding edge research. I would love to meet up and discuss my experience further. I'm happy to set up a virtual meet-up or phone call at your earliest convenience. Thank you for your consideration. 
        Sincerely, 
        Blake Wilson
         </p>
    </div>
  );
}

Dear Hiring Manager,

I am applying for the Quantum Engineer role at Rigetti. As a Ph.D. Candidate at Purdue University's Quantum Science Center, I specialize in quantum machine learning algorithm and software development. My tenure as a quantum algorithms researcher at QuEra Computing has honed my skills in neutral atom simulations and quantum optical device design, using Julia and AWS for implementation. This experience, coupled with leading fast-paced software and research projects, makes me well-suited for the innovative environment at Rigetti.

At QuEra, I contributed to demonstrating quantum advantage and led initiatives for PyTorch integration with quantum algorithms. Additionally, I have successfully navigated funding negotiations with AWS, reflecting my capability in both technical and leadership roles.

Founding the NanoML team at Purdue, I direct a group of over ten professionals in developing new quantum optimization and machine learning algorithms. Our contributions, including high-performance computing solutions and publications in prestigious journals, underscore my commitment to advancing quantum engineering.

I am eager to bring my expertise in quantum engineering and software development leadership to Rigetti. I look forward to discussing how my background aligns with your needs and exploring opportunities to contribute to your team.

Thank you for considering my application. I am available for a virtual meeting or phone call at your convenience.
