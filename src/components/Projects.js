import React from "react";
import computermart from "../assets/computer-mart.png";

const projects = [
  {
    id: 1,
    title: "Kdrama Downloader",
    description: "Utilizes an API to fetch and download kdrama shows.",
    image:
      "https://user-images.githubusercontent.com/61642976/230664414-6c3830df-30d2-4584-b1b0-1f5c3f93992b.png",
    url: "https://github.com/Hannes0730/Kdrama-Downloader",
  },
  {
    id: 2,
    title: "Transistor Calculator",
    description: "Provides calculation for BJT and JFET problems.",
    image:
      "https://user-images.githubusercontent.com/61642976/230665477-942b875b-177a-4716-9e2c-8580c2dcebca.png",
    url: "https://github.com/Hannes0730/Circuit-Calc",
  },
  {
    id: 3,
    title: "KneadBread",
    description:
      "Can perform user sign up and login. Can also perform crud operation for menu items. **I hate frontend designs! 😒",
    image:
      "https://user-images.githubusercontent.com/61642976/230666022-f81ffaba-61b3-4615-9e1b-cddcc9de1ff0.png",
    url: "https://github.com/Hannes0730/KneadBread-Website",
  },
  {
    id: 4,
    title: "YTS Downloader",
    description: "Uses YTS api to download your favorite movies.",
    image:
      "https://github.com/Hannes0730/YTS-Downloader/raw/master/image/app.png",
    url: "https://github.com/Hannes0730/YTS-Downloader",
  },
  {
    id: 5,
    title: "Windows Assistant",
    description: "School Project: Personal Assistant",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png",
    url: "https://github.com/Hannes0730/Project-Windows-Assistant",
  },
  {
    id: 6,
    title: "Computer Mart",
    description: "Displays the lowest price for each store.",
    image: computermart,
    url: "https://computer-mart.store/",
  },
];

function ProjectCard({ project }) {
  const [hovered, setHovered] = React.useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-[100px] p-3 relative "
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div
        className="w-full h-full absolute top-0 left-0 bg-opacity-50 bg-gray-900 rounded-lg transition-all duration-500 ease-in-out transform scale-0 z-10 overflow-hidden"
        style={{ transform: hovered ? "scale(1)" : "scale(0)" }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center text-white">
          <p className="px-11  max-h-32 mb-5">{project.description}</p>
          <a
            href={project.url}
            target="_blank"
            className="bg-white text-gray-900 font-bold py-2 px-4 rounded hover:bg-gray-900 hover:text-white transition-all duration-500 ease-in-out"
          >
            View
          </a>
        </div>
      </div>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover rounded-lg"
      />
      <div className="w-full bg-gray-900 bg-opacity-50 absolute bottom-0 left-0 p-2 text-white transition-all duration-500 ease-in-out transform translate-y-full z-0">
        <h3 className="font-bold text-lg">{project.title}</h3>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div id="Projects" className="md:px-0 px-11 mb-11">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="flex flex-wrap -mx-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
