import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import ProjectCard from '../components/projects';
import NavBar from '../components/nav-bar';
import HeroCard, {AboutBanner, ImageBanners, ImageBanner, SectionHeader, HeroImage} from '../components/web';


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
          <HeroImage title="Welcome!" image='images/purple_oxford.jpg' />
          <div className="m-auto w-3/4 items-center">
          <AboutBanner/>
          <SectionHeader title="Projects" />
            <div className="ml-4 mr-4 flex justify-center">
              <ProjectCard project={projJSON.polytensor} target="_blank"/>
              <ProjectCard project={projJSON.nanomcmc} target="_blank"/>
              <ProjectCard project={projJSON.pauli} />
            </div>
            <SectionHeader title="Collaborations" />
            <div className="ml-2 mr-14">
            <ImageBanners urls={['images/purdue_logo.jpg','images/quera.png', 'images/qsc.jpg' ]} />
            <ImageBanners urls={['images/quantinuum.webp',  'images/microsoft.svg', ]} />
            </div>
        </div>
      </div>
      />
  );
}

