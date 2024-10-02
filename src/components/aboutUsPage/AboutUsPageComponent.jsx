import React from "react";
import WhoWeAreComp from "./WhoWeAreComp";
import { poppins } from "@/app/layout";
import AboutOurMissionVission from "./AboutOurMissionVission";
import OurInnovativeSolutions from "./OurInnovativeSolutions";
import ComprehensiveSupport from "./ComprehensiveSupport";

const AboutUsPageComponent = () => {
  return (
    <div className={`${poppins.className}`}>
      <div className="relative h-96">
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
        <div className="absolute inset-0 bg-[#00000071] flex items-center p-4">
          <div className="container  max-w-7xl mx-auto lg:p-16 p-4 overflow-hidden">
            <h1 className="text-3xl md:text-5xl text-careerRed font-bold">
              {[...Array("About".length)].map((_, i) => (
                <span
                  key={i}
                  data-aos="fade-down"
                  data-aos-delay={(i + 1) * 100}
                >
                  {"About"[i]}
                </span>
              ))}
              <span
                className="text-white"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                {" "}
                Us
              </span>
            </h1>
            <p
              data-aos="fade-left"
              className="text-white my-6 md:font-bold text-sm md:text-base max-w-2xl"
            >
              JMC Medicine Corner Limited is your trusted partner in healthcare,
              conveniently located with five outlets across Dhaka and ambitious
              plans to expand throughout Bangladesh (64 districts). We are a
              licensed and established company dedicated to illuminating the
              path to better health for our community. Your Wellbeing, Our
              Passion
            </p>
          </div>
        </div>
      </div>
      {/* who we are */}
      <WhoWeAreComp />
      <AboutOurMissionVission />
      <OurInnovativeSolutions />
      <ComprehensiveSupport />
    </div>
  );
};

export default AboutUsPageComponent;
