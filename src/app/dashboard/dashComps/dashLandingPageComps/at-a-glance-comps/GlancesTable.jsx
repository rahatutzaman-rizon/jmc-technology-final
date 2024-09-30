import Link from "next/link";
import { useEffect, useState } from "react";
import { FaTrash, FaEdit, FaEye } from "react-icons/fa";

const GlancesTable = ({ handleToggle }) => {
  const [data, setData] = useState([]);
  const [confirmationMsg, setConfirmationMsg] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Dummy data
  const dummyData = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    description: `Service ${i + 1}`,
    order: i + 1,
  }));

  useEffect(() => {
    // Simulating API call
    setData(dummyData);
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
    setConfirmationMsg("Row Deleted Successfully!");
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page
  };

  // Pagination logic
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="list">
      <div className="page-header flex justify-between items-center mb-4 bg-white p-4 md:p-6 shadow">
        <p className="text-xl md:text-2xl">Glances</p>
        <button
          onClick={() => handleToggle("add")}
          className="create-btn text-dashPrimary border-dashPrimary border bg-white rounded py-2 px-4"
        >
          Add
        </button>
      </div>

      {confirmationMsg && (
        <div className="mb-4 text-green-500">{confirmationMsg}</div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 mb-4">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">#ID</th>
              <th className="py-2 px-4 border-b">Service Description</th>
              <th className="py-2 px-4 border-b">Order</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-b">{item.id}</td>
                <td className="py-2 px-4 border-b">{item.description}</td>
                <td className="py-2 px-4 border-b">{item.order}</td>
                <td className="py-3 px-4 border-b flex space-x-2">
                  <button
                    onClick={() => handleToggle("edit")}
                    className="text-blue-500 hover:underline"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-500"
                  >
                    <FaTrash />
                  </button>
                  <button
                    onClick={() => handleToggle("view")}
                    className="text-green-500 hover:underline"
                  >
                    <FaEye />
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

export default GlancesTable;
