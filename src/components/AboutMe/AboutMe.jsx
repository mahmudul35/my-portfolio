import React from "react";
import php from "../../assets/php.jpg";
const AboutMe = () => {
  return (
    <section className="bg-gradient-to-r from-bodyColor to-[#202327] py-16 px-6 md:px-16 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center items-center">
          <img
            src={php} // Replace with your image URL
            alt="Laptop Workspace"
            className="rounded-lg shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>

        {/* Right Side - Text */}
        <div className="text-white space-y-6">
          <h1 className="text-4xl font-bold text-pink-800">About Me</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Hello! I’m a passionate Frontend Developer with a keen eye for
            creating beautiful and functional web experiences. My journey in web
            development started during my university years, and I’ve been hooked
            ever since.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I specialize in building responsive web applications using modern
            technologies like React, TypeScript, and Tailwind CSS. I love
            solving complex problems and turning ideas into reality through
            code.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            When I’m not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing my knowledge
            through blog posts and mentoring.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
