import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import ProjectCard from '../components/projects';
import NavBar from '../components/nav-bar';
import HeroCard, {ImageBanner, SectionHeader, HeroImage} from '../components/web';

export async function getStaticProps() {

  const projJSON = require('../content/research.json');

  return {
    props: {
      projJSON
    },
  };
}

export default function Home ({ projJSON }) {
  return (
      <NavBar children=
        <div>
          <HeroImage title="Research" image='images/atom-banner.png' />
          <div className="flex-col w-6/12 m-auto">
          <p className="mt-6">
            My research is mainly about answering two questions: </p>
            <ol className="list-decimal ml-4 mb-2">
              <li><p>How do we apply artificial intelligence to physics and engineering?</p></li>
              <li><p>What are the limits of artificial intelligence?</p></li>
            </ol>
            <p> The first question requires developing algorithms to solve problems that are difficult with classical methods, such as optimization, generative modeling, and design. The second question involves defining artificial intelligence in some meaningful way, e.g., as a Turing machine or learning problem.
          </p>
          <div className="flex justify-center">
            <ProjectCard project={projJSON.cuda} />
            <ProjectCard project={projJSON.algo} />
            <ProjectCard project={projJSON.ml} />
          </div>
          <div className="ml-4 mr-4 flex justify-center">
          </div>
        </div>
        </div>
      />
  );
}

