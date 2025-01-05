import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiFigma, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Mahmudul Hasan</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I use the latest technologies to create seamless, efficient web
          applications. I don't just write code for functionality, but I also
          ensure that every interaction is smooth and engaging, making the user
          experience simple and intuitive.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/mahmudul35" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://www.facebook.com/marsel.CSE.PUST" target="blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            {/* <a href="https://github.com/noorjsdivs/portfolioone" target="blank">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a> */}
            <a
              href="https://www.linkedin.com/in/mahmudul-hasan-0369a61a8/"
              target="blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>

            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
      <div>
        <a
          href="https://docs.google.com/document/d/1l5LxUsj668D6Rr97kPwJN-XNj3RghjP5YRON2hhAqnw/edit?usp=sharing"
          target="blank"
        >
          <button className="bannerIcon w-48">Download CV</button>
        </a>
      </div>
    </div>
  );
};

export default LeftBanner;
