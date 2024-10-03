"use client";
import { useBlogCategories } from "@/utils/customHooks/useBlogCategory";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const TagsBlogSection = () => {
  const { isLoading, error, blogCategories, refetchBlogCategory } =
    useBlogCategories();

  return (
    <div className="mb-8 border p-8 rounded-xl">
      <h4 className="text-lg font-bold mb-4  ps-2 border-s-2 border-rose-400">
        Tags
      </h4>
      <div className="flex flex-wrap gap-2">
        {blogCategories?.map((ctg, index) => (
          <Link key={index} href={`/blogs/${ctg?.id}`}>
            <span className="px-3 py-1 bg-red-50 hover:bg-red-400 hover:text-white text-gray-700 rounded-full text-sm cursor-pointer">
              {ctg?.category_name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TagsBlogSection;
