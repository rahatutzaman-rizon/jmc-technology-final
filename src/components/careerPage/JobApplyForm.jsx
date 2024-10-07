// import React, { useRef, useState } from "react";
// import axios from "axios";
// import { FaCheck } from "react-icons/fa";

// const JobApplyForm = ({ job }) => {
//   console.log(job);
//   const fobFormRef = useRef(null);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobileNumber: "",
//     linkedinProfile: "",
//     coverLetter: "",
//     resume: null,
//     agreeTerms: false,
//     jobTitle: job?.title,
//     applingDate: new Date().toISOString().slice(0, 10),
//   });
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === "checkbox") {
//       setFormData({
//         ...formData,
//         [name]: checked,
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       resume: e.target.files[0],
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate the mobile number length (11 digits)
//     if (formData.mobileNumber.length !== 11) {
//       alert("Mobile number must have 11 digits.");
//       return;
//     }

//     console.log("formData", formData);
//     // Prepare form data for API submission
//     const formDataToSend = new FormData();
//     formDataToSend.append("firstName", formData.firstName);
//     formDataToSend.append("lastName", formData.lastName);
//     formDataToSend.append("email", formData.email);
//     formDataToSend.append("mobileNumber", formData.mobileNumber);
//     formDataToSend.append("linkedinProfile", formData.linkedinProfile);
//     formDataToSend.append("coverLetter", formData.coverLetter);
//     formDataToSend.append("resume", formData.resume);

//     console.log("formData", formData);
//     console.log("formDataToSend", formDataToSend);
//     try {
//       const response = await axios.post("/jobs/apply", formDataToSend, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       if (response.status === 200) {
//         alert("Application submitted successfully!");
//         fobFormRef.current.reset();
//       }
//     } catch (error) {
//       alert("There was an error submitting the application.");
//     }
//   };

//   return (
//     <form
//       ref={fobFormRef}
//       onSubmit={handleSubmit}
//       className="max-w-lg w-full mx-auto bg-gray-100 p-6 md:p-8 rounded-lg shadow-lg"
//     >
//       <h2 className="text-2xl font-bold mb-6">Application For *</h2>
//       <p className="text-gray-600 mb-4">
//         {job?.job_title || "Junior Education Consultant"}
//       </p>

//       {/* First Name and Last Name */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <div>
//           <label className="block mb-2">First Name *</label>
//           <input
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>
//         <div>
//           <label className="block mb-2">Last Name *</label>
//           <input
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>
//       </div>

//       {/* Email Address */}
//       <div className="mt-4">
//         <label className="block mb-2">Email Address *</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//       </div>

//       {/* Mobile Number */}
//       <div className="mt-4">
//         <label className="block mb-2">Enter mobile number (11 digits) *</label>
//         <input
//           type="text"
//           name="mobileNumber"
//           value={formData.mobileNumber}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//       </div>

//       {/* LinkedIn Profile */}
//       <div className="mt-4">
//         <label className="block mb-2">LinkedIn Profile *</label>
//         <input
//           type="url"
//           name="linkedinProfile"
//           value={formData.linkedinProfile}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//           placeholder="https://www.linkedin.com/"
//         />
//       </div>

//       {/* Cover Letter */}
//       <div className="mt-4">
//         <label className="block mb-2">Cover Letter (400-500 words) *</label>
//         <textarea
//           name="coverLetter"
//           value={formData.coverLetter}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           rows="5"
//           required
//         />
//       </div>

//       {/* Upload Resume */}
//       <div className="mt-4">
//         <label className="block mb-2">
//           Upload Your Resume in PDF (max 2MB)
//         </label>
//         <input
//           type="file"
//           name="resume"
//           onChange={handleFileChange}
//           className="w-full p-2 border rounded"
//           accept="application/pdf"
//           required
//         />
//       </div>

//       {/* Terms and Conditions */}
//       {/* <div className="mt-4 flex items-start">
//         <input
//           type="checkbox"
//           name="agreeTerms"
//           checked={formData.agreeTerms}
//           onChange={handleChange}
//           className="mr-2"
//           required
//         />
//         <label>
//           Yes, I have read the{" "}
//           <strong className="text-slate-900 underline">Job Description</strong>{" "}
//           and I{" "}
//           <strong className="text-slate-900 underline">
//             Fulfill All The Requirements
//           </strong>
//           .
//         </label>
//       </div> */}

//       <div className="mt-4 flex items-start">
//         <input
//           type="checkbox"
//           name="agreeTerms"
//           id="agreeTerms"
//           checked={formData.agreeTerms}
//           onChange={handleChange}
//           className="peer hidden" // Hide the default checkbox
//           required
//         />
//         <label
//           htmlFor="agreeTerms"
//           className={`flex items-center justify-center min-w-6 h-6 border-2 rounded cursor-pointer transition-colors mr-2
//           ${formData.agreeTerms ? "border-green-500" : "border-red-500"}
//           bg-white`}
//         >
//           {formData.agreeTerms && (
//             <FaCheck className="w-4 h-4 text-green-500" />
//           )}
//         </label>
//         <label className="text-sm md:text-base">
//           Yes, I have read the{" "}
//           <strong className="text-slate-900 underline">Job Description</strong>{" "}
//           and I{" "}
//           <strong className="text-slate-900 underline">
//             Fulfill All The Requirements
//           </strong>
//           .
//         </label>
//       </div>

//       {/* Submit Button */}
//       <button
//         type="submit"
//         disabled={!formData.agreeTerms}
//         // className="mt-6 w-full bg-slate-700 text-white py-2 px-4 rounded hover:bg-slate-900"
//         // if disabled make the cursor disable and change the background color to gray-100
//         className={`mt-6 w-full  text-white py-2 px-4 rounded hover:bg-slate-900 ${
//           !formData.agreeTerms
//             ? "cursor-not-allowed bg-gray-300"
//             : "bg-gray-700"
//         }`}
//       >
//         APPLY
//       </button>
//     </form>
//   );
// };

// export default JobApplyForm;

/* v2 */

import React, { useRef, useState } from "react";
import axios from "axios";
import { FaCheck } from "react-icons/fa";

const JobApplyForm = ({ job }) => {
  const fobFormRef = useRef(null);
  const [formData, setFormData] = useState({
    job_id: job?.id,
    full_name: "",
    email: "",
    mobile: "",
    address: "",
    resume: null,
    status:"applied"
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData", formData);
    const formDataToSend = new FormData();
    formDataToSend.append("job_id", formData.job_id);
    formDataToSend.append("full_name", formData.full_name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("mobile", formData.mobile);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("resume", formData.resume);
    formDataToSend.append("status", formData.status);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL_JMC_TECHNOLOGY}/api/career/apply`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        alert("Application submitted successfully!");
        fobFormRef.current.reset();
      }
    } catch (error) {
      alert("There was an error submitting the application.");
    }
  };

  return (
    <form
      ref={fobFormRef}
      onSubmit={handleSubmit}
      className="max-w-lg w-full mx-auto bg-gray-100 p-6 md:p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6">Application For *</h2>
      <p className="text-gray-600 mb-4">
        {job?.title || "Junior Education Consultant"}
      </p>

      {/* First Name and Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block mb-2">Full Name *</label>
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </div>

      {/* Email Address */}
      <div className="mt-4">
        <label className="block mb-2">Email Address *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      {/* Mobile Number */}
      <div className="mt-4">
        <label className="block mb-2">Mobile Number *</label>
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      {/* Address */}
      <div className="mt-4">
        <label className="block mb-2">Address *</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="5"
          required
        />
      </div>

      {/* Upload Resume */}
      <div className="mt-4">
        <label className="block mb-2">
          Upload Your Resume in PDF (max 2MB)
        </label>
        <input
          type="file"
          name="resume"
          onChange={handleFileChange}
          className="w-full p-2 border rounded"
          accept="application/pdf"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-6 w-full bg-gray-700 text-white py-2 px-4 rounded hover:bg-slate-900"
      >
        APPLY
      </button>
    </form>
  );
};

export default JobApplyForm;
