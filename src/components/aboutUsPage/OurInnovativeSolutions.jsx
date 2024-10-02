import React from "react";
import {
  FaAmbulance,
  FaRegClock,
  FaRegCommentDots,
  FaRegHeart,
  FaTruck,
} from "react-icons/fa";

const services = [
  {
    name: "24/7 Pharmacy Services",
    icon: <FaRegClock />,
  },
  {
    name: "Pharmaceutical Consultations",
    icon: <FaRegCommentDots />,
  },
  {
    name: "Home Delivery of Medications",
    icon: <FaTruck />,
  },
  {
    name: "Emergency Medication Supply",
    icon: <FaAmbulance />,
  },
  {
    name: "Products of Eye Care, Ear Care, Oral Care, Baby Care",
    icon: <FaRegHeart />,
  },
];

const OurInnovativeSolutions = () => {
  return (
    <>
      <div className="relative h-[600px] overflow-hidden lg:mb-12">
        <div
          className="absolute inset-0 bg-bottom"
          style={{
            backgroundImage: `url("https://www.propertycouncil.com.au/wp-content/uploads/2023/03/Header-11-Partner-with-us.png")`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            zIndex: -1,
            height: "100%",
          }}
        />
        <div className="absolute inset-0 bg-[#000000c4] flex items-center p-4">
          <div className="container  max-w-7xl mx-auto lg:p-16 p-4 overflow-hidden text-center">
            <h1
              data-aos="fade-up"
              className="text-3xl md:text-5xl text-careerRed font-bold"
            >
              Our Innovative Solutions
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-white my-6  text-sm md:text-base "
            >
              Always Open for Your Care
            </p>
            <div className="my-10  mx-auto inline-block">
              {services?.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={(index + 1) * 100}
                  className="text-white mb-2 text-sm md:text-base flex items-center gap-2"
                >
                  <p className=" flex items-center gap-2 ">
                    <span className="bg-white text-careerRed p-1.5 rounded-lg">
                      {item.icon}
                    </span>{" "}
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-white mt-6  text-sm md:text-base max-w-2xl mx-auto"
            >
              Join us on our mission to illuminate a path to better health.
              Visit your nearest JMC Medicine Corner Limited today!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurInnovativeSolutions;
