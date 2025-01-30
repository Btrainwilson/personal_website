import React from 'react';
import { cn } from "@/lib/utils"

type BannerProps = {
  backgroundImageUrl: string;
};

const Banner = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & BannerProps
>(({ className, backgroundImageUrl = 'https://source.unsplash.com/1600x900/?nature', children, ...props }, ref) => {

  return (
    <div className={cn("relative overflow-hidden bg-gray-900", className)} >
      {/* Background Image */}
      < div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      ></div>

      {children}

    </div >
  )
});

type HeroTextProps = {
  title: string;
  subtitle: string;
};

const HeroText = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & HeroTextProps
>(({ className, title, subtitle, children, ...props }, ref) => {

  return (

    < div className="bg-opacity-60 bg-gray-800 relative z-10 flex flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8" >
      <h1 className="text-4xl text-left font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-4  mr-20 ml-20 italic text-gray-300 sm:text-lg lg:text-xl">
        {subtitle}
      </p>
      {children}
    </div >

  );
})

//< button className = "btn btn-primary" onClick = { onButtonClick } > { buttonText }</button>


export { Banner, HeroText }


interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImageUrl?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}


const BannerHeroNoOverlay: React.FC<HeroProps> = ({
  backgroundImageUrl = 'https://source.unsplash.com/1600x900/?nature',
}) => {
  return (
    <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <img src={backgroundImageUrl} alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />

      <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">Explore the World</h2>
        <p className="sm:text-lg text-base text-center text-gray-200">“Some connections are made with wires, and some are made with blood, and some are made with bone, and some are made with wood, but they all matter.” - Sam Riegal as F.C.G.</p>

        <button
          type="button"
          className="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300">
          Book Now
        </button>
      </div>
    </div>);
};

const BannerHero: React.FC<HeroProps> = ({
  title = 'Default Hero Title',
  subtitle = 'This is the default hero subtitle.',
  backgroundImageUrl = 'https://source.unsplash.com/1600x900/?nature',
  buttonText = 'Get Started',
  onButtonClick = () => { console.log("Banner Button"); }
}) => {
  return (
    <div className="relative overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="bg-opacity-60 bg-gray-800 relative z-10 flex flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl text-left font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4  mr-20 ml-20 italic text-gray-300 sm:text-lg lg:text-xl">
          {subtitle}
        </p>
        <button className="btn btn-primary" onClick={onButtonClick}>{buttonText}</button>
      </div>
    </div>
  );
};

const BannerHero2: React.FC<HeroProps> = ({
  title = 'Default Hero Title',
  subtitle = 'This is the default hero subtitle.',
  backgroundImageUrl = 'https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp',
  buttonText = 'Get Started',
  onButtonClick = () => console.log('Button clicked!'),
}) => {
  return (<div className="hero bg-base-200 min-h-screen" >
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img
        src={backgroundImageUrl}
        className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="py-6">
          {subtitle}
        </p>
        <button className="btn m-auto mt-4" onClick={onButtonClick}>{buttonText}</button>
      </div>
    </div>
  </div >);
};

const BannerHeroNoClick: React.FC<HeroProps> = ({
  title = 'Default Hero Title',
  subtitle = 'This is the default hero subtitle.',
  backgroundImageUrl = 'https://source.unsplash.com/1600x900/?nature',
}) => {
  return (
    <div className="relative overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="bg-opacity-60 bg-gray-800 relative z-10 flex flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl text-left font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4  mr-20 ml-20 italic text-gray-300 sm:text-lg lg:text-xl">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default BannerHero;
export { BannerHero, BannerHero2, BannerHeroNoOverlay, BannerHeroNoClick };
