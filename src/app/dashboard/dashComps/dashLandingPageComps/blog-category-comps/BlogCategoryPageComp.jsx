"use client";
import React, { useState } from "react";
import BlogCategoryTable from "./GlancesTable";
import BlogCategoryAddForm from "./BlogCategoryAddForm";
import GlancesUpdateForm from "./GlancesUpdateForm";
import ViewGlances from "./ViewGlances";

const BlogCategoryPageComp = () => {
  const [open, setOpen] = useState("list");

  const handleToggle = (type) => setOpen(open === type ? null : type);

  return (
    <section className="flex flex-col space-y-4">
      {open === "list" && <BlogCategoryTable handleToggle={handleToggle} />}
      {open === "add" && <BlogCategoryAddForm handleToggle={handleToggle} />}
      {open === "edit" && <GlancesUpdateForm handleToggle={handleToggle} />}
      {open === "view" && <ViewGlances handleToggle={handleToggle} />}
    </section>
  );
};

export default BlogCategoryPageComp;
