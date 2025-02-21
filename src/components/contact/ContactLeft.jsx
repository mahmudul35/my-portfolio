import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Mahmudul Hasan</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I am a passionate MERN stack developer with expertise in creating
          dynamic and responsive web applications. I strive to deliver
          high-quality solutions that meet user needs and business goals.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+8801784373504</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">mahmudul.cse.pust@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/marsel.CSE.PUST" target="blank">
            <span className="bannerIcon">
              <FaFacebookF />{" "}
            </span>
          </a>
          <a href="https://github.com/mahmudul35" target="blank">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
          {/* <span className="bannerIcon">
            <FaTwitter />
          </span> */}
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
    </div>
  );
};

export default ContactLeft;
