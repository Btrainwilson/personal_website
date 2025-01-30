import NavigationMenuDemo from "@/components/navigation/NavBar"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import './globals.css';
import { ProjectCard } from "@/components/projects/card";
export default function Page() {
  return (
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-sm m-auto"
          >
            <CarouselContent>
              {Array.from({ length: 4 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <ProjectCard name={"NanoMCMC"} description={"NanoMCMC"} />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
  );
}

//
