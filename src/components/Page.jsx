import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Left from "./Left";
import Main from "./Main";
import Right from "./Right";

const Page = () => {
  useEffect(() => {
    toast.success("Welcome");
  }, []);

  return (
    <>
      <div className="flex gap-5 justify-center ">
        <div>
          <Left />
        </div>
        <div>
          <Main />
        </div>
        <div>
          <Right />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Page;
