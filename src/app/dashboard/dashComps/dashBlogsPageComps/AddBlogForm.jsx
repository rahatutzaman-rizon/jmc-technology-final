// "use client";
// import Link from "next/link";
// import React from "react";

// const AddBlogForm = () => {
//   //   const [first, setfirst] = useState(second);
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // log all data
//     console.log(e.target);
//   };
//   return (
//     <div className="Add">
//       {/* header for add glance comps */}
//       <div className=" mb-4 bg-white p-4 md:p-6">
//         <h1 className="text-xl md:text-2xl">Add</h1>
//         <p>
//           <small>Fields with (*) marks are required.</small>
//         </p>
//       </div>

//       {/* form for add glance comps */}
//       <div className="bg-white p-4 md:p-6">
//         <h1 className="text-2xl border-b mb-4 pb-4">Section Info</h1>
//         <form onSubmit={handleFormSubmit}>
//           <div className="lg:flex gap-4 items-center justify-center my-12">
//             <div className="mb-4 w-full">
//               <label htmlFor="order" className="block text-sm font-bold mb-2">
//                 Count <span className="text-red-600">*</span>
//               </label>
//               <input
//                 type="number"
//                 id="order"
//                 name="order"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Enter order"
//               />
//             </div>
//             <div className="mb-4 w-full">
//               <label
//                 htmlFor="description"
//                 className="block text-sm font-bold mb-2"
//               >
//                 Text <span className="text-red-600">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="description"
//                 name="description"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Enter service description"
//               />
//             </div>
//           </div>

//           <div className="flex items-center justify-center gap-2">
//             <button
//               //   onClick={() => handleToggle("list")}
//               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="button"
//             >
//               <Link href={"/dashboard/all-blogs"}>Cancel</Link>
//             </button>
//             <button
//               className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="submit"
//             >
//               Add
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddBlogForm;

"use client";
import React, { useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { useRouter } from "next/navigation";
import { useBlogs } from "@/utils/customHooks/useBlogs";

const AddBlogForm = () => {
  const { isLoading, error, blogs, refetchBlogs } = useBlogs();
  const router = useRouter();
  const [content, setContent] = useState("");
  const [seoDescriptions, setSeoDescriptions] = useState("");
  const [category, setCategory] = useState([]);
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");

  const handleContentChange = (content) => {
    console.log(content);
    setContent(content);
  };
  const handleImageUpload4Suneditor = (targetElement, index, state, image) => {
    // console.log("targetElement", targetElement);
    // console.log("index", index);
    // console.log("state", state);
    // console.log("image", image);
  };
  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // validate all fields are filled or not if not then return and show error based on that in frontend
    if (
      !title ||
      !seoDescriptions ||
      !content ||
      !category ||
      !tags ||
      !image
    ) {
      alert("Please fill all the fields");
      return;
    }
    formData.append("title", title);
    formData.append("seoDescriptions", seoDescriptions);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("tags", JSON.stringify(tags));
    if (image) {
      formData.append("image", image);
    }

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/blogs`,
        {
          method: "POST",
          headers: {
            //   "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.success) {
        refetchBlogs();
        router.replace("/dashboard/all-blogs");
      }
    } catch (error) {
      console.error("Error submitting blog:", error);
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="blogFields">
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="outline-none border my-2 p-3 w-full"
          />
          <div className="border p-2  my-2">
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            >
              <option selected value="" disabled>
                Select a category
              </option>
              {[
                "Adventure",
                "Beach",
                "Culture",
                "Historical",
                "Nature",
                "Wildlife",
                "Uncategorized",
              ].map((sgCtg, index) => (
                <option key={index} value={sgCtg}>
                  {sgCtg}
                </option>
              ))}
            </select>
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border p-2 w-full  mt-2 mb-8"
          />

          <div className="z-10">
            <SunEditor
              autoFocus={true}
              placeholder="Enter the content"
              width="100%"
              height="500"
              defaultValue={""}
              onChange={handleContentChange}
              onImageUpload={handleImageUpload4Suneditor}
              setDefaultStyle={`color:black;`}
              setOptions={{
                font: [
                  "Arial",
                  "Comic Sans MS",
                  "Courier New",
                  "Impact",
                  "Georgia",
                  "Tahoma",
                  "Trebuchet MS",
                  "Verdana",
                  "Logical",
                  "Salesforce Sans",
                  "Garamond",
                  "Sans-Serif",
                  "Serif",
                  "Times New Roman",
                  "Helvetica",
                ],
                fontSize: [
                  8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 36, 42, 55,
                  60,
                ],
                popupDisplay: "local",

                buttonList: [
                  ["undo", "redo"],
                  ["font", "fontSize", "formatBlock"],
                  ["textStyle", "fontColor", "hiliteColor", "horizontalRule"],
                  ["bold", "underline", "italic", "strike"],
                  ["subscript", "superscript", "removeFormat", "blockquote"],
                  [
                    "list",
                    "align",
                    "table",
                    "image",
                    "preview",
                    "video",
                    "audio",
                  ],
                ],
              }}
            />
          </div>
        </div>

        <div className="my-2">
          <div className="seoFields grid grid-cols-1 gap-4 my-8">
            <input
              type="text"
              onChange={(e) => setTags(e.target.value.split(","))}
              className="border p-2"
              placeholder="use comma(,) for tags"
            />

            <textarea
              onChange={(e) => setSeoDescriptions(e.target.value)}
              className="border p-2 min-h-44"
              placeholder="seo descriptions"
            />
          </div>

          <button
            type="submit"
            className="border p-3 bg-dashPrimary text-white w-full"
          >
            Submit Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogForm;
