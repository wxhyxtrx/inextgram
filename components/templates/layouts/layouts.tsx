import Sidebar from "@/components/organisms/sidebar";
import React from "react";

export default function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <div className=" relative h-screen flex flex-col-reverse sm:flex-row md:overflow-hidden">
      <div className=" fixed bottom-0 w-full sm:relative sm:w-20 lg:w-64 border-t sm:border-t-0 sm:border-r">
        <Sidebar />
      </div>
      <div className=" flex-grow mt-12 md:mt-0 flex-1 w-full md:overflow-y-auto sm:p-6 md:p-12 max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
}
