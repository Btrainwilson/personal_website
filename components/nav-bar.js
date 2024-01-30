import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function NavBar({children }) {
  return (
    <>
      <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">
            <a href="/">
              Blake Wilson
            </a>
          </span>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a href="/projects" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
              Projects
            </a>
            <a href="/cv" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
              CV
            </a>
          </div>
        </div>
      </nav>
      <div>
        {children}
      </div>
    </>
  );
}
