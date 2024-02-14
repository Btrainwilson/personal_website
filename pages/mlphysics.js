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
          <HeroImage title="Machine Learning" image='images/atom-banner.png' />
          <div className="flex-col w-6/12 m-auto">
            <SectionHeader title="ML-Assisted Quantum Optimization" />
            <div className="flex mb-6 mt-6 m-auto">
            <div className="ml-6 mr-6 m-auto">
            <img src="images/projects/ml_framework.jpeg" className="h-48 w-auto" />
              <p className="m-auto mt-4">
                Thermo-photo voltaic cells optimized by quantum sampling algorithms.             </p>
            </div>
            <div className="ml-6 mr-6 m-auto ">
            <img src="images/projects/diffraction_framework.jpeg" className="h-48 w-auto" />
              <p className="m-auto mt-4">
                Diffractive meta-grating cells optimized by quantum sampling algorithms.             </p>
            </div>
            </div>
            <p className="mb-10 mt-6 m-auto">
              We are developing a machine learning frameworks for quantum Bayesian optimization.             </p>
        </div>
        <SectionHeader title="Energy Models" />
        <div className="ml-4 mr-4 flex justify-center">
          <ProjectCard project={projJSON.polytensor} target="_blank"/>
          <ProjectCard project={projJSON.nanomcmc} target="_blank"/>
        </div>
        </div>
      />
  );
}

