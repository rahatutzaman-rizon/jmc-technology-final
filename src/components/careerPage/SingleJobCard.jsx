import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const SingleJobCard = ({ career }) => {
  const router = useRouter();
  return (
    <>
      <div className="bg-white shadow-md rounded-2xl overflow-hidden">
        <div className="relative w-full h-48  group overflow-hidden">
          <Image
            src={
              `${career?.job_thumbnail}` ||
              "https://img.freepik.com/free-photo/hiring-concept-with-empty-chair_23-2149519862.jpg"
            }
            alt={career?.title || "Job Image"}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-125 transition duration-1000 ease-in-out"
          />
        </div>
        <div className="p-4">
          <h1 className="text-lg font-extrabold">{career.title}</h1>
          <p className=" my-2 text-gray-500">
            Deadline: {career.application_deadline}
          </p>
          <button
            onClick={() => router.push(`/jobDetails/${career?._id}`)}
            class="py-1.5 mt-4 mb-2 px-4 transition-colors  border active:bg-gray-200 font-medium border-gray-300 text-gray-900 rounded-lg hover:bg-gray-100 disabled:opacity-50 flex items-center gap-2 cursor-pointer"
          >
            See Details <FaArrowRight className="text-sm" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleJobCard;
