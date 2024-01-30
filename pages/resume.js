import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import NavBar from '../components/nav-bar';
import * as Resume from '../components/resume';
import React from 'react';
import { NamedTitle } from '../content/cv/titles/academia';


const skillsJSON = require('../content/cv_static/skills/skills.json');
const educationJSON = require('../content/cv_static/education/advisors.json');
const positionsJSON = require('../content/cv_static/experience/current.json');
const expJSON = require('../content/cv_static/experience/exp.json');
const cvJSON = require('../content/cv_static/cv.json');



export default function Home() {

  return (
    <div className="ml-4 mr-4">
      <FullCV />
    </div>
  );
}

export function ResumeMain() {

  return (
      <>
      <NamedTitle />
      <Resume.Divider title="Current Positions" children = {
        <Resume.EducationFromJSON json={positionsJSON} /> 
      }/>
      <Resume.Divider title="Skills" children = {
        <Resume.SkillsFromJSON json={skillsJSON.webdev} />
      }/>
      <Resume.Divider title="Education" children = {
        <Resume.EducationFromJSON json={educationJSON} /> 
      }/>
      <Resume.Divider title="Experience" children={
        <>
        <Resume.ExpFromJSON data={expJSON.ml} />
        <Resume.ExpFromJSON data={expJSON.quera} />
        <Resume.ExpFromJSON data={expJSON.uav} />
        <Resume.ExpFromJSON data={expJSON.arm} />
        </>
        }
      />
      </>
  );
}

export function FullCV() {
  return (
    <>
    <NamedTitle />
    <Resume.Divider title="Current Positions" children = {
      <Resume.EducationFromJSON json={positionsJSON} /> 
    }/>
    <Resume.Divider title="Education" children = {
      <Resume.EducationFromJSON json={educationJSON} /> 
    }/>
    <Resume.Divider title="Experience" children={
      <>
      <Resume.ExpFromJSON data={expJSON.ml} />
      <Resume.ExpFromJSON data={expJSON.quera} />
      <Resume.ExpFromJSON data={expJSON.uav} />
      <Resume.ExpFromJSON data={expJSON.arm} />
      </>
      }
    />
    <Resume.Divider title="Publications" children = {
      <Resume.PubList items={cvJSON.pubs} />
    }/>
    <Resume.Divider title="Conferences" children = {
      <Resume.PubList items={cvJSON.conferences} />
    }/>
    <Resume.Divider title="Expertise" children = {
      <Resume.SkillsFromJSON json={skillsJSON.engr} />
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
    </>

  );

}





