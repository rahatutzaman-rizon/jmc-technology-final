import React from "react";
import { poppins } from "@/app/layout";
import ApplyJobModal from "./ApplyJobModal";

const JobDetailsPageComp = ({ job }) => {
  console.log(job);
  return (
    <section className={`${poppins.className}`}>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden container max-w-7xl mx-auto">
        <div className="p-6">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            {job?.job_title}
          </h2>
          <p className="font-semibold mb-4">Vacancy: {job?.no_of_vacancy}</p>
          <p className="text-gray-700 mb-4 text-justify">
            <strong>Job Location: </strong>
            {job?.job_location || "N/A"}
          </p>
          <p className="text-gray-700 mb-4 text-justify">
            <strong>Experience Level: </strong>
            {job?.experience_level || "N/A"}
          </p>
          <p className="text-gray-700 mb-4 text-justify">
            <strong>Education Qualification: </strong>
            {job?.education_qualification || "N/A"}
          </p>
          <p className="text-gray-700 mb-4 text-justify">
            <strong>Skills Required: </strong>
            {job?.skills_required || "N/A"}
          </p>
          <p className="text-gray-700 mb-4 text-justify">
            <strong>Compensation: </strong>
            {job?.compensation || "N/A"}
          </p>
          <p className="text-gray-700 mb-4 text-justify">
            <strong>Benefits: </strong>
            {job?.benefits || "N/A"}
          </p>
          <p className="mb-4">
            <strong>Application Deadline:</strong>{" "}
            {job?.application_deadline || "N/A"}
          </p>
          <p className="mb-4">
            <strong>Department:</strong> {job?.department?.name || "N/A"}
          </p>
          <div className="text-center my-4">
            <p className="py-4">
              <span className="font-bold">Read Before Applying</span>
            </p>
            <p className="text-justify">
              Please ensure you have the relevant skills and qualifications
              before applying. We value candidates who are ready to contribute
              to our team and grow within the company.
            </p>
            <ApplyJobModal job={job} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetailsPageComp;
