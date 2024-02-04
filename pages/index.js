import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import ProjectCard from '../components/projects';
import NavBar from '../components/nav-bar';
import HeroCard, {ImageBanner, SectionHeader} from '../components/web';


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
          <HeroCard title="Welcome to my website!" description="Blake Wilson | NanoML" subdescription="Ph.D. Candidate at Purdue University" button="Get in touch" image='images/computer-banner.png' link="mailto:wilso692@purdue.edu" />
          <SectionHeader title="Projects" />
          <div className="ml-4 mr-4 flex justify-center">
            <ProjectCard project={projJSON.polytensor} target="_blank"/>
            <ProjectCard project={projJSON.nanomcmc} target="_blank"/>
            <ProjectCard project={projJSON.pauli} />
          </div>
          <SectionHeader title="Collaborations" />
          <ImageBanner urls={['images/purdue_logo.jpg', 'images/qsc.jpg', 'images/quera.png', 'images/microsoft.svg']} />
        </div>
      />
  );
}

