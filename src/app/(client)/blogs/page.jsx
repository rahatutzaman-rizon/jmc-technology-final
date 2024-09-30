// "use client";

import AllBlogsPageComps from "@/components/blogsPage/AllBlogsPageComps";

export const metadata = {
  title: {
    absolute: "Blog - JMC Tours & Travels", // it overwrites default title of layout.js
  },
  description: "Blog",
};

const AllBlogsPage = () => {
  return <AllBlogsPageComps />;
};

export default AllBlogsPage;
