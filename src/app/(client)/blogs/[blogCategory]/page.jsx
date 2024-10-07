import AllBlogsPageComps from "@/components/blogsPage/AllBlogsPageComps";

export async function generateStaticParams() {
  const { categories } = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL_JMC_TECHNOLOGY}/api/blog/category/list`
  ).then((res) => res.json());

  const staticParams4CategorisedBlogs = categories.map((category) => ({
    blogCategory: category?._id.toString(),
  }));
  return staticParams4CategorisedBlogs;
}

export const metadata = {
  title: {
    absolute: "Blog - JMC Tours & Travels", // it overwrites default title of layout.js
  },
  description: "Blog",
};

const CategorisedBlogs = ({ params }) => {
  return <AllBlogsPageComps blogCategory={params?.blogCategory} />;
};

export default CategorisedBlogs;
