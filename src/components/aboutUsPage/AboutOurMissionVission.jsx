import Image from "next/image";
import React from "react";

const AboutOurMissionVission = () => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden ">
        <div className="container max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div
            data-aos="fade-right"
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-careerRed">
              Our Mission
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              To revolutionize software development with a focus on
              sustainability, minimizing environmental impact, and promoting
              responsible resource utilization.
            </p>
          </div>
          <div
            data-aos="fade-left"
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-careerRed">
              Our Vision
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              To be the global leader in software innovation, transforming
              industries and enhancing lives through sustainable and impactful
              technological advancements.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutOurMissionVission;
