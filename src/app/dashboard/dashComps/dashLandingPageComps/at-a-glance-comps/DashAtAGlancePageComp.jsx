"use client";
import React, { useState } from "react";
import GlancesTable from "./GlancesTable";
import GlancesForm from "./GlancesForm";
import GlancesUpdateForm from "./GlancesUpdateForm";
import ViewGlances from "./ViewGlances";

const DashAtAGlancePageComp = () => {
  const [open, setOpen] = useState("list");

  const handleToggle = (type) => setOpen(open === type ? null : type);

  return (
    <section className="flex flex-col space-y-4">
      {open === "list" && <GlancesTable handleToggle={handleToggle} />}
      {open === "add" && <GlancesForm handleToggle={handleToggle} />}
      {open === "edit" && <GlancesUpdateForm handleToggle={handleToggle} />}
      {open === "view" && <ViewGlances handleToggle={handleToggle} />}
    </section>
  );
};

export default DashAtAGlancePageComp;
