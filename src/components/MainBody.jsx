import React from "react";
import Left from "./Left";
import Main from "./Main";
import Right from "./Right";

const MainBody = () => {
  return (
    <>
      <div className="grid grid-cols-8 gap-10 mx-40 my-8 ">
        <div className=" col-span-2" >
          <Left />
        </div>
        <div className=" col-span-4">
          <Main />
        </div>
        <div className=" col-span-2" >
          <Right />
        </div>
      </div>
    </>
  );
};

export default MainBody;
