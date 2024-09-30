import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaRegComment } from "react-icons/fa";
import { useRouter } from "next/navigation";

const SingleBlogCard = ({ blog, index }) => {
  const router = useRouter();
  const {
    title,
    imagePath,
    descriptions,
    seoDescriptions,
    writer,
    comments,
    _id,
  } = blog;

  return (
    <div
      className="  bg-white  shadow-md overflow-hidden "
      data-aos="fade-up"
      data-aos-delay={index * 300} // Adjust delay based on index
      data-aos-duration="1000" // Optional: duration of the animation
    >
      {/* Blog Image */}
      <div
        onClick={() => router.push(`/blogDetails/${_id}`)}
        className="relative w-full h-48 cursor-pointer group overflow-hidden"
      >
        <Image
          src={
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/${imagePath}` ||
            "https://theworldtravelguy.com/wp-content/uploads/2020/04/DSCF3947_450n.jpg"
          }
          alt={title || "Blog Image"}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-125 transition duration-1000 ease-in-out"
        />
      </div>
      <div className="px-4 py-6">
        {/* Title */}
        <h2
          onClick={() => router.push(`/blogDetails/${_id}`)}
          className="text-xl font-semibold mb-2 cursor-pointer"
        >
          {title}
        </h2>

        {/* Writer and Comments */}
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <span className="mr-2">
            {seoDescriptions.slice(0, 100) || "descriptions"} ...
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogCard;
