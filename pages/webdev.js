import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import NavBar from '../components/nav-bar';
import * as Resume from '../components/resume';
import React from 'react';
import { NamedTitle } from '../content/cv/titles/academia';


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

  return (
    <div className="ml-10 mr-10">
      <NamedTitle />
      <Resume.Banner items={cvJSON.banner}/>
      <Resume.Divider title="Summary" children = {
        <p>
          {cvJSON.summary_web}
        </p>
      }/>
      <Resume.Divider title="Skills" children = {
        <Resume.SkillsFromJSON json={skillsJSON.mlengr} />
      }/>
      <Resume.Divider title="Experience" children={
        <>
        <Resume.ExpFromJSON data={expJSON.ml} />
        <Resume.ExpFromJSON data={expJSON.quera} />
        <Resume.ExpFromJSON data={expJSON.arm} />
        </>
        }
      />
      <Resume.Divider title="Education" children = {
        <Resume.EducationFromJSON json={educationJSON} /> 
      }/>
      <Resume.Divider title="Software Packages" children={
        <>
        <Resume.ExpFromJSON data={projJSON.mcmcpoly} />
        <Resume.ExpFromJSON data={projJSON.pauli} />
        </>
        }
      />
    </div>
  );
}


