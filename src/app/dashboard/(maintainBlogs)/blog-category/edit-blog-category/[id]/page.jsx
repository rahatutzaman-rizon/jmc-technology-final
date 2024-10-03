import EditBlogCategoryPageComp from "@/app/dashboard/dashComps/dashLandingPageComps/blog-category-comps/EditBlogCategoryPageComp";
import React from "react";
import blogCategoryData from "./../../../../../../assets/fake-jsons/category.blog.json"; // Adjust the path as needed

export const generateStaticParams = async () => {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_BACKEND_URL_JMC_TECHNOLOGY}/api/blog/category/list/100`
  // );
  // const data = await res?.json();

  const { list } = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL_JMC_TECHNOLOGY}/api/blog/category/list/100`
  ).then((res) => res.json());

  const params = list?.map((item) => ({
    id: item.id.toString(),
  }));
  console.log(params);
  return params;
};
export const fetchCategoryById = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL_JMC_TECHNOLOGY}/api/blog/category/view/${id}`
  );
  const data = await res.json();
  return data.data;
};

const EditBlogCategoryPage = async ({ params }) => {
  const blogCategory = await fetchCategoryById(params.id);
  return (
    <section>
      <EditBlogCategoryPageComp blogCategory={blogCategory} />
    </section>
  );
};

export default EditBlogCategoryPage;
