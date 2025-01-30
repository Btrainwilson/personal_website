"use client"
import * as React from "react"

import Footer from "@/components/footers/simple";
import { Card } from "@/components/ui/card";
import { Banner, HeroText } from "@/components/about/hero";

import CV from '../../printcv/page'
import Link from 'next/link'

export default function Page() {


  return (
    <div className="w-full bg-base-300" >

      <Banner
        backgroundImageUrl="./images/paper-pens.png"
      >
        <HeroText title="Curriculum Vitae" subtitle={"Updated 12/2024"}>



          <Link href="/printcv" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 btn btn-primary" onClick={() => console.log("Up and away")} > Download CV</button>
          </Link>        </HeroText>
      </Banner>
      <div className="m-4">
        <Card>
          <CV />
        </Card>
      </div>
      <Footer />
    </div>
  );
}

//
