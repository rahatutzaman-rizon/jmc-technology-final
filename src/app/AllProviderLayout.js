"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const queryClient = new QueryClient();
const AllProviderLayout = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <main>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </main>
  );
};

export default AllProviderLayout;
