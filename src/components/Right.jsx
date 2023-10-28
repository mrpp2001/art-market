import React from "react";

import user1 from "../assets/user/Thomas-Edward.png";
import user2 from "../assets/user/Chris-Doe.png";
import user3 from "../assets/user/Emilie-Jones.png";
import user4 from "../assets/user/Jessica-Williams.png";

import art1 from "../assets/art/thomas-ed-art.png";
import art2 from "../assets/art/chris-art.png";
import art3 from "../assets/art/Emilie-art.png";
import art4 from "../assets/art/jessica-art.png";

const Artist = [
  {
    id: 1,
    userImg: user1,
    userName: "Thomas Edward",
    userId: "@thewildwithyou",
    art: art1,
  },
  {
    id: 2,
    userImg: user2,
    userName: "Chris Doe",
    userId: "@thewildwithyou",
    art: art2,
  },
  {
    id: 3,
    userImg: user3,
    userName: "Emilie Jones",
    userId: "@thewildwithyou",
    art: art3,
  },
  {
    id: 4,
    userImg: user4,
    userName: "Jessica Williams",
    userId: "@thewildwithyou",
    art: art4,
  },
  {
    id: 5,
    userImg: user1,
    userName: "Lara Leones",
    userId: "@thewallart",
    art: art1,
  },
  {
    id: 6,
    userImg: user2,
    userName: "Lara Leones",
    userId: "@thewallart",
    art: art2,
  },
  {
    id: 7,
    userImg: user3,
    userName: "Lara Leones",
    userId: "@thewallart",
    art: art3,
  },
  {
    id: 8,
    userImg: user4,
    userName: "Lara Leones",
    userId: "@thewallart",
    art: art4,
  },
];

const Right = () => {
  return (
    <>
      <button className="rounded-lg w-64 h-20 mb-5 my-2 bg-[#88C2BB] text-white hover:bg-teal-400 text-base ">
        Become a Seller
      </button>

      <div className="flex flex-col h-[81vh] text-sm">
        <div className="flex gap-4 text-base mb-5">
          <a
            className="text-gray-500 hover:text-black focus:text-black hover:font-bold focus:font-bold "
            href="#"
          >
            Artists
          </a>
          <a
            className="text-gray-500 hover:text-black focus:text-black hover:font-bold focus:font-bold "
            href="#"
          >
            Photographers
          </a>
        </div>

        <div className="flex flex-col gap-6 h-screen overflow-auto">
          {Artist.map((art) => (
            <div key={art.id} className="relative flex h-36 w-60">
              <img className="bg-cover rounded-xl brightness-50" src={art.art} alt="" />
              <a
                className="absolute flex gap-3 bottom-0 m-4 text-white"
                href="#"
              >
                <div className=" relative">
                  <span className="w-2.5 h-2.5 absolute rounded-full bg-green-300 border-2 border-white -top-0.5 -right-0.5"></span>
                  <img className="w-12 rounded-lg" src={art.userImg} alt="" />
                </div>
                <p className=" text-base">
                  {art.userName} <br />
                  <span className=" text-xs">{art.userId}</span>
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between my-2 text-gray-500 text-xs">
        <p>Privacy </p>
        <p>Terms of Service</p>
        <p>Cookie Notice</p>
      </div>
    </>
  );
};

export default Right;
