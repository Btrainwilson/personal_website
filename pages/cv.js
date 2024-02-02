import Head from 'next/head';
import NavBar from '../components/nav-bar';
import {Button} from '../components/web';
import HeroCard, {ImageBanner, SectionHeader, HeroImage} from '../components/web';
import Home from './resume';

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

export default function HomePage({ skillsJSON, educationJSON, positionsJSON, expJSON, cvJSON, projJSON }) {
  return (
    <>
    <NavBar /> 
    <HeroImage title="CV" image='images/paper-pens.png' />
    <div className="p-4 mb-6 mt-6 ml-8 mr-8 border-2">
      <Home skillsJSON={skillsJSON} educationJSON={educationJSON} positionsJSON={positionsJSON} expJSON={expJSON} cvJSON={cvJSON} projJSON={projJSON} />
    </div>
    <div className="p-4 mb-6 mt-6 ml-8 mr-8 ">
      <Button title="Download" link="/resume" />
    </div>

    </>
  );

}

