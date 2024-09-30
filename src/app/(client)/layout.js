import React from "react";
import Footer from "../../components/Shared/Footer/footer";

const Clientlayout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Clientlayout;
