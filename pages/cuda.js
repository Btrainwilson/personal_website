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
          <HeroImage title="CUDA-Computation" image='images/atom-banner.png' />
          <div className="flex-col w-6/12 m-auto">
            <p className="mb-10 mt-6">
            CUDA offers highly parallel computation on NVIDIA GPUs. This is a great way to speed up your code, but it's not always easy to get started. Let's get started with the basics.
            </p>
            <SectionHeader title="Batching" />
            <p className="mb-10 mt-6">
            The core (pun intended) of CUDA is batching Single Instruction Multi-Data (SIMD) operations by using parallel CUDA-cores. If you set up a computation to be a single operation performed on a large subset of the data at the same time, then the operation is <strong>CUDA-compatible</strong>.
            </p>
          
        </div>
        </div>
      />
  );
}

