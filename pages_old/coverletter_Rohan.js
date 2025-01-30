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

  let titles = ["Ron and Dotty Garvin Tonjes Professor of ECE ",
  "Professor of Materials Engineering (courtesy) ",
  "School of Electrical and Computer Engineering (ECE) ",
  "Birck Nanotechnology Center ",
  "Purdue Quantum Science and Engineering Institute ",
  "Purdue University ",
  "1205 West State Street ",
  "West Lafayette, IN 47907-2057, USA "]
  return (
    <div className="ml-20 mr-20">
      <div className="mb-10">
      <Info name="Alexandra Boltasseva" titles={titles} address="" email="aeb@purdue.edu" phone="+1 765-494-0301" />


      </div>
    <p className="mb-2"> Dear 4+1 Program Committee, </p>
        <p> It gives me great joy to recommend Rohan Ojha for the 4+1 program at Purdue.
        I have mentored Rohan for close to two years working on machine learning research projects for our group. He's become an integral member of our Nanophotonics Machine Learning team, developing algorithms in computer vision, measurements, and machine learning for our nanophotonics experiments.  

        His research ability and determination are incredible, as indicated by his upcoming publication in Advanced Photonics. Under my team's guidance, Rohan  
        In 

        Sincerely, 
        Blake Wilson

         </p>
    </div>
  );
}
