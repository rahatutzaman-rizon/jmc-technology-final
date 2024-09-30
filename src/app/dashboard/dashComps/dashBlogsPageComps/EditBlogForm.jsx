"use client";
import React, { useEffect, useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { useRouter } from "next/navigation";
import { useBlogs } from "@/utils/customHooks/useBlogs";
import Image from "next/image";

const EditBlogForm = ({ blog }) => {
  const router = useRouter();
  const { refetchBlogs } = useBlogs();

  const [formData, setFormData] = useState({
    title: "",
    descriptions: "",
    seoDescriptions: "",
    category: "",
    tags: [],
    imagePath: null,
  });
  // Fetch existing blog data
  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog?.title,
        descriptions: blog?.descriptions,
        seoDescriptions: blog?.seoDescriptions,
        category: blog?.category,
        tags: blog?.tags,
        imagePath: blog?.imagePath,
      });
    }
  }, [blog]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSubmit = new FormData();

    formDataToSubmit.append("title", formData?.title);
    formDataToSubmit.append("seoDescriptions", formData?.seoDescriptions);
    formDataToSubmit.append("descriptions", formData?.descriptions);
    formDataToSubmit.append("category", formData?.category);
    formDataToSubmit.append("tags", JSON.stringify(formData?.tags));
    if (formData?.imagePath instanceof File) {
      alert("image instanceof File");
      formDataToSubmit.append("image", formData?.imagePath);
    }

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/blogs/${blog?._id}`,
        {
          method: "PUT",
          headers: {
            authorization: `Bearer ${token}`,
          },
          body: formDataToSubmit,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update location");
      }

      await refetchBlogs();
      router.push("/dashboard/all-blogs");
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  const handleContentChange = (content) => {
    setFormData((prev) => ({ ...prev, descriptions: content }));
  };

  const handleImageUpload = (event) => {
    setFormData((prev) => ({ ...prev, imagePath: event.target.files[0] }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="blogFields">
          <input
            type="text"
            placeholder="Blog Title"
            value={formData.title}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, title: e.target.value }))
            }
            className="outline-none border my-2 p-3 w-full"
          />
          <div className="border p-2 my-2">
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              value={formData.category}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, category: e.target.value }))
              }
              name="category"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="" disabled>
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

          {formData?.imagePath && (
            <div className="flex justify-center my-4">
              <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${blog?.imagePath}`}
                alt={formData?.title}
                className="max-w-full h-auto w-60 object-cover"
                width={500}
                height={500}
              />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border p-2 w-full mt-2 mb-8"
          />

          <SunEditor
            autoFocus={true}
            placeholder="Enter the content"
            width="100%"
            height="500"
            setContents={formData?.descriptions} // Use setContents to initialize content
            onChange={handleContentChange}
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

        <div className="my-2">
          <div className="seoFields grid grid-cols-1 gap-4 my-8">
            <input
              type="text"
              value={formData.tags.join(",")}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  tags: e.target.value.split(","),
                }))
              }
              className="border p-2"
              placeholder="use comma(,) for tags"
            />
            <textarea
              value={formData.seoDescriptions}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  seoDescriptions: e.target.value,
                }))
              }
              className="border p-2 min-h-44"
              placeholder="SEO descriptions"
            />
          </div>

          <button
            type="submit"
            className="border p-3 bg-black text-white w-full"
          >
            Update Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBlogForm;
