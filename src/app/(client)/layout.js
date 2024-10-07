import React from "react";

import Header from "../components/shared/header";
import Footer from "../components/shared/footer";

const Clientlayout = ({ children }) => {
  return (
    <>
    <div className="mt-12">
   <Header></Header>

    </div>
   
      {children}
     <Footer></Footer>
    </>
  );
};

export default Clientlayout;
