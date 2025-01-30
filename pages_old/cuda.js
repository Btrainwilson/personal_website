import ProjectCard from '../components/projects';
import NavBar from '../components/nav-bar';
import { SectionHeader, HeroImage } from '../components/web';


export async function getStaticProps() {
  const projJSON = require('../content/projects/full.json');
  return {
    props: {
      projJSON,
    },
  };
}

export default function Home({ projJSON }) {
  return (
    <NavBar children=
      <div>
        <HeroImage title="GPU-Computation" image='images/atom-banner.png' />
        <div className="flex-col w-6/12 m-auto">
          <img src="images/cuda.svg" className="m-auto h-72 mb-6 mt-6" />
          <SectionHeader title="Simple Parallel Computations" />
          <p className="mb-10 mt-6">
            Fast machine learning and scientific computing are built on Single Instruction Multiple Data (SIMD) operations giving orders-of-magnitude speed-up. Nvidia's CUDA offers large parallel computation on NVIDIA GPUs. Simple operations are at the heart of polytensor and nanomcmc.
          </p>
        </div>
        <div className="ml-4 mr-4 flex justify-center">
          <ProjectCard project={projJSON.polytensor} target="_blank" />
          <ProjectCard project={projJSON.nanomcmc} target="_blank" />
        </div>
      </div>
    />
  );
}

