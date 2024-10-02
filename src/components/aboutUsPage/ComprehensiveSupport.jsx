import Image from "next/image";
import React from "react";
import {
  FaPills,
  FaSyringe,
  FaTooth,
  FaHeartbeat,
  FaStethoscope,
} from "react-icons/fa";

const services = [
  {
    name: "First Aid Supplies",
    icon: <FaPills />,
  },
  {
    name: "Skin Care Products",
    icon: <FaSyringe />,
  },
  {
    name: "Beauty and Personal Care Products",
    icon: <FaTooth />,
  },
  {
    name: "Blood Pressure Monitoring",
    icon: <FaHeartbeat />,
  },
  {
    name: "Healthcare Solutions",
    icon: <FaStethoscope />,
  },
  {
    name: "Medical Supplies Distribution",
    icon: <FaStethoscope />,
  },
];

const ComprehensiveSupport = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden lg:border-t pb-12">
      <div className="container max-w-7xl mx-auto flex px-5  md:flex-row flex-col items-center ">
        <div
          data-aos="fade-left"
          className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center "
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-careerRed w-full text-center">
            Comprehensive Support
          </h1>
          <p className="mb-8 leading-relaxed text-center max-w-lg mx-auto">
            Where Compassion Meets Care. Empowering Your Health Journey, One
            Step at a Time.
          </p>

          <div className="my-10 mx-auto">
            {services?.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
                className=" mb-2 text-sm md:text-base flex items-center gap-2 "
              >
                <p className=" flex items-center gap-2 ">
                  <span className="bg-careerRed text-white p-1.5 rounded-lg">
                    {item.icon}
                  </span>{" "}
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 "
          data-aos="fade-right"
        >
          <Image
            src="https://thumbs.dreamstime.com/b/comprehensive-support-turquoise-concept-icon-business-coaching-platform-promotion-abstract-idea-thin-line-illustration-isolated-253263105.jpg"
            alt="hero"
            className="object-cover object-center rounded-2xl "
            width={1000}
            height={667}
          />
        </div>
      </div>
      <p
        data-aos="fade-right"
        data-aos-delay="600"
        className="mb-8 leading-relaxed text-center max-w-lg mx-auto my-10"
      >
        Where Compassion Meets Care. Empowering Your Health Journey, One Step at
        a Time.
      </p>
    </section>
  );
};

export default ComprehensiveSupport;
