import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, gitLink, liveLink, tech }) => {
  const [modal, setModal] = React.useState(false);
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <a href={gitLink} target="blank">
                  {" "}
                  <BsGithub />
                </a>
              </span>
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <a href={liveLink} target="blank">
                  <FaGlobe />
                </a>
              </span>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
          <button
            onClick={() => setModal(true)}
            className="bannerIcon mt-3 w-40"
          >
            View Details
          </button>
        </div>
      </div>

      {
        //modal
        modal && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="w-[90%] lgl:w-[70%] h-[90%] bg-gradient-to-r from-bodyColor to-[#202327] rounded-lg shadow-shadowOne flex flex-col gap-5 p-5">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-white">
                  Project Details
                </h3>
                <button
                  onClick={() => setModal(false)}
                  className="text-2xl text-designColor"
                >
                  X
                </button>
              </div>
              <div className="w-full h-[80%] overflow-hidden rounded-lg">
                <img
                  className="mx-auto rounded-xl h-[400px] object-cover"
                  src={src}
                  alt="src"
                />
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <h3 className="text-lg font-bold text-white">{title}</h3>
                  <p className="text-sm text-gray-300">{des}</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Technologies Used
                  </h3>
                  {tech.map((item, index) => (
                    <span
                      key={index}
                      className="text-sm bg-designColor text-white px-2 mr-3 py-1 rounded-lg"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {" "}
                    Challenge Faced{" "}
                  </h3>
                  <p className="text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Future Plan
                  </h3>
                  <p className="text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum.
                  </p>
                </div>
                <div className="flex gap-2">
                  <a href={gitLink} target="blank">
                    <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                      {" "}
                      <BsGithub />
                    </span>
                  </a>

                  <a href={liveLink} target="blank">
                    <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                      <FaGlobe />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default ProjectsCard;
