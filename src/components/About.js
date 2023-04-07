import { useMediaQuery } from "react-responsive";
import { FaGraduationCap, FaBriefcase, FaCode, FaCircle } from "react-icons/fa";

const About = () => {
  const isSmallerThanSm = useMediaQuery({ query: "(max-width: 750px)" });
  const education = [
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "Mapua University",
      date: "August 2018 - Present",
      image: "https://www.mapua.edu.ph/About/Images/Mapua%20Logo-01-01.png",
    },
  ];

  const workExperience = [
    {
      title: "Technology Intern",
      company: "Philippine Digital Asset Exchange",
      date: "November 2022 - February 2023",
      image: "https://www.cryptoninjas.net/wp-content/uploads/pdax.png",
    },
  ];
  return (
    <div id="About" className="w-full h-full text-white md:px-0 px-11">
      <div className="max-w-screen-lg w-full">
        <h2 className="text-3xl font-bold text-gray-200 mb-6">About</h2>
        <div
          className={`flex ${isSmallerThanSm ? "flex-col" : "flex-col"} w-full`}
        >
          <div className="pb-10 w-full sm:w-1/2 mx-0 sm:mx-6">
            <h3 className="text-lg font-bold text-gray-200 mb-3">
              <FaGraduationCap className="inline-block mr-2 mb-1 text-gray-200" />
              Education
            </h3>
            <ul>
              {education.map((item) => (
                <li className="mb-4 flex items-center" key={item.degree}>
                  <div
                    className={`w-24 h-24 rounded-xl p-2 bg-white mr-4 flex justify-center items-center ${
                      isSmallerThanSm ? "hidden" : ""
                    }`}
                  >
                    <img src={item.image} width={"100%"} alt="Logo" />
                  </div>
                  <div>
                    <h4 className="text-md font-bold text-gray-200">
                      {item.degree}
                    </h4>
                    <p className="text-sm text-gray-200">{item.school}</p>
                    <p className="text-sm text-gray-200">{item.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="pb-10 w-full sm:w-1/2 mx-0 sm:mx-6">
            <h3 className="text-lg font-bold text-gray-200 mb-3">
              <FaBriefcase className="inline-block mr-2 mb-1 text-gray-200" />
              Work Experience
            </h3>
            <ul>
              {workExperience.map((item) => (
                <li className="mb-4 flex items-center" key={item.title}>
                  <div
                    className={`w-24 h-24 rounded-xl bg-white mr-4 flex justify-center items-center ${
                      isSmallerThanSm ? "hidden" : ""
                    }`}
                  >
                    <img src={item.image} width={"100%"} alt="Logo" />
                  </div>
                  <div>
                    <h4 className="text-md font-bold text-gray-200">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-200">{item.company}</p>
                    <p className="text-sm text-gray-200">{item.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="pb-10 w-full mx-auto sm:mx-6">
            <h3 className="text-lg font-bold text-gray-200 mb-3">
              <FaCode className="inline-block mr-2 mb-1 text-gray-200" />
              Skills
            </h3>
            <div className="flex flex-wrap items-center justify-between">
              {skills.map((skill) => (
                <Skill key={skill.name} name={skill.name} image={skill.image} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

const skills = [
  {
    name: "HTML",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Tailwind CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
  },
  {
    name: "React JS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
  },
  {
    name: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "Python",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "C++",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "C#",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    name: "Docker",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg",
  },
];

const Skill = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center justify-center w-32 sm:w-48 h-32 sm:h-48 mx-4 my-4 bg-gray-900 rounded-xl shadow-lg transition duration-500 ease-in-out transform hover:scale-110">
      <img className="w-20 sm:w-32 mb-2" src={image} alt={name} />
      <h3 className="text-white text-xl font-medium">{name}</h3>
    </div>
  );
};
