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
              JMC Medicine Corner Limited is committed to illuminating the path
              to better health through exceptional pharmaceutical services,
              personalized care, and community-focused health solutions, making
              wellness accessible to everyone
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
              Our vision is to be a leader in pharmaceutical care, known for our
              innovative solutions, dedication to health education, and
              exceptional customer service, contributing to a healthier future
              for all
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutOurMissionVission;
