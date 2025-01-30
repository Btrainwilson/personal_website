import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export function ProjectCard({ name, description, img, tags = [] }) {
  console.log(img)
  return (
    <Card className="card m-auto mb-4 bg-base-100 shadow-xl w-full ">
      <figure>
        <img
          src={img}
          alt="Shoes" />
      </figure>
      <CardHeader>
        <CardTitle> {name} </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="card-actions justify-end">
          {tags.map((tag: any) => (
            <div key={tag} className="badge badge-outline">{tag}</div>

          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>View</Button>
      </CardFooter>
    </Card>
  )
}
export function ProjectCardSide({ name, description, img, onClick, descriptionOnLeft = false }) {
  return (
    <Card className="card m-auto mb-4 bg-base-100 shadow-xl w-full">
      <div className="flex flex-col md:flex-row items-center">
        {/* Conditionally order the image and text sections */}
        <figure
          className={`flex-shrink-0 md:w-5/12 w-full ${descriptionOnLeft ? 'order-2 md:order-1' : 'order-1 md:order-2'
            }`}
        >
          <Card className="card m-2 w-10em rounded shadow-lg overflow-hidden">
            <img
              src={img}
              alt="Project Thumbnail"
              className="w-full h-full object-cover rounded"
            />
          </Card>
        </figure>

        <div
          className={`flex flex-col md:w-2/3 w-full p-4 ${descriptionOnLeft ? 'order-1 md:order-2' : 'order-2 md:order-1'
            }`}
        >
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{name}</CardTitle>
            <CardDescription className="text-gray-600">{description}</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-end mt-4">
            <Button onClick={onClick}>See More</Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}


/* export default function ToolCard({ url, target = "_self" }) {
  return (
    <a href={url} target={target} className="shadow-md w-60 m-4 border hover:bg-gray-600 border-gray-200 rounded-lg shadow bg-gray-800 border-gray-700">
      <div>
        <div className="bg-gray-100 rounded-lg justify-content flex h-40 m-auto">
          <img className="  m-auto max-h-40" src={project.imagesrc} alt="" />
        </div>
        <div className="p-3 rounded-lg ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">{project.title}</h5>
          <p className="mb-3 font-normal  text-gray-400">{project.description}</p>
        </div>
      </div>
    </a>

  );
}*/
