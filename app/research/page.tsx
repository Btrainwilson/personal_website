"use client"
import * as React from "react"

import '../globals.css';
import Footer from "@/components/footers/simple";
import { AcademicTable } from "@/components/about/academiccard";


const positions = [
  { title: 'Machine Learning', institution: 'Quantinuum (Oxford)', date: '2024-Present', location: '', link: '', department: '' },
  { title: 'Research Assistant', institution: 'Purdue University', date: '2019-2024', location: '', link: '', department: '' },
  { title: 'Researcher', institution: 'QuEra Computing', date: '2022', location: '', link: '', department: '' },
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
