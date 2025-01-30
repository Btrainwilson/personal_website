import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import NavBar from '../components/nav-bar';
import * as Resume from '../components/resume';
import dynamic from 'next/dynamic';

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
      projJSON
    },
  };
}

export default function Home({ skillsJSON, educationJSON, positionsJSON, expJSON, cvJSON, projJSON }) {

  return (
    <div id="pdfelem" className="ml-10 mr-10">
      <NamedTitle />
      <Resume.Banner items={cvJSON.banner}/>
      <Resume.Divider title="Summary" children = {
        <p>
          {cvJSON.summary_web}
        </p>
      }/>
      <Resume.Divider title="Skills" children = {
        <Resume.SkillsFromJSON json={skillsJSON.mlai} />
      }/>
      <Resume.Divider title="Experience" children={
        <>
        <Resume.ExpFromJSON data={expJSON.quera} />
        <Resume.ExpFromJSON data={expJSON.ml} />
        <Resume.ExpFromJSON data={expJSON.arm} />
        </>
        }
      />
    <Resume.Divider title="Selected Publications" children = {
      <Resume.PubList items={cvJSON.pubsml} />
    }/>
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
    <Resume.Divider title="Publications" children = {
      <Resume.PubList items={cvJSON.pubs} />
    }/>

    <Resume.Divider title="Conferences" children = {
      <Resume.PubList items={cvJSON.conferences} />
    }/>
    <Resume.Divider title="Leadership" children = {
      <Resume.AwardsTable json={cvJSON.leadership} />
    }/>
    <Resume.Divider title="Speaking" children = {
      <Resume.AwardsTable json={cvJSON.speaking} />
    }/>
    <Resume.Divider title="Grants" children = {
      <Resume.AwardsTable json={cvJSON.grants} />
    }/>
    <Resume.Divider title="Competitions" children = {
      <Resume.AwardsTable json={cvJSON.competitions} />
    }/>
    <Resume.Divider title="Software Projects" children = {
      <Resume.AwardsTable json={cvJSON.extSWE} />
    }/>
    <Resume.Divider title="Extended Experience" children = {
      <Resume.AwardsTable json={cvJSON.extWork} />
    }/>
    <Resume.Divider title="Teaching Roles" children = {
      <Resume.AwardsTable json={cvJSON.teachingRoles} />
    }/>
    <Resume.Divider title="Referee Roles" children = {
      <Resume.AwardsTable json={cvJSON.refereeRoles} />
    }/>
    <Resume.Divider title="Funding" children = {
      <Resume.AwardsTable json={cvJSON.funding} />
    }/>
    <Resume.Divider title="Affiliations" children = {
      <Resume.AwardsTable json={cvJSON.affiliations} />
    }/>
    <Resume.Divider title="Mentees" children = {
      <Resume.AwardsTable json={cvJSON.mentees} />
    }/>
    <Resume.Divider title="References" children = {
      <Resume.AwardsTable json={cvJSON.refsnophone} />
    }/>
    </div>
  );
}


