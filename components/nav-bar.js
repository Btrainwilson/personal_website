import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function NavBar({children }) {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            <Link href="/">
              Blake Wilson
            </Link>
          </span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link href="/research" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
              Research
            </Link>
            <Link href="/projects" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
              Projects
            </Link>
            <Link href="/cv" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
              CV
            </Link>
          </div>
        </div>
      </nav>
      <div>
        {children}
      </div>
    </>
  );
}
