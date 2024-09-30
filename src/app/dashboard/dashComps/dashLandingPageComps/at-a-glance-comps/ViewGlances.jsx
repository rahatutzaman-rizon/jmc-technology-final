import React from "react";

const ViewGlances = ({ handleToggle }) => {
  return (
    <div className="Add">
      {/* form for add glance comps */}
      <div className="bg-white p-4 md:p-6">
        <h1 className="text-2xl border-b mb-4 pb-4">Glance Info</h1>
        <div className="m-6">
          <p>
            <strong>Count :</strong> 200+
          </p>
          <p>
            <strong>Text :</strong> Happy Customers !{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-center bg-white my-4 p-4">
        <button
          onClick={() => handleToggle("list")}
          className="bg-red-500 px-4 py-2 text-white rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ViewGlances;
