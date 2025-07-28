import React, { useEffect } from "react";

import image from "../../assets/about/iconwithlines.png";
import CEO1 from "../../assets/about/CEO1.png";
import CEO2 from "../../assets/about/CEO2.jpg";
import CEO3 from "../../assets/about/CEO3.png";

import AboutCard from "./components/AboutCard";
import Flip from "./components/Flip";
import Faq from "./components/Faq";

// Styles
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
        <div className="text-center mb-2 ">
          <h1 className="about-title">
            Who We Are & Why We Built ToLet Globe
          </h1>
          <div className="text-center px-4 max-w-3xl mx-auto mt-6">
            <p className="text-base sm:text-lg leading-7 text-gray-700">
              <strong>Mission:</strong> Making rentals simple and affordable for everyone.
            </p>
            <p className="text-base sm:text-lg leading-7 text-gray-700 mt-2">
              <strong>Our Values:</strong> Trust, Simplicity, Transparency
            </p>
            <p className="text-base sm:text-lg leading-7 text-gray-700 mt-2">
              <strong>Founded in 2022</strong>, we've already served over <strong>10,000+</strong> listings across India.
            </p>
          </div>
        </div>

        <div className="timeline relative mx-3 pt-10 md:pt-40 overflow-hidden md:after:block">
          <div
            className="absolute w-[15px] h-[15px] bg-[rgb(196,149,20)] rounded-full left-[50.1%] -ml-[10px] transition-[top] duration-0 ease-linear hidden md:block"
            style={{ top: "calc(var(--scroll-position, 0%) - 12px)" }}
          ></div>

          <AboutCard
            head="Who we are?"
            paragraph="At To-Let, we are more than just property managers – we are dedicated partners in your property management journey. Established with a commitment to redefining the standards of property management, To-Let brings a wealth of expertise to the dynamic property management landscape."
            place="left"
          />
          <AboutCard
            head="Our Journey"
            paragraph="Since our inception, we have been at the forefront of delivering exceptional property management solutions. With a foundation built on integrity, transparency, and client-centric values, To-Let has steadily grown to become a trusted name in the industry."
            place="right"
          />
          <AboutCard
            head="Mission and Vision"
            paragraph="Our mission is to simplify and elevate the property management experience for property owners and tenants alike. We envision a future where seamless, efficient, and client-focused property management is the norm."
            place="left"
          />
          <AboutCard
            head="Services we offer"
            paragraph="To-Let specializes in a comprehensive suite of property management services, including property leasing, tenant screening, rent collection, property maintenance, and the provision of PGs (Pay Guest) and flats for rent. Our tailored solutions cater to the unique needs of each property under our care."
            place="right"
          />
          <AboutCard
            head="Client-Centric Approach"
            paragraph="What sets To-Let apart is our unwavering dedication to client satisfaction. We prioritize open communication, timely responses, and a proactive approach to address the diverse needs of property owners and tenants."
            place="left"
          />
          <AboutCard
            head="Expert Team"
            paragraph="Our team consists of seasoned professionals with in-depth knowledge of the property management industry. From property managers to maintenance experts, each member of the To-Let team is committed to ensuring the optimal performance and value of your property."
            place="right"
          />
        </div>

        <div className="mb-20 sm:mb-36 w-full">
          <div className="bg-black border-[3px] border-[#6cc0c4] rounded-3xl font-Roboto text-[#E59948] lg:text-[#E8B636] lg:uppercase m-auto py-2 px-4 w-1/2 md:w-1/4">
            <h2 className="md:text-3xl text-xl font-bold text-center">
              Our Team
            </h2>
          </div>

          <div className="flex justify-center items-center ms-2 md:ms-0">
            <img
              src={image}
              alt="image logo"
              className="max-w-full max-h-[300px] object-contain pr-3"
            />
          </div>

          {/* === ✅ Updated code from here: Flip group wrapper added for responsiveness === */}
          <div className="flip-group flex flex-wrap justify-center gap-6 mt-6">
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
          {/* ===  Updated code ends here === */}
        </div>

        <Faq />
      </div>
    </>
  );
}