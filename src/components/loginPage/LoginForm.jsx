"use client"; // For Next.js 14

import React, { useState } from "react";
import axios from "axios"; // Axios for API calls
import { useRouter } from "next/navigation"; // Next.js router

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    error: "",
  });

  const router = useRouter(); // Router for navigation

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData((prevState) => ({ ...prevState, error: "" }));

    const { email, password } = formData;

    try {
      // Send a POST request to your Laravel API
      const response = await axios.post(
        "https://jmctl-api.bdcare.vip/api/login", // Laravel API URL
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Check if login was successful
      if (response.data.status === 200) {
        // Store the token in local storage or cookies
        localStorage.setItem("token", response.data.auth.token);
        console.log("Login successful", response.data);

        // Redirect to a protected page (e.g., dashboard)
        router.push("/dashboard");
      } else {
        // Handle error messages from the server
        setFormData((prevState) => ({
          ...prevState,
          error: response.data.message,
        }));
      }
    } catch (err) {
      // Handle any other errors
      setFormData((prevState) => ({
        ...prevState,
        error: err.response?.data?.message || "Login failed",
      }));
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 space-y-6 bg-white shadow-md"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>

        {/* Email Field */}
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
            required
            className="w-full p-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Field */}
        <div className="relative">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full p-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Error Message */}
        {formData.error && (
          <p className="text-red-500 text-center">{formData.error}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
