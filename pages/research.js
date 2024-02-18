import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import ProjectCard from '../components/projects';
import NavBar from '../components/nav-bar';
import HeroCard, {ImageBanner, SectionHeader, HeroImage} from '../components/web';
import Iframe from 'react-iframe'


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
            <p className="mb-10 mt-6">
            Highly parallel GPU's require a different approach to optimization algorithm design. They also make beautiful art. (Play the shader below using the play button hidden in the bottom left corner of the iframe)
          </p>
            <div className="m-auto ">
              <iframe  width="640px" height="320px" className="m-auto border-solid p-2 border-2" src="https://www.shadertoy.com/embed/MXj3zD?t=10&paused=true&muted=false"/>
            </div>
            <p className="mb-10 mt-6">
            GPU hardware is the workhorse that takes responsibility for the above shader, ChatGPT and Stable Diffusion away from slow CPU's. GPU's are built around Single Instruction Multiple Data (SIMD) operations, or parallel operations acting on vectorized data. </p>

            <img src="images/cuda.svg" className="m-auto h-72 mb-6 mt-6" />
            <p className="mb-10 mt-6">
            Using GPU's for optimization problems is a natural fit. The parallel nature of the hardware allows for many optimization algorithms to be parallelized with careful consideration of the operations. The image below shows the speedup of a GPU over a CPU for a sparse matrix-vector multiplication.
            </p>
            <img src="images/projects/cuda_vs_cpu_sparse.svg" className="m-auto h-104 mb-6 mt-6" />
            <p className="mb-10 mt-6">
            That's why I've built the following two packages to integrate physics and engineering-based applications into the GPU and ML ecosystem.
            </p>
          <div className="ml-4 mr-4 flex justify-center">
            <ProjectCard project={projJSON.polytensor} target="_blank"/>
            <ProjectCard project={projJSON.nanomcmc} target="_blank"/>
          </div>
          Polytensor and nanomcmc are both open-source projects that I've built to integrate physics and engineering-based applications into the GPU and ML ecosystem. polytensor is a Python library that provides a high-level interface to the GPU for parallel polynomial operations. nanomcmc is a Python library that provides a high-level interface to the GPU for Markov Chain Monte Carlo (MCMC) simulations. Both of these libraries are designed to be easy to use and to provide a high level of performance. They are also designed to be easy to integrate into existing codebases, especially machine learning codebases. Both packages use Pytorch on the backend, and so they are compatible with autograd, distributed computing and CUDA-acceleration.
        <SectionHeader title="Markov Chains" />
        <p className="mb-10 mt-6">
        Markov Chains are a powerful tool for modeling complex systems. They are used in a wide range of applications, including physics, biology, economics, and computer science. I've built a package to integrate Markov Chain Monte Carlo (MCMC) simulations into the GPU and ML ecosystem through nanomcmc. Markov chains are also useful for analysis of logistics applications, search and rescue missions, and package delivery. In the following paper, I worked with the AFRL to define infinite horizon games for package delivery problems. Markov chains were incredibly useful for proving optimal algorithms.

        </p>
          <div className="ml-4 mr-4 flex justify-center">
            <ProjectCard project={projJSON.risky} target="_blank"/>
          </div>
        </div>
        </div>
      />
  );
}

