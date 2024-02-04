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
    <p className="mb-2"> Dear Hiring Manager,</p>
    <p> &nbsp;&nbsp; I am writing to express my interest in the position of Computational Optimization Engineer at LLNL. I am a Ph.D. Candidate in the Quantum Science Center at Purdue University. This role at LLNL is a perfect fit given my background in machine learning assisted topology optimization for quantum and nanophotonic devices. Over the past three years, I've been leading a team of 10+ machine learning engineers and data scientists developing physics-inspired optimization algorithms for topology optimization. We've developed highly-parallel CUDA-accelerated polynomial and MCMC python packages on PyPi (polytensor and nanomcmc) which have up to a 66x speed-up over CPU-based methods. Additionally, we've used state-of-the-art machine learning networks like transformers, variational autoencoders, diffusion models, and recurrent neural networks for topology optimization and physics simulations. We regularly use HPC resources to run our machine learning workloads through Purdue's RCAC clusters. Additionally, I have experience implementing continuum codes for computational electromagnetics simulations, having built finite elements methods and FDTD methods for coursework simulations. For research, I have used commercial solvers like Lumerical and open-source solvers like S4. Using these techniques, I have published work in Applied Physics Reviews and Quantum 2.0 and am wrapping up submissions to Nature Physics, CVPR 2024, and SPIE.  
        Beyond continuum computational methods, I also have extensive experience in optimization algorithms, machine learning, and software engineering in general, having developed optimal Markov Decision algorithms for package delivery problems, quantum-enhanced Bayesian optimization algorithms on neutral atoms, and Python open-source packages for optimization. I am passionate about leading engineers in developing machine learning optimization algorithms and open-source software. I am excited to continue that journey at LLNL. I would love to meet up and discuss my experience further. I'm happy to set up a virtual meet-up or phone call at your earliest convenience. Thank you for your consideration. 
        Sincerely, 
        Blake Wilson
         </p>
    </div>
  );
}


