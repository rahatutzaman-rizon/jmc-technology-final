

"use client";
import React from "react";
import { SkeletonAllBlogs } from "../Shared/commonComps/AllLoadingskeletons";
import SingleJobCard from "./SingleJobCard";
import { useCareers } from "@/utils/customHooks/useCareers";

const CareerPageComp = () => {
  const { isLoading, error, careers, refetchCareers } = useCareers();
  console.log(careers);
  return (
    <div>
      {/* Background Section */}
      {isLoading ? (
        <SkeletonAllBlogs />
      ) : error ? (
        <div className="text-red-500 text-center">
          Error loading careers: {error.message}
        </div>
      ) : (
        <>
          <div className="relative h-80">
            <div
              className="absolute inset-0 bg-bottom"
              style={{
                backgroundImage: `url("https://bernardmarr.com/wp-content/uploads/2022/04/The-10-Biggest-Technology-Trends-That-Will-Transform-The-Next-Decade.jpg")`,
                backgroundAttachment: "fixed",
                backgroundPosition: "center bottom",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: -1,
                height: "100%",
              }}
            />
            <div className="absolute inset-0 bg-[#00000071] flex items-center p-4">
              <div className="container max-w-7xl mx-auto lg:p-16 p-4">
                <h1 className="text-3xl md:text-5xl text-careerRed font-bold">
                  Build Your Career With Us
                </h1>
                <p className="text-white my-6 md:font-bold text-sm md:text-base">
                  Become a part of our big family to inspire and get inspired by
                  professional experts
                </p>
              </div>
            </div>
          </div>

          {/* Job Options */}
          <div className="container max-w-7xl mx-auto lg:p-16 p-4">
            <h1 className="lg:text-4xl text-2xl capitalize font-bold">
              Open Job Options
            </h1>
            <div className="lg:p-8 p-4 grid lg:grid-cols-3 gap-12">
              {careers?.slice(0, 7).map((career) => (
                <SingleJobCard key={career._id} career={career} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CareerPageComp;
