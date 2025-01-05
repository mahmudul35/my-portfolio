import React, { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { RiStarFill } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { quote, testimonialOne, testimonialTwo } from "../../assets";
import Title from "../layouts/Title";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-1/2 transform -translate-y-1/2 right-0 z-10 cursor-pointer"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-1/2 transform -translate-y-1/2 left-0 z-10 cursor-pointer"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setActiveDotIndex(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          background: i === activeDotIndex ? "#ff014f" : "gray",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      />
    ),
  };

  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {/* Slider Item 1 */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col justify-center gap-8">
                <img
                  className="h-72 lg:h-72 rounded-lg object-cover"
                  src={testimonialOne}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Bound - Trolola
                  </p>
                  <h3 className="text-2xl font-bold">Jone Duone Joe</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lg:w-32" src={quote} alt="quote" />
                <div className="w-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lg:p-8 flex flex-col justify-center gap-4">
                  <div className="flex flex-col justify-between lg:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-medium tracking-wide">
                        Travel Mobile App Design.
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via Upwork - Mar 4, 2015 - Aug 30, 2021 test
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base text-gray-400 font-medium tracking-wide leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    dolorum, eos natus ipsum numquam veniam officia
                    necessitatibus ratione quos debitis exercitationem
                    repudiandae facilis id neque nihil accusantium perspiciatis
                    repellat? Iste.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Slider Item 2 */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col justify-center gap-8">
                <img
                  className="h-72 lg:h-72 rounded-lg object-cover"
                  src={testimonialTwo}
                  alt="testimonialTwo"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Bound - Trolola
                  </p>
                  <h3 className="text-2xl font-bold">Jane Doe</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Marketing Officer
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lg:w-32" src={quote} alt="quote" />
                <div className="w-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lg:p-8 flex flex-col justify-center gap-4">
                  <div className="flex flex-col justify-between lg:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-medium tracking-wide">
                        E-commerce Website Design
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via Freelancer - Jan 10, 2020 - Dec 15, 2022
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base text-gray-400 font-medium tracking-wide leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    dolorum, eos natus ipsum numquam veniam officia
                    necessitatibus ratione quos debitis exercitationem
                    repudiandae facilis id neque nihil accusantium perspiciatis
                    repellat? Iste.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
