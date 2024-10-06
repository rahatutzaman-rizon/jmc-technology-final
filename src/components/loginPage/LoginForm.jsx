"use client";
import React, { useState } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { useRouter } from "next/navigation";

const LoginForm = ({ setToggleSignIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    error: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData((prevState) => ({ ...prevState, error: "" }));

    const { email, password } = formData;

    try {
      const response = await fetch("https://jmctl-api.bdcare.vip/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.status === 200) {
        console.log("1. Sign in done", data);
        // Optionally, redirect or perform any other action on successful login
      } else {
        setFormData((prevState) => ({
          ...prevState,
          error: data.message,
        }));
      }
    } catch (err) {
      console.error("Login error:", err);
      setFormData((prevState) => ({
        ...prevState,
        error: "Something went wrong. Please try again.",
      }));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full px-12 pt-6 pb-8 mt-8 shadow-md bg-red-200" 
    >
      {/* Email Field */}
      <div className="relative flex items-center mt-6">
        <span className="absolute">
          <AiOutlineMail className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
        </span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Email address"
          required
        />
      </div>

      {/* Password Field */}
      <div className="relative flex items-center mt-4">
        <span className="absolute">
          <AiOutlineLock className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
        </span>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Password"
          required
        />
      </div>

      {/* Error Message */}
      {formData.error && (
        <p className="mt-4 text-sm text-red-500 max-w-full break-words leading-3">
          <small>{formData.error}</small>
        </p>
      )}

      {/* Submit Button */}
      <div className="mt-6">
        <button
          type="submit"
          className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-contactBlue rounded-lg hover:bg-contactBlueHover focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
