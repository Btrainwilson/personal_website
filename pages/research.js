import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import ProjectCard from '../components/projects';
import NavBar from '../components/nav-bar';
import HeroCard, {ImageBanner, SectionHeader, HeroImage} from '../components/web';

export async function getStaticProps() {

  const researchJSON = require('../content/research.json');
  const projJSON = require('../content/projects/full.json');


  return {
    props: {
      projJSON,
      researchJSON,
    },
  };
}

export default function Home ({ projJSON, researchJSON }) {
  return (
      <NavBar children=
        <div>
          <HeroImage title="Research Statement" image='images/atom-banner.png' />
          <div className="flex-col w-6/12 m-auto">
          <div className="ml-4 mr-4">
            <p className="mt-6">
              My research mainly focuses on algorithm analysis, software development, and algorithm design for engineering. This can either be outcome-focused or tool-focused. For outcome focused research, I find an impactful problem, like search and rescue games, package delivery, renewable energy, etc., and optimally solve a rigorous version of the problem by applying complexity reductions or mathematical insights. Sometimes, I am surprised and the problem is solvable in polytime or can be bounded under realistic assumptions. Most of the time, outcome-driven problems are NP-Hard so optimal algorithms don't exist. This brings us to tool-focused research. My tool-focused research focuses on solving optimization problems using fast heuristics through GPUs, quantum solvers, and generative AI approaches that can be applied to heuristically solving NP-Hard problems. Outside of optimization problems, my tools-focused research also applies to software for Linux utilities, transpilers, website development, and many other applications.              </p>
            </div>
          <SectionHeader title="GPU Heuristics" />

            <img src="images/cuda.svg" className="m-auto h-72 mb-6 mt-6" />
            <p className="mb-10 mt-6">
            Fast machine learning and scientific computing are built on Single Instruction Multiple Data (SIMD) operations giving orders-of-magnitude speed-up. Nvidia's CUDA offers large parallel computation on NVIDIA GPUs. Simple operations are at the heart of polytensor and nanomcmc. 
            </p>
            <img src="images/projects/cuda_vs_cpu_sparse.svg" className="m-auto h-104 mb-6 mt-6" />
          <div className="ml-4 mr-4 flex justify-center">
            <ProjectCard project={projJSON.polytensor} target="_blank"/>
            <ProjectCard project={projJSON.nanomcmc} target="_blank"/>
          </div>
        </div>
        </div>
      />
  );
}

