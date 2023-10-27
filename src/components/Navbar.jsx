import React from "react";
import { BsSearch } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";

const Navbar = () => {
  return (
    <>
      <div className="grid grid-flow-col text-sm gap-10 mx-40 my-8 ">
        <div className="flex justify-start py-5 pl-8 bg-white rounded-lg">
          <h1 className="text-3xl">LOGO</h1>
        </div>
        <div className="col-span-3 ">
          <a className="flex relative justify-center h-full items-center" href="">
            <BsSearch className="absolute text-lg left-6 cursor-pointer" />
            <input
              className="w-full py-6 px-14 h-full bg-white rounded-lg "
              type="search"
              placeholder="Search here..."
            />
            <button className="absolute flex text-mg gap-1 h-full right-7 justify-center items-center">
              <LuSettings2 className="m-1" />
              Filters
            </button>
          </a>
        </div>
        <button className="rounded-lg bg-[#88C2BB] text-white hover:bg-teal-400 font-semibold">
          Become a Seller
        </button>
      </div>
    </>
  );
};

export default Navbar;
