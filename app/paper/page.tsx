"use client"
import { Card } from "@/components/ui/card";
import * as React from "react"


export default function Page() {
  return (
    <div className="m-5">
      <Card>
        <h1 className="mt-5 mb-5 mr-auto text-4xl text-center">Paper Title</h1>
        <Card className="mb-5 mr-4 ml-4">
          Content
        </Card>
      </Card>
    </div>
  );
}

//
