import Head from 'next/head';
import NavBar from '../components/nav-bar';
import {Button} from '../components/web';

import Home from './resume';

export default function HomePage() {
  return (
    <>
    <NavBar /> 
    <div className="p-4 mb-6 mt-6 ml-8 mr-8 border-2">
      <Home />
    </div>
    <div className="p-4 mb-6 mt-6 ml-8 mr-8 ">
      <Button title="Download" link="/resume" />
    </div>

    </>
  );


}



