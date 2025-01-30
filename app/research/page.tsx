"use client"
import * as React from "react"

import Hero from '@/components/about/hero';

import '../globals.css';
import Footer from "@/components/footers/simple";
import { AcademicTable } from "@/components/about/academiccard";
const positions = [
  { title: 'Machine Learning Fram', institution: 'Quantinuum (Oxford)', date: '2024-Present' },
  { title: 'Research Assistant', institution: 'Purdue University', date: '2019-2024' },
  { title: 'Researcher', institution: 'QuEra Computing', date: '2022' },
];
export default function Page() {

  return (
    <div className="w-full" >
      <div className="m-2">
        <div className="divider divider-neutral" />
        <AcademicTable positions={positions} />
        <div className="divider divider-neutral" />
      </div>
      <Footer />
    </div>
  );
}

//
