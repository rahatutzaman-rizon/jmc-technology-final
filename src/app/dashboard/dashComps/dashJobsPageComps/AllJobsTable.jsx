// "use client";

// import { SkeletonListTable } from "@/components/Shared/commonComps/AllLoadingskeletons";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

// const AllJobsTable = () => {
//   const [{ isLoading, error, appliedJobs }, setAppliedJobs] = useState({
//     isLoading: true,
//     error: null,
//     appliedJobs: null,
//   });
//   useEffect(() => {
//     const fetchAppliedJobsData = async () => {
//       try {
//         setAppliedJobs((prevState) => ({
//           ...prevState,
//           isLoading: true,
//         }));
//         const response = await import(
//           "./../../../../assets/fake-jsons/jobapplied.json"
//         );
//         setAppliedJobs({
//           isLoading: false,
//           error: null,
//           appliedJobs: response.default,
//         });
//       } catch (error) {
//         setAppliedJobs((prevState) => ({
//           ...prevState,
//           isLoading: false,
//           error,
//         }));
//       }
//     };
//     fetchAppliedJobsData();
//   }, []);
//   const [confirmationMsg, setConfirmationMsg] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(10);

//   const handleDelete = async (id) => {
//     const isConfirmDeleteJobApplication = confirm(`Delete job: ${id}`);
//     if (isConfirmDeleteJobApplication) {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/jobapplied/delete/${id}`,
//           {
//             method: "DELETE",
//             headers: {
//               authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         const data = await res.json();
//         console.log("data", data);
//       } catch (error) {
//         console.log("error", error);
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
//   const totalPages = Math.ceil(appliedJobs?.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentItems = appliedJobs?.slice(
//     startIndex,
//     startIndex + itemsPerPage
//   );

//   if (isLoading) {
//     return <SkeletonListTable />;
//   }

//   return (
//     <div className="list">
//       <div className="page-header flex justify-between items-center mb-4 bg-white p-4 md:p-6 shadow">
//         <p className="text-xl md:text-2xl">All Applied Jobs</p>
//         {/* <button className="create-btn text-dashPrimary border-dashPrimary border bg-white rounded py-2 px-4">
//           <Link href={"/dashboard/add-job"}>Add appliedJobs</Link>
//         </button> */}
//       </div>

//       {confirmationMsg && (
//         <div className="mb-4 text-green-500">{confirmationMsg}</div>
//       )}

//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-300 mb-4">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-b">Applicant Name</th>
//               <th className="py-2 px-4 border-b">Contact No</th>
//               <th className="py-2 px-4 border-b">Job Title</th>
//               <th className="py-2 px-4 border-b">Appling Date</th>
//               <th className="py-2 px-4 border-b">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentItems?.map((item, i) => (
//               <tr key={i}>
//                 <td className="py-2 px-4 border-b">
//                   {item?.firstName || "Anonymous"}
//                 </td>
//                 <td className="py-2 px-4 border-b">
//                   {item?.mobileNumber || "+8801...."}
//                 </td>
//                 <td className="py-2 px-4 border-b">{item.jobTitle}</td>
//                 <td className="py-2 px-4 border-b">{item.applingDate}</td>
//                 <td className="py-3 px-4 border-b flex space-x-2">
//                   <button className="text-dashSideNavText hover:underline"></button>
//                   <button
//                     onClick={() => handleDelete(item._id)}
//                     className="text-dashSideNavText"
//                   >
//                     <FaTrash />
//                   </button>
//                   <button className="text-dashSideNavText hover:underline">
//                     <Link href={`/jobDetails/${item?._id}`}>
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

"use client";

import { SkeletonListTable } from "@/components/Shared/commonComps/AllLoadingskeletons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const AllJobsTable = () => {
  const [{ isLoading, error, applications }, setAppliedJobs] = useState({
    isLoading: true,
    error: null,
    applications: null,
  });
  useEffect(() => {
    const fetchAppliedJobsData = async () => {
      try {
        setAppliedJobs((prevState) => ({
          ...prevState,
          isLoading: true,
        }));

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL_JMC_TECHNOLOGY}/api/job/application/list`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        // Update state with fetched applications
        setAppliedJobs({
          isLoading: false,
          error: null,
          applications: data.applications,
        });
      } catch (error) {
        setAppliedJobs((prevState) => ({
          ...prevState,
          isLoading: false,
          error: error.message,
        }));
      }
    };

    fetchAppliedJobsData();
  }, []);

  const [confirmationMsg, setConfirmationMsg] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleDelete = async (_id) => {
    const isConfirmDeleteJobApplication = confirm(`Delete job: ${_id}`);
    if (isConfirmDeleteJobApplication) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL_JMC_TECHNOLOGY}/api/job/application/destroy/${_id}`,
          {
            method: "DELETE",
            // headers: {
            //   authorization: `Bearer ${token}`,
            // },
          }
        );
        const data = await res.json();
        console.log("data", data);
      } catch (error) {
        console.log("error", error);
      }
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
  const totalPages = Math.ceil(applications?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = applications?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  if (isLoading) {
    return <SkeletonListTable />;
  }

  return (
    <div className="list">
      <div className="page-header flex justify-between items-center mb-4 bg-white p-4 md:p-6 shadow">
        <p className="text-xl md:text-2xl">All Applied Jobs</p>
        {/* <button className="create-btn text-dashPrimary border-dashPrimary border bg-white rounded py-2 px-4">
          <Link href={"/dashboard/add-job"}>Add appliedJobs</Link>
        </button> */}
      </div>

      {confirmationMsg && (
        <div className="mb-4 text-green-500">{confirmationMsg}</div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 mb-4">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Applicant Name</th>
              <th className="py-2 px-4 border-b">Contact No</th>
              <th className="py-2 px-4 border-b">Job Title</th>
              <th className="py-2 px-4 border-b">Applying Date</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems?.map((item) => (
              <tr key={item._id} className="text-center">
                <td className="py-2 px-4 border-b">
                  {item.full_name || "Anonymous"}
                </td>
                <td className="py-2 px-4 border-b">
                  {item.mobile || "+8801...."}
                </td>
                <td className="py-2 px-4 border-b">{item.job_title}</td>
                <td className="py-2 px-4 border-b">
                  {new Date(item.date).toLocaleDateString()}
                </td>
                <td className="py-3 px-4 border-b flex space-x-2">
                  <button className="text-dashSideNavText hover:underline"></button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="text-dashSideNavText"
                  >
                    <FaTrash />
                  </button>
                  <button className="text-dashSideNavText hover:underline">
                    <Link href={`/jobDetails/${item?.job_id}`}>
                      <FaEye title="View Job Description" />
                    </Link>
                  </button>
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
