import React from "react";
import { chill, discount, volun } from "../../assets/index";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="CHILL GAMER"
          des="Chill Gamer is a dynamic and interactive gaming review platform where users can explore, add, and manage game reviews. The platform features functionalities like sorting reviews, managing watchlists, and browsing games by rating, year, and genre."
          src={chill}
          gitLink={
            "https://github.com/mahmudul35/chill-gamer-client?tab=readme-ov-file"
          }
          liveLink={"https://chillgamer-eaa4c.web.app/"}
        />
        <ProjectsCard
          title="DISCOUNT PRO"
          des=" Discount PRO is a user-friendly application designed to help users find and use discount coupons for various e-commerce stores in Bangladesh. The platform centralizes coupon data, allowing users to browse, search, and redeem discounts with ease."
          src={discount}
          gitLink={
            "https://github.com/mahmudul35/Discount-PRO-A-Coupon-Collecting-Application?tab=readme-ov-file"
          }
          liveLink={"https://couponpro-f66b9.web.app/"}
        />
        {/* <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        /> */}
        <ProjectsCard
          title="VOLUN TRACK"
          des=" The VolunTrack is a platform designed to connect volunteers with organizations in need of help. It allows users to view volunteer opportunities, register as volunteers, and manage their participation effectively."
          src={volun}
          liveLink={"https://volunteer-management-5a1f8.web.app/"}
          gitLink="#"
        />
        {/* <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={chill}
        /> */}
        {/* <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={discount}
        /> */}
      </div>
    </section>
  );
};

export default Projects;
