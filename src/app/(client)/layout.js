import React from "react";
import Footer from "../../components/Shared/Footer/footer";
import Header from "../components/shared/header";

const Clientlayout = ({ children }) => {
  return (
    <>
    <Header></Header>
      {children}
       
    </>
  );
};

export default Clientlayout;
