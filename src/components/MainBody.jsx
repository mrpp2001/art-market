import React from "react";
import Left from "./Left";
import Main from "./Main";
import Right from "./Right";

const MainBody = () => {
  return (
    <>
      <div className="flex gap-8 justify-center ">
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
    </>
  );
};

export default MainBody;
