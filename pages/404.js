import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import ProjectCard from '../components/projects';
import NavBar from '../components/nav-bar';
import HeroCard, {ImageBanner, SectionHeader, HeroImage} from '../components/web';

export async function getStaticProps() {

  const projJSON = require('../content/research.json');

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
          <HeroCard title = "" description="404: Coming soon!" subdescription="If you came here looking for content, it's being built by our AI." image='images/wave-nodes.png' button="Take me back!" link="/" />
        </div>
      />
  );
}

