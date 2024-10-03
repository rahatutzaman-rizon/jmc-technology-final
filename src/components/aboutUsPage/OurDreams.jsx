import React from "react";
import { TbBulb } from "react-icons/tb";

const dreams = [
  {
    name: `Imagine a world where technology not only serves your needs but fuels your dreams. At JMC Technology LTD., that's our reality. We're not just a software company, we're architects of possibility, crafting bespoke digital solutions that propel businesses into the future, faster than light. 
`,
    icon: <TbBulb />,
  },
  {
    name: `Driven by a relentless pursuit of progress, we don't believe in settling for the ordinary. Our team of passionate digital pioneers thrives on pushing boundaries, exploring new frontiers, and unlocking the boundless potential within every project.`,
    icon: <TbBulb />,
  },
];

const OurDreams = () => {
  return (
    <>
      <div className="relative h-[1000px] lg:h-[750px] overflow-hidden lg:mb-12">
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
              Our Dreams
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-white my-6  text-sm md:text-base "
            >
              Ready to embark on your digital transformation?
            </p>
            <div className="my-10  mx-auto inline-block">
              {dreams?.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={(index + 1) * 100}
                  className="text-white mb-2 text-sm md:text-base "
                >
                  <p className=" flex items-start gap-1.5 mb-6 bg-[#6362629d] p-4 text-justify rounded-lg max-w-2xl mx-auto">
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
              Contact us today and let&apos;s unlock the potential within your
              story.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurDreams;
