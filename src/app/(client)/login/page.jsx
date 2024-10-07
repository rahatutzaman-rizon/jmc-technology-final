// "use client"; // For Next.js 14

// import React, { useState } from "react";
// import axios from "axios"; // Axios for API calls
// import { useRouter } from "next/navigation"; // Next.js router

// const LoginForm = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     error: "",
//   });

//   const router = useRouter(); // Router for navigation

//   // Handle form field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFormData((prevState) => ({ ...prevState, error: "" }));

//     const { email, password } = formData;

//     try {
//       // Send a POST request to your Laravel API
//       const response = await axios.post(
//         "https://jmctl-api.bdcare.vip/api/login", // Laravel API URL
//         { email, password },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       // Check if login was successful
//       if (response.data.status === 200) {
//         // Store the token in local storage or cookies
//         localStorage.setItem("token", response.data.auth.token);
//         console.log("Login successful", response.data);

//         // Redirect to a protected page (e.g., dashboard)
//         router.push("/dashboard");
//       } else {
//         // Handle error messages from the server
//         setFormData((prevState) => ({
//           ...prevState,
//           error: response.data.message,
//         }));
//       }
//     } catch (err) {
//       // Handle any other errors
//       setFormData((prevState) => ({
//         ...prevState,
//         error: err.response?.data?.message || "Login failed",
//       }));
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md p-8 space-y-6 bg-white shadow-md"
//       >
//         <h2 className="text-2xl font-bold text-center">Login</h2>

//         {/* Email Field */}
//         <div className="relative">
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email address"
//             required
//             className="w-full p-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Password Field */}
//         <div className="relative">
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Password"
//             required
//             className="w-full p-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Error Message */}
//         {formData.error && (
//           <p className="text-red-500 text-center">{formData.error}</p>
//         )}

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
//         >
//           Sign In
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;







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