"use client";
import React from "react";
import { useEffect, useState } from "react";
import { SkeletonAllBlogs } from "../Shared/commonComps/AllLoadingskeletons";
import SingleBlogCard from "./SingleBlogCard";
import TagsBlogSection from "./TagsBlogSection";
import RecentBlogsComponent from "./RecentBlogsComponent";
import { useBlogs } from "@/utils/customHooks/useBlogs";

const AllBlogsPageComps = ({ blogCategory }) => {
  const { isLoading, error, blogs, refetchBlogs } = useBlogs(blogCategory);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const blogsPerPage = 4;

  useEffect(() => {
    if (blogs) {
      setFilteredBlogs(blogs);
    }
  }, [blogs]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBlogs(filtered);
    } else {
      setFilteredBlogs(blogs);
    }
    setCurrentPage(1);
  }, [searchTerm, blogs]);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs =
    filteredBlogs?.slice(indexOfFirstBlog, indexOfLastBlog) || [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // if (isLoading) return <SkeletonCard twcss="p-36" />;
  if (error) return <div>Error loading blogs</div>;

  return (
    <div>
      {/* Background Section */}
      {isLoading ? (
        <SkeletonAllBlogs />
      ) : (
        <>
          <div className="relative h-64">
            <div
              className="absolute inset-0 bg-bottom"
              style={{
                backgroundImage: `url("https://res.cloudinary.com/djpw7o0bv/image/upload/v1727700007/blog_Page_banner_img_dty6wz.png")`,
                backgroundAttachment: "fixed",
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                zIndex: -1,
                height: "100%",
              }}
            />
            <div className="absolute inset-0 bg-[#000000c5] flex items-center">
              <div className="container">
                <h1 className="text-2xl md:text-4xl text-white font-bold text-center">
                  Blogs
                </h1>
              </div>
            </div>
          </div>

          {/* blogs page */}
          <div className="container mx-auto px-4 py-8 ">
            <div className="flex flex-col lg:flex-row gap-8 ">
              <div className="w-full lg:w-2/3 ">
                {currentBlogs?.length == 0 && (
                  <small>
                    <strong>No blogs yet</strong>
                  </small>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-8  overflow-hidden">
                  {currentBlogs?.map((blog, index) => (
                    <SingleBlogCard index={index} key={blog?._id} blog={blog} />
                  ))}
                </div>

                <div className="flex justify-center mt-8">
                  <ul className="inline-flex items-center -space-x-px">
                    {Array.from(
                      {
                        length: Math.ceil(filteredBlogs?.length / blogsPerPage),
                      },
                      (_, i) => (
                        <li key={i}>
                          <button
                            onClick={() => paginate(i + 1)}
                            className={`px-3 py-2 leading-tight ${
                              currentPage === i + 1
                                ? "text-blue-600 border border-blue-300 bg-blue-50"
                                : "text-gray-500 border border-gray-300 bg-white"
                            } rounded-lg ml-2`}
                          >
                            {i + 1}
                          </button>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              <div className="w-full lg:w-1/3 ">
                <div className="mb-8  border p-8 rounded-xl">
                  <h4 className="text-lg font-bold mb-2">Search</h4>
                  <input
                    type="text"
                    placeholder="Search blogs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>

                {/* tags section */}
                <TagsBlogSection />

                <RecentBlogsComponent />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AllBlogsPageComps;
