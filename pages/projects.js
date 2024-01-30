import Head from 'next/head';
import NavBar from '../components/nav-bar';
import ProjectCard from '../components/projects';
import HeroCard, {ImageBanner, SectionHeader} from '../components/web';

const projJSON = require('../content/projects/full.json');

export default function Home () {
  return (
    <>
    <NavBar /> 
    
    <SectionHeader title="Machine Learning" />
    <div className="ml-4 mr-4 flex justify-center">
      <ProjectCard project={projJSON.polytensor} target="_blank"/>
      <ProjectCard project={projJSON.nanomcmc} target="_blank"/>
      <ProjectCard project={projJSON.raptor} />
    </div>
    <SectionHeader title="Physics" />
    <div className="ml-4 mr-4 flex justify-center">
      <ProjectCard project={projJSON.pauli} target="_blank" />
      <ProjectCard project={projJSON.rela} target="_blank"/>
      <ProjectCard project={projJSON.qml} target="_blank"/>
    </div>
    <SectionHeader title="Computer Engineering" />
    <div className="ml-4 mr-4 flex justify-center">
      <ProjectCard project={projJSON.salt} target="_blank"/>
      <ProjectCard project={projJSON.lilith} target="_blank"/>
      <ProjectCard project={projJSON.packet} target="_blank"/>
    </div>
    <div className="ml-4 mr-4 flex justify-center">
      <ProjectCard project={projJSON.soc} target="_blank"/>
      <ProjectCard project={projJSON.risky} target="_blank"/>
    </div>
    </>

  );
}

