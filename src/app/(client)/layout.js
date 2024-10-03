import React from "react";

import Header from "../components/shared/header";
import Footer from "../components/shared/footer";

const Clientlayout = ({ children }) => {
  return (
    <>
    <Header></Header>
      {children}
     <Footer></Footer>
    </>
  );
};

export default Clientlayout;
