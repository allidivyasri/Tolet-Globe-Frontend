import React, { useEffect } from "react";
import image from "../../assets/about/iconwithlines.png";
import CEO1 from "../../assets/about/CEO1.png";
import CEO2 from "../../assets/about/CEO2.jpg";
import CEO3 from "../../assets/about/CEO3.png";
import AboutCard from "./components/AboutCard";
import Flip from "./components/Flip";
import Faq from "./components/Faq";
import "./about.css";
import "../../index.css";

export default function About() {
  useEffect(() => {
    
    const handleScroll = () => {
      const verticalLine = document.querySelector(".timeline");
      const scrollPosition = window.scrollY / 0.9;

      if (verticalLine) {
        verticalLine.style.setProperty(
          "--scroll-position",
          `${scrollPosition}px`
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="mt-24 mb-12 ">
        {/* ✅ [MODIFIED] New stylized "About Us" header */}
        <div className="text-center mb-2 ">
          <h1 className="border-[#6cc0c4] border-[2px] lg:border-[5px] rounded-xl lg:rounded-[64.92px] text-[#E59948] lg:text-[#E8B636] lg:uppercase inline text-xl sm:text-2xl md:lg:text-3xl py-2 px-10 md:px-16 lg:px-20  md:lg:py-1  font-bold">
            About Us
          </h1>
        </div>

        {/* ✅ [MODIFIED] Timeline structure & scroll dot logic retained */}
        <div className="timeline relative mx-3 pt-10 md:pt-40 overflow-hidden md:after:block">
          <div
            className="absolute w-[15px] h-[15px] bg-[rgb(196,149,20)] rounded-full left-[50.1%] -ml-[10px] transition-[top] duration-0 ease-linear hidden md:block"
            style={{ top: "calc(var(--scroll-position, 0%) - 12px)" }}
          ></div>

          {/* ✅ [MODIFIED] AboutCard content updated */}
          <AboutCard
            head="Who we are?"
            paragraph="At To-Let, we are more than just property managers – we are dedicated partners..."
            place="left"
          />
          <AboutCard
            head="Our Journey"
            paragraph="Since our inception, we have been at the forefront of delivering exceptional..."
            place="right"
          />
          <AboutCard
            head="Mission and Vision"
            paragraph="Our mission is to simplify and elevate the property management experience..."
            place="left"
          />
          <AboutCard
            head="Services we offer"
            paragraph="To-Let specializes in a comprehensive suite of property management services..."
            place="right"
          />
          <AboutCard
            head="Client-Centric Approach"
            paragraph="What sets To-Let apart is our unwavering dedication to client satisfaction..."
            place="left"
          />
          <AboutCard
            head="Expert Team"
            paragraph="Our team consists of seasoned professionals with in-depth knowledge..."
            place="right"
          />
        </div>

        {/* ✅ [ADDED] New "Our Team" section layout with line & flip cards */}
        <div className="mb-20 sm:mb-36 w-full">
          {/* Section Header */}
          <div className="bg-black border-[3px] border-[#6cc0c4] rounded-3xl font-Roboto text-[#E59948] lg:text-[#E8B636] lg:uppercase m-auto py-2 px-4 w-1/2 md:w-1/4">
            <h2 className="md:text-3xl text-xl font-bold text-center">
              Our Team
            </h2>
          </div>

          {/* ✅ [ADDED] Line & icon design before team cards */}
          <div className="flex justify-center items-center ms-2 md:ms-0">
            <img
              src={image}
              alt="image logo"
              className="max-w-full h-auto pr-3"
            />
          </div>

          {/* ✅ [ADDED] Team Flip Cards (centered horizontally) */}
          <div className="flex flex-row items-center justify-around">
            <Flip
              image={CEO1}
              linkedin="https://www.linkedin.com/in/mayur-kukreja-280b71b4/"
              name="Mayur Kukreja"
              post="CEO & Founder"
            />
            <Flip
              image={CEO3}
              linkedin="https://www.linkedin.com/in/emanshu-wadhwani-258678176/"
              name="Emanshu Wadhwani"
              post="Co-founder"
            />
            <Flip
              image={CEO2}
              linkedin="https://www.linkedin.com/in/rohit-kanaujia-b775a5171/"
              name="Rohit Kanaujia"
              post="Co-founder"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <Faq />
      </div>
    </>
  );
}
