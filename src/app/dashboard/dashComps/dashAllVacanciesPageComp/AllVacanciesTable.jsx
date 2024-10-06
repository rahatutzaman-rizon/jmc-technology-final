// "use client";

// import { SkeletonListTable } from "@/components/Shared/commonComps/AllLoadingskeletons";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

// const AllJobsTable = () => {
//   const [{ isLoading, error, jobListings }, setJobListings] = useState({
//     isLoading: true,
//     error: null,
//     jobListings: null,
//   });

//   useEffect(() => {
//     const fetchJobListingsData = async () => {
//       try {
//         setJobListings((prevState) => ({
//           ...prevState,
//           isLoading: true,
//         }));
//         const response = await import(
//           "./../../../../assets/fake-jsons/careers.json"
//         );
//         setJobListings({
//           isLoading: false,
//           error: null,
//           jobListings: response.default,
//         });
//       } catch (error) {
//         setJobListings((prevState) => ({
//           ...prevState,
//           isLoading: false,
//           error,
//         }));
//       }
//     };
//     fetchJobListingsData();
//   }, []);

//   const [confirmationMsg, setConfirmationMsg] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(10);

//   const handleDelete = async (id) => {
//     const isConfirmDeleteJob = confirm(`Delete job listing with ID: ${id}?`);
//     if (isConfirmDeleteJob) {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/joblistings/delete/${id}`,
//           {
//             method: "DELETE",
//             headers: {
//               authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         const data = await res.json();
//         console.log("Deleted job data", data);
//         setConfirmationMsg(`Successfully deleted job listing with ID: ${id}`);
//         // Optionally, refresh the job listings here
//       } catch (error) {
//         console.log("Error deleting job listing", error);
//       }
//     }
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const handleItemsPerPageChange = (e) => {
//     setItemsPerPage(Number(e.target.value));
//     setCurrentPage(1); // Reset to the first page
//   };

//   // Pagination logic
//   const totalPages = Math.ceil(jobListings?.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentItems = jobListings?.slice(
//     startIndex,
//     startIndex + itemsPerPage
//   );

//   if (isLoading) {
//     return <SkeletonListTable />;
//   }

//   return (
//     <div className="list">
//       <div className="page-header flex justify-between items-center mb-4 bg-white p-4 md:p-6 shadow">
//         <p className="text-xl md:text-2xl">Job Listings</p>
//         <button className="create-btn text-dashPrimary border-dashPrimary border bg-white rounded py-2 px-4">
//           <Link href={"/dashboard/add-job"}>Add Job Listing</Link>
//         </button>
//       </div>

//       {confirmationMsg && (
//         <div className="mb-4 text-green-500">{confirmationMsg}</div>
//       )}

//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-300 mb-4">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-b">Job Title</th>
//               <th className="py-2 px-4 border-b">Vacancies</th>
//               <th className="py-2 px-4 border-b">Salary Range</th>
//               <th className="py-2 px-4 border-b">Application Deadline</th>
//               <th className="py-2 px-4 border-b">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentItems?.map((item, i) => (
//               <tr key={i}>
//                 <td className="py-2 px-4 border-b">{item.title}</td>
//                 <td className="py-2 px-4 border-b">{item.vacancy_count}</td>
//                 <td className="py-2 px-4 border-b">{item.salary.range}</td>
//                 <td className="py-2 px-4 border-b">
//                   {item.application_deadline}
//                 </td>
//                 <td className="py-3 px-4 border-b flex space-x-2">
//                   <button
//                     onClick={() => handleDelete(item._id)}
//                     className="text-dashSideNavText"
//                   >
//                     <FaTrash />
//                   </button>
//                   <button className="text-dashSideNavText hover:underline">
//                     <Link href={`/jobDetails/${item._id}`}>
//                       <FaEye title="View Job Description" />
//                     </Link>
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="flex flex-col md:flex-row justify-between items-center mb-4">
//         <div className="mb-2 md:mb-0">
//           <span>Items per page: </span>
//           <select
//             value={itemsPerPage}
//             onChange={handleItemsPerPageChange}
//             className="border rounded p-1"
//           >
//             <option value={5}>5</option>
//             <option value={10}>10</option>
//             <option value={15}>15</option>
//           </select>
//         </div>
//         <div className="flex flex-wrap justify-center md:justify-end">
//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index}
//               onClick={() => handlePageChange(index + 1)}
//               className={`mx-1 px-3 py-1 border rounded ${
//                 currentPage === index + 1
//                   ? "bg-blue-500 text-white"
//                   : "bg-white"
//               }`}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllJobsTable;

/* v2 */

"use client";

import { SkeletonListTable } from "@/components/Shared/commonComps/AllLoadingskeletons";
import { useVacancies } from "@/utils/customHooks/useVacancies";
import Link from "next/link";
import { useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const AllJobsTable = () => {
  const { isLoading, error, jobs, success, refetchVacancies } = useVacancies();
  const [confirmationMsg, setConfirmationMsg] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [deletingJobId, setDeletingJobId] = useState(null); // To track the job being deleted

  const handleDelete = async (id) => {
    setDeletingJobId(id); // Set the current deleting job ID
    try {
      const response = await fetch(
        `https://jmctl-api.bdcare.vip/api/job/destroy/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      if (response.ok) {
        console.log(`Deleted job with ID: ${id}`);
        setConfirmationMsg(`Job with ID ${id} deleted successfully.`);
        refetchVacancies(); // Refetch the vacancies to update the list
      } else {
        console.error("Failed to delete job:", data.message);
        setConfirmationMsg(`Failed to delete job: ${data.message}`);
      }
    } catch (error) {
      console.error("Error while deleting job:", error);
      setConfirmationMsg(`Error while deleting job: ${error.message}`);
    } finally {
      setDeletingJobId(null); // Reset the deleting job ID
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page
  };

  // Pagination logic
  const totalPages = Math.ceil(jobs?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = jobs?.slice(startIndex, startIndex + itemsPerPage);

  if (isLoading) {
    return <SkeletonListTable />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="list">
      <div className="page-header flex justify-between items-center mb-4 bg-white p-4 md:p-6 shadow">
        <p className="text-xl md:text-2xl">Job Listings</p>
        <button className="create-btn text-dashPrimary border-dashPrimary border bg-white rounded py-2 px-4">
          <Link href={"/dashboard/add-job"}>Add Job Listing</Link>
        </button>
      </div>

      {confirmationMsg && (
        <div className="mb-4 text-green-500">{confirmationMsg}</div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 mb-4">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Job Title</th>
              <th className="py-2 px-4 border-b">Vacancies</th>
              <th className="py-2 px-4 border-b">Salary Range</th>
              <th className="py-2 px-4 border-b">Application Deadline</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems?.map((item, i) => (
              <tr key={i}>
                <td className="py-2 px-4 border-b">{item.title}</td>
                <td className="py-2 px-4 border-b">{item.vacancy_count}</td>
                <td className="py-2 px-4 border-b">N/A</td>
                <td className="py-2 px-4 border-b">
                  {item.application_deadline}
                </td>
                <td className="py-3 px-4 border-b flex space-x-2">
                  <button
                    onClick={() => handleDelete(item._id)}
                    disabled={deletingJobId === item._id} // Disable the button while the job is being deleted
                    className={`text-dashSideNavText ${
                      deletingJobId === item._id ? "opacity-50" : ""
                    }`}
                  >
                    <FaTrash />
                  </button>
                  {/* <button className="text-dashSideNavText hover:underline">
                    <Link href={`/jobDetails/${item._id}`}>
                      <FaEye title="View Job Description" />
                    </Link>
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="mb-2 md:mb-0">
          <span>Items per page: </span>
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="border rounded p-1"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-3 py-1 border rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-white"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllJobsTable;
