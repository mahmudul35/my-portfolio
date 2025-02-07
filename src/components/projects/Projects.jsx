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
          tech={[
            "React",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Firebase",
          ]}
          futurePlan="Future improvements include adding a review system, implementing a notification system, and adding a mobile app."
          challenge="Working with multiple APIs and creating smooth data visualizations was challenging. I implemented proper error handling and loading states to improve user experience."
        />
        <ProjectsCard
          title="DISCOUNT PRO"
          des=" Discount PRO is a user-friendly application designed to help users find and use discount coupons for various e-commerce stores in Bangladesh. The platform centralizes coupon data, allowing users to browse, search, and redeem discounts with ease."
          src={discount}
          gitLink={
            "https://github.com/mahmudul35/Discount-PRO-A-Coupon-Collecting-Application?tab=readme-ov-file"
          }
          liveLink={"https://couponpro-f66b9.web.app/"}
          tech={["React", "Tailwind CSS", "Express.js", "MongoDB", "Firebase"]}
          futurePlan="I plan to add more features to the platform, such as user authentication, coupon sharing, and a user-friendly dashboard."
          challenge="The main challenge I faced was integrating the coupon data with the front-end. I overcame this challenge by using a RESTful API to fetch and display the data."
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
          tech={["React", "Tailwind CSS", "Express.js", "MongoDB", "Firebase"]}
          futurePlan="I plan to add more features to the platform, such as user authentication, volunteer matching, and a user-friendly dashboard."
          challenge="The main challenge I faced was integrating the volunteer data with the front-end. I overcame this challenge by using a RESTful API to fetch and display the data."
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
