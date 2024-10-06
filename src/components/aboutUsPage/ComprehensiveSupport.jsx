import Image from "next/image";
import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaPenNib,
  FaPencilRuler,
  FaPlay,
  FaChartPie,
  FaSearchengin,
  FaFilm,
  FaBriefcase,
  FaShieldAlt,
  FaCloud,
  FaShoppingCart,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    name: "Web Development",
    icon: <FaLaptopCode />,
  },
  {
    name: "App Development",
    icon: <FaMobileAlt />,
  },
  {
    name: "Domain Hosting Services",
    icon: <FaServer />,
  },
  {
    name: "Product Design",
    icon: <FaPenNib />,
  },
  {
    name: "Graphic Design",
    icon: <FaPencilRuler />,
  },
  {
    name: "Motion Graphic Design",
    icon: <FaPlay />,
  },
  {
    name: "Digital Marketing",
    icon: <FaChartPie />,
  },
  {
    name: "SEO Services",
    icon: <FaSearchengin />,
  },
  {
    name: "Media Support",
    icon: <FaFilm />,
  },
  {
    name: "IT Consultancy Services",
    icon: <FaBriefcase />,
  },
  {
    name: "Cybersecurity Services",
    icon: <FaShieldAlt />,
  },
  {
    name: "DevOps Services",
    icon: <FaCloud />,
  },
  {
    name: "E-commerce Solutions",
    icon: <FaShoppingCart />,
  },
  {
    name: "Quality Assurance and Testing Services",
    icon: <FaCheckCircle />,
  },
];

const ComprehensiveSupport = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden lg:border-t pb-12 overflow-hidden">
      <div className="container max-w-7xl mx-auto flex px-5  md:flex-row flex-col items-center py-10">
        <div
          data-aos="fade-left"
          className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center "
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-careerRed w-full text-center">
            Comprehensive Support
          </h1>
          <p className="mb-8 leading-relaxed text-center max-w-lg mx-auto">
            Where Compassion Meets Care. Empowering Your Journey, One Step at a
            Time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10 mx-auto">
            {services?.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
                className="mb-2 text-sm md:text-base"
              >
                <p className="flex items-center gap-2 ">
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
        data-aos-delay=""
        className="mb-8 leading-relaxed text-center max-w-lg mx-auto my-10"
      >
        Where Compassion Meets Care. Empowering Your Health Journey, One Step at
        a Time.
      </p>
    </section>
  );
};

export default ComprehensiveSupport;
