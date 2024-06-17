
export function HeroImage({title, image}) {
  return (
    <header className="">
      <div className="w-full bg-center bg-cover"
        style={{backgroundImage: `url(${image})`}}
>
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
          <div className="text-center">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">{title}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default function HeroCard({title, description, subdescription, button, image, link}) {
  return (
    <header className="">
      <div className="w-full bg-center bg-cover"
        style={{backgroundImage: `url(${image})`}}
>
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
          <div className="text-center">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <span className="text-gray-200 font-semibold uppercase tracking-widest">{title}</span>
                <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">{description}</h2>
                <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                  {subdescription}
                </p>
                <a className="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
                  href={link}>{button}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


export function SectionHeader({title, children}) {

  return (
    <>
    <div className="justify-content flex center">
      <h2 className="border-b font-serif text-3xl m-auto mt-2">{title}</h2>
    </div>

    <div className="ml-2 mr-2">
      {children}
    </div>
    </>
  );
}

export function ImageBanner({ urls }) {
  return (
    <div className="grid-container m-6">
      {urls.map((url, index) => (
        <img className="m-auto max-w-1" src={url} key={index} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
}


export const AboutBanner = () => {
  return (
    <div className="flex items-center p-6 ml-14 rounded-lg ">
      <img
        src="images/portrait_boston.jpg"
        alt="About Me"
        className="w-56 h-auto rounded-lg mr-6 ml-6 object-cover"
      />
      <div className="max-w-xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Blake Wilson, Ph.D.</h2>
        <p className="text-gray-600 text-base leading-relaxed">
          Hello! I'm Blake Anthony Wilson. I analyze algorithms and build machine learning architectures for physics and engineering applications. I earned my Ph.D. from Purdue University in ECE working with Sabre Kais, Sasha Boltasseva, Vlad Shalaev and Alex Kildishev. I'm currently at Quantinuum in Oxford working on quantum machine learning and natural language processing algorithms. </p>
      </div>
    </div>
  );
};
// Include this CSS in your stylesheet


export function ImageBanners({urls}) {
  
    let htmlResult = [];
    for (const url in urls) {
        htmlResult.push(<img className="m-auto max-h-20" src={urls[url]} key={url}/>);
    }

  return (
    <div className="flex justify-content w-full m-6">
      {htmlResult}
    </div>);
}

export function Button({title, link, target="_blank"}) {

  return (
    <a className="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
      href={link} target={target}>{title}</a>
  );
}

