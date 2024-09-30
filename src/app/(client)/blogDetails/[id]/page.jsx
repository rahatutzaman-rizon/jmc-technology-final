// import React from "react";
// import CommnetBlogForm from "@/components/blogsPage/CommnetBlogForm";
// import RecentBlogsComponent from "@/components/blogsPage/RecentBlogsComponent";
// import TagsBlogSection from "@/components/blogsPage/TagsBlogSection";
// import LocationsCard from "@/components/shared/LocationsCard";
// import Image from "next/image";
// import Link from "next/link";
import CommnetBlogForm from "@/components/blogsPage/CommnetBlogForm";
import RecentBlogsComponent from "@/components/blogsPage/RecentBlogsComponent";
import TagsBlogSection from "@/components/blogsPage/TagsBlogSection";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaRegComment,
  FaRegFolderOpen,
  FaRegUser,
  FaTwitter,
} from "react-icons/fa";
// import LocationCardComponent from "@/components/blogsPage/LocationCardComponent";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const { blogs } = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/blogs`
  ).then((res) => res.json());

  const staticParams4BlogDetails = blogs.map((blog) => ({
    id: blog._id,
  }));

  console.log("staticParams4BlogDetails", staticParams4BlogDetails);
  return staticParams4BlogDetails;
}

// i want to create fn for generate metadata
export async function generateMetadata({ params }) {
  const blog = await fetchBlogById(params.id); // fetching the blog by ID
  return {
    title: blog?.title, // using the fetched blog data
    description: blog?.seoDescriptions || blog?.descriptions.slice(0, 30),
    keywords: blog?.tags?.join(", "),
    openGraph: {
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/${blog?.imagePath}`,
        },
      ],
    },
  };
}

async function fetchBlogById(id) {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/blogs/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const blog = await response.json();
    return blog;
  } catch (error) {
    console.error(`Failed to fetch blog by ID ${id}:`, error);
    throw error; // Re-throw the error after logging it
  }
}

const SgBlogDetails = async ({ params }) => {
  const blog = await fetchBlogById(params?.id); // Use params?.id instead of params?._id

  return (
    <>
      <div>
        {/* Background Section */}
        <div className="relative h-64">
          <div
            className="absolute inset-0 bg-bottom"
            style={{
              backgroundImage: `url("https://res.cloudinary.com/djpw7o0bv/image/upload/v1727700007/blog_Page_banner_img_dty6wz.png")`,
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              zIndex: -1,
              height: "100%",
            }}
          />
          <div className="absolute inset-0 bg-[#0000007e] flex items-center justify-start">
            <div className="container">
              {/* <h1 className="text-2xl md:text-4xl text-white font-bold text-center">
              Student Visa
            </h1> */}
            </div>
          </div>

          <div className="py-4 bg-white absolute hidden md:block md:bottom-0 md:right-0 xl:right-40 rounded-t-xl">
            <div className="container mx-auto px-4">
              <p className="text-lg">
                <span className="text-gray-500">Home</span> /{" "}
                <span className="text-red-500 font-bold">
                  {blog?.category || "Uncategorized"}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto grid lg:grid-cols-[1.5fr_0.5fr] lg:grid-rows-[1fr] gap-8 py-24">
          <div className="">
            <div className="flex items-center text-sm text-gray-600 gap-4 mb-4">
              <div className="text-base flex items-center">
                <FaRegUser className="inline-block mr-1 text-red-400" />
                <span>{blog?.writer}</span>
              </div>
              <div className="text-base flex items-center">
                <FaRegFolderOpen className="inline-block mr-1 text-red-400" />
                <span>{blog?.category || "Uncategorized"}</span>
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-bold">
                {blog?.title || "Blogs Title Here"}
              </h1>
              <section className="text-gray-500 text-justify my-6">
                <div dangerouslySetInnerHTML={{ __html: blog?.descriptions }} />
              </section>
            </div>

            <hr className="bg-red-50 mt-10 mb-6" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div className="flex gap-2 flex-wrap">
                <h1 className="text-xl font-bold">Tags : </h1>
                {
                  // ["inani beach", "inani beach hotel", "inani beach resort"]
                  blog?.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-[#E8604C] text-white uppercase font-bold text-sm p-1 px-2 rounded-xl"
                    >
                      {tag}
                    </span>
                  ))
                }
              </div>
              <div className="flex gap-2 lg:justify-end">
                <Link
                  href="/contact"
                  className="bg-[#fff3f3] inline-block p-4 rounded-full"
                >
                  <FaFacebookSquare />
                </Link>
                <Link
                  href="/contact"
                  className="bg-[#fff3f3] inline-block p-4 rounded-full"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="/contact"
                  className="bg-[#fff3f3] inline-block p-4 rounded-full"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href="/contact"
                  className="bg-[#fff3f3] inline-block p-4 rounded-full"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>

            {/* writer */}
            <div className="bg-[#FAF5EE] p-16 my-8">
              <div className="ms-8">
                <h1 className="text-2xl font-bold">
                  {blog?.writer || "Me.Writer"}
                </h1>
                <hr className="border-[#E8604C] border w-12 mt-2" />
              </div>
            </div>

            {/* addacomment */}
            <div className="">
              <h1 className="text-xl font-bold text-gray-600">Add a comment</h1>
              <hr className="border-[#E8604C] w-12 mt-2" />
              <p className="text-gray-500 my-8">
                Your email address will not be published.
              </p>
              <CommnetBlogForm />
            </div>
          </div>

          {/* sidesection */}
          <div className="flex flex-col gap-8">
            <RecentBlogsComponent />

            <TagsBlogSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default SgBlogDetails;
