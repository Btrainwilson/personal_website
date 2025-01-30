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
      <p className="mb-2"> Dear Steve Clark,</p>
      <p>

        Dear Hiring Manager,

        I am excited to apply for the position of AI for Quantum, Research Scientist in Quantinuum's London office.
        Currently, I am a Research Scientist III at the Oxford office, where I am developing graph diffusion models for circuit synthesis, transpilation, neural architecture search, and optimization.
        While I’ve enjoyed my time in the Oxford office, my skills in generative AI for circuit design, quantum sampling, and quantum photonic device design align more closely with the AI for Quantum initiative at the London office.

        My academic and professional journey has focused on integrating quantum samplers into generative AI in the near term and using hybrid generative AI, such as quantum enhanced MCMC and latent optimization, to design photonic devices for quantum hardware.
        For example, I spent time at Harvard/MIT with QuEra Computing developing the first hybrid generative model using a neutral atom device to design metasurfaces for more efficient neutral atom devices.
        We also demonstrated comparative advantage through spectral gap analysis and integrated modern AI techniques, such as latent diffusion and adversarial VAEs, with quantum sampling methods.
        Additionally, it is one of the first demonstrations of completing the AI-Quantum loop, i.e., using a quantum device to improve an AI model which further improves a quantum device all in the same project.

        This project was one of a few I've had the opportunity to lead as the founder and lead of the NanoML team at Purdue University.
        These include latent optimization models for integrated quantum photonics, hybrid quantum MCMC sampling methods for device design, and graph diffusion models for circuit synthesis.
        My team and I published widely, including in Applied Physics Reviews, CLEO, and Advanced Materials, and contributed impactful open-source physics-inspired ML tools like CUDA-accelerated tensorized polynomial and MCMC Python packages on PyPi which led collaborative work with Microsoft, QuEra, and the Quantum Science Center.
        My collaborative approach has extended to partnerships across teams and offices, such as building a new collaboration between the Broomfield office and Purdue to develop integrated photonic devices using machine learning assisted optimization.

        Beyond research, I am passionate about developing scalable, open-source tools and fostering collaboration across disciplines. My experience spans full-stack cloud applications on AWS, CUDA-accelerated libraries, and front-end tools in React, all aimed at advancing quantum and photonic technologies.
        I am eager to bring my deep expertise in generative AI and quantum computing, collaborative spirit, and leadership experience to the London team. I look forward to discussing how I can contribute to the London office's mission. Please feel free to contact me at your convenience to schedule a conversation.

        Thank you for considering my application.

        Sincerely,
        Blake Wilson



        I am writing to express my interest in the position of AI for Quantum, Research Scientist in the London office at Quantinuum.
        I am currently a Research Scientist III in the Oxford office developing graph diffusion models for circuit synthesis, transpilation, neural architecture search, and optimization with Dimitri Kartsaklis.
        While I've enjoyed working at the Oxford office, I believe my skills and research interests are more closely aligned with the effort in the London office.
        My PhD work focused both on using modern generative AI models, e.g., latent diffusion and adversarial VAEs, for improving quantum optical device design and using a quantum sampler to improve Markov Chain Monte Carlo sampling for generative AI.
        I was successful in demonstrating both of these individually, but also together in the same project as a part of my work at Harvard/MIT with QuEra Computing.
        There, I demonstrated the first hybrid generative model, with comparative advantage, which used a neutral atom device to design future neutral atom devices via metamaterial design.
        On top of my background in hybrid generative AI for quantum applications, I generally have a strong background in physics-inspired machine learning and generative AI for applications in physics and device design, as I regularly contribute new models and techniques to the ML and physics community at venues such as Applied Physics Reviews, CLEO, Advanced Materials, etc.

        This successful project was a part of my effort leading the NanoML team at Purdue University whose goal is to develop machine learning algorithms and models for quantum applications, including latent optimization models for designing integrated quantum photonic devices, such as metasurfaces, hybrid quantum MCMC sampling algorithms for machine learning assisted optimization, and more recently graph diffusion models for circuit synthesis and transpilation tasks.

        More recently as a part of my work with Quantinuum, I've been focused on quantum circuit synthesis and optimization using graph transformers as a denoising diffusion model.

        machine learning assisted generative optimization for designing photonic integrated devices in collaboration with Broomfield, and developing open source tools such as

        Recent work in graph diffusion has me  and I am excited to develop this work here at Quantinuum.
        However, the scope is much broader than natural language processing and I believe can be more widely utilized in the London office.


        developing quantum machine learning algorithms and software at the Quantum Science Center at Purdue University. This role at Rigetti is a perfect fit given my background as a quantum algorithms researcher at QuEra Computing. During my time at QuEra, I worked on a team of software engineers and researchers proving quantum advantage with neutral atom simulations in Julia, designing quantum optical devices for coherent neutral atom control, and software for neutral atom simulations on AWS. This experience solidified my ability to work quickly in a fast-paced start-up environment, lead software and research projects for integrating PyTorch machine learning algorithms with coherent quantum algorithms, and develop quantum devices with commercial device simulation software on a research and development team. On top of my quantum algorithms responsibilities at QuEra, I also represented both QuEra and the Quantum Science Center in negotiations for obtaining funding for quantum algorithms research from AWS. Not only do I have ample experience as a quantum engineer, but I also have experience leading quantum software development through my time as the lead researcher and founder of the NanoML team at Purdue University.

        Over the past three years, I've led a team of 10+ electrical engineers and data scientists researching new quantum optimization and machine learning algorithms for optical and quantum device design.
        On top of publishing our algorithms in top venues, my team and I are dedicated to developing useful, open-source tools, such as full-stack cloud apps using AWS and Nvidia Triton, front-end web apps in React and Tailwind, and highly-parallel CUDA-accelerated polynomial and MCMC python packages on PyPi (polytensor and nanomcmc) which have up to a 66x speed-up over CPU-based methods. Using these techniques, we've published work in Applied Physics Reviews and Quantum 2.0 and wrapping up submissions to PRL, CVPR 2024, and SPIE.
        Throughout my time leading this team, I have led software teams and publishing scientific software and am confident in bringing that leadership to Rigetti for developing quantum devices and software stacks for bleeding edge research. I would love to meet up and discuss my experience further. I'm happy to set up a virtual meet-up or phone call at your earliest convenience. Thank you for your consideration.
        Sincerely,
        Blake Wilson

        Dear Hiring Manager,

        I am applying for the Quantum Engineer role at Rigetti. As a Ph.D. Candidate at Purdue University's Quantum Science Center, I specialize in quantum machine learning algorithm and software development. My tenure as a quantum algorithms researcher at QuEra Computing has honed my skills in neutral atom simulations and quantum optical device design, using Julia and AWS for implementation. This experience, coupled with leading fast-paced software and research projects, makes me well-suited for the innovative environment at Rigetti.

        At QuEra, I contributed to demonstrating quantum advantage and led initiatives for PyTorch integration with quantum algorithms. Additionally, I have successfully navigated funding negotiations with AWS, reflecting my capability in both technical and leadership roles.

        Founding the NanoML team at Purdue, I direct a group of over ten professionals in developing new quantum optimization and machine learning algorithms. Our contributions, including high-performance computing solutions and publications in prestigious journals, underscore my commitment to advancing quantum engineering.

        I am eager to bring my expertise in quantum engineering and software development leadership to Rigetti. I look forward to discussing how my background aligns with your needs and exploring opportunities to contribute to your team.

        Thank you for considering my application. I am available for a virtual meeting or phone call at your convenience.
      </p>
    </div>
  );
}
