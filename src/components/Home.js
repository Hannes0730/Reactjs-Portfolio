import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import profilePic from "../assets/photo_2023-04-08_11-59-00.jpg";

const Home = () => {
  return (
    <div
      id="Home"
      className="flex items-center justify-between w-full h-full md:px-0 px-11  flex-col md:flex-row  bg-gray-900"
    >
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4 font-paragraph-text">
          <TypeAnimation
            sequence={[
              "Edward Tapado",
              1000,
              "I'm a Computer Engineering Student",
              1000,
            ]}
            speed={35}
            repeat={Infinity}
          />
        </h1>
        <p className="mt-[5%] text-m font-paragraph-text">
          As a Python developer with experience in object-oriented programming,
          automation, and APIs, I have developed a range of tools and bots to
          automate tasks and improve workflows. I also have experience with
          machine learning and deep learning.
        </p>
        <p className="mt-5 text-neutral-500 font-medium">
          P.S. I hate frontend programming! 😒
        </p>
        <div className="flex items-center mt-8 justify-center md:justify-start md:mb-6 space-x-6">
          <a
            href="https://github.com/Hannes0730"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white  hover:text-gray-400"
          >
            <FaGithub className="w-9 h-9" />
          </a>
          <a
            href="https://linkedin.com/in/edwardtapado"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaLinkedin className="w-9 h-9" />
          </a>
        </div>
      </div>
      <div className="md:w-1/8">
        <img
          className="p-10 w-full object-cover object-center rounded-3xl shadow-md"
          src={profilePic}
          alt="My Image"
          width="500"
          height="500"
        />
      </div>
    </div>
  );
};

export default Home;
