import React from "react";
import LoginForm from "./LoginForm";
import Image from "next/image";
import jmc_tech_logo from "./../../assets/images/jmc-technology-logo.png";

const LoginPageComps = () => {
  return (
    <section className="min-h-screen flex justify-center items-center flex-col">
      <div className="flex justify-center mx-auto">
        <Image
          className="w-auto h-20 "
          src={jmc_tech_logo}
          alt=""
          width={150}
          height={50}
        />
      </div>
      <div className="w-full max-w-md ">
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPageComps;
