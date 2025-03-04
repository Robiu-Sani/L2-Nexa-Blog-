import React from "react";
import { FaCode, FaUsers, FaLightbulb } from "react-icons/fa";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold text-teal-600 mb-6 animate-pulse">
        Developer is Sleeping...! 😴
      </h1>
      <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl">
        While the developer rests, the vision keeps growing. We are a passionate
        team of developers, designers, and innovators committed to crafting
        digital excellence.
      </p>

      <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="border border-teal-500 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform text-center">
          <FaCode className="text-teal-500 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Creative Coding</h2>
          <p className="text-gray-600">
            We write elegant code to turn ideas into reality with cutting-edge
            technologies.
          </p>
        </div>

        <div className="border border-teal-500 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform text-center">
          <FaUsers className="text-teal-500 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Passionate Team</h2>
          <p className="text-gray-600">
            A dedicated team working together to build innovative solutions and
            amazing experiences.
          </p>
        </div>

        <div className="border border-teal-500 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform text-center">
          <FaLightbulb className="text-teal-500 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Innovative Ideas</h2>
          <p className="text-gray-600">
            We turn ideas into reality, pushing boundaries with creativity and
            technology.
          </p>
        </div>
      </div>

      <p className="mt-10 text-gray-500 italic text-center max-w-lg">
        ``Every great project starts with a dream. Even developers need some
        sleep to create wonders!``
      </p>
    </div>
  );
};

export default AboutUsPage;
