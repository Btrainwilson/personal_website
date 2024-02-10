import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import ProjectCard from '../components/projects';
import NavBar from '../components/nav-bar';
import HeroCard, {ImageBanner, SectionHeader, HeroImage} from '../components/web';


export async function getStaticProps() {
  const projJSON = require('../content/projects/full.json');
  return {
    props: {
      projJSON,
    },
  };
}

export default function Home ({ projJSON }) {
  return (
      <NavBar children=
        <div>
          <HeroImage title="Algorithm Design" image='images/atom-banner.png' />
          <div className="flex-col w-6/12 m-auto">
            <SectionHeader title="Drone Routing" />
            <img src="images/drone.svg" className="m-auto h-72 mb-6 mt-6" />
            <p className="mb-10 mt-6">

            </p>
        </div>
        <div className="ml-4 mr-4 flex justify-center">
          <ProjectCard project={projJSON.risky} target="_blank"/>
          <ProjectCard project={projJSON.nanomcmc} target="_blank"/>
        </div>
        </div>
      />
  );
}

