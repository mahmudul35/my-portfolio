import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { SiAntdesign, SiProgress } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Development"
          des="I build responsive, high-performance websites using the MERN stack and modern development tools."
        />
        <Card
          title="App Development"
          des="I build cross-platform mobile apps with React Native, providing a seamless experience on iOS and Android."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="I optimize websites for search engines to improve rankings and drive organic traffic."
          icon={<SiProgress />}
        />
        {/* <Card
          title="Mobile Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaMobile />}
        /> */}
        <Card
          title="UX Design"
          des="I craft intuitive, user-centric designs to ensure smooth and engaging user experiences."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="I offer reliable website hosting services to ensure fast, secure, and scalable performance."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
