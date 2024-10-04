"use client";
import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import JobApplyForm from "./JobApplyForm";

const ApplyJobModal = ({ job }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <button
        onClick={onOpenModal}
        className="shadow-2xl mt-6 bg-slate-900 font-bold text-white py-2 px-4 rounded"
      >
        Apply Now
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="">
          <JobApplyForm job={job} />
        </div>
      </Modal>
    </>
  );
};

export default ApplyJobModal;
