
"use client"
import * as React from "react"

import Footer from "@/components/footers/simple";
import { Card } from "@/components/ui/card";
import { Banner, HeroText } from "@/components/about/hero";


export default function Page() {

  return (
    <div className="w-full bg-base-300" >

      <Banner
        backgroundImageUrl="../../images/purpleCover.png"
      >
        <HeroText title="Generative Modeling" subtitle={""} />
      </Banner>
      <div className="m-4">
        <Card>

        </Card>
      </div>
      <Footer />
    </div>
  );
}

//
