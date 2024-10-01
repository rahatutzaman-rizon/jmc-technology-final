import React from "react";
import { poppins } from "@/app/layout";
import ApplyJobModal from "./ApplyJobModal";

const job = {
  _id: "2",
  title: "Junior Education Consultant",
  job_thumbnail:
    "https://img.freepik.com/free-photo/hiring-concept-with-empty-chair_23-2149519862.jpg",
  vacancy_count: 4,
  job_context:
    "Looking for Associate Educational Consultants with a minimum of one year of experience. Responsibilities include guiding students through study abroad applications and writing SOPs/Cover Letters.",
  job_responsibilities: [
    "Conducting one-on-one consultations with students.",
    "Writing SOPs and Cover Letters.",
    "Attending workshops and training.",
  ],
  employment_status: "Full Time",
  educational_requirements: "Bachelor’s Degree in any discipline.",
  experience_requirements: "0 to 1 year(s).",
  salary: {
    range: "20,000 - 25,000 BDT",
    review: "Negotiable",
  },
  application_deadline: "2024-12-31",
};

const JobDetailsPageComp = () => {
  return (
    <>
      <section className={`${poppins.className} `}>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden container  max-w-7xl mx-auto ">
          <div className="p-6">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              {job?.title}
            </h2>
            <p className="font-semibold mb-4">Vacancy: {job?.vacancy_count}</p>
            <p className="text-gray-700 mb-4 text-justify">
              <strong>Job Context: </strong>
              {job?.job_context ? job?.job_context : "N/A"}
            </p>
            <div className="mb-4 list-disc list-inside">
              <strong>Job Responsibilities: </strong>
              {job?.job_responsibilities ? (
                job?.job_responsibilities.map((responsibility, index) => (
                  <li className="ms-4 mt-2" key={index}>
                    {responsibility}
                  </li>
                ))
              ) : (
                <p>N/A</p>
              )}
            </div>
            <p className="mb-4 ">
              <strong>Employment Status:</strong>{" "}
              {job?.employment_status || "N/A"}
            </p>
            <p className="mb-4">
              <strong>Education:</strong>{" "}
              {job?.educational_requirements || "N/A"}
            </p>
            <p className="mb-4">
              <strong>Experience:</strong>{" "}
              {job?.experience_requirements || "N/A"}
            </p>
            <p className="mb-4 ">
              <strong>Application Deadline:</strong>{" "}
              {job?.application_deadline || "N/A"}
            </p>
            <p className="mb-4">
              <strong>Age: </strong>
              {job?.age_range ? job?.age_range : "18+"}
            </p>
            <p className="mb-4">
              <strong>Gender: </strong>
              {job?.gender ? job?.gender : "Both"}
            </p>
            <p className="mb-4">
              <strong>Workplace: </strong>
              {job?.workplace ? job?.workplace : "On Site"}
            </p>
            <p className="mb-4">
              <strong>Location: </strong>
              {job?.location ? job?.location : "N/A"}
            </p>
            <p className="mb-4">
              <strong>Salary: </strong>
              {job?.salary ? (
                <>
                  {job?.salary.range}{" "}
                  {job?.salary.review ? (
                    <span className="text-gray-600">
                      (Negotiable {job?.salary.review})
                    </span>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                "N/A"
              )}
            </p>
            <p className="mb-4">
              <strong>Festival Bonus: </strong>
              {job?.benefits ? job?.benefits.festival_bonus : "Negotiable"}
            </p>
            <p className="mb-4">
              <strong>Compensation: </strong>
              {job?.benefits ? (
                <ul className="list-disc list-inside">
                  {job?.benefits.compensation.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                "Negotiable"
              )}
            </p>
            <div></div>
            <div className=" text-center my-4">
              <p className="py-4">
                <span className="font-bold ">Read Before Apply</span>
              </p>
              <p className="text-justify">
                Abroad Inquiry office time is from 10:30 am to 7 pm. Moreover,
                we would like to hire our colleagues for at least two years.
                Therefore, candidates must consider having sufficient time to
                work in a competitive market before applying. Moreover, if you
                have sufficient existing work that could be visible online, you
                may not require to show your technical skill. Finally, we want
                our new colleagues as soon as possible. Therefore, keep on your
                eyes on your email regularly. Thank you.
              </p>
              <ApplyJobModal job={job} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobDetailsPageComp;
