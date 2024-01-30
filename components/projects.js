

export default function ProjectCard({project, target="_self"}) {
  return (


      <a href={project.url} target={target} class="shadow-md w-60 m-4 border hover:bg-gray-600 border-gray-200 rounded-lg shadow bg-gray-800 border-gray-700">
        <div>
          <div className="bg-gray-100 rounded-lg justify-content flex h-40 m-auto">
              <img class="  m-auto max-h-40" src={project.imagesrc} alt="" />
          </div>
          <div class="p-3 rounded-lg ">
              <h5 class="mb-2 text-2xl font-bold tracking-tight  text-white">{project.title}</h5>
              <p class="mb-3 font-normal  text-gray-400">{project.description}</p>
          </div>
        </div>
      </a>

  );
}
