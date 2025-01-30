import * as React from "react";
import { cn } from "@/lib/utils";


type ImageBannerProps = {
  urls: string[];
};

const ImageBanner = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & ImageBannerProps
>(({ className, urls, ...props }, ref) => {

  return (
    <div className="flex justify-content w-full m-6">
      {urls.map((url, idx) => (
        <img className="m-auto max-h-20" src={url} key={idx} />
      ))}
    </div>);
});

ImageBanner.displayName = "ImageBanner";

export { ImageBanner }
