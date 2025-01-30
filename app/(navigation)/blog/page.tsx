"use client"
import * as React from "react"

import Footer from "@/components/footers/simple";
import { Card } from "@/components/ui/card";

export default function Page() {

  return (
    <div className="w-full" >
      <div className="m-2">
        <div>
          <Card>
            <div className="p-2">
              <div>
                <h1 className="text-4xl">A Blog</h1>
                <p>Hi</p>
              </div>

            </div>
          </Card>

        </div>
      </div>
      <Footer />
    </div>
  );
}

