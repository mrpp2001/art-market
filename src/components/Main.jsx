import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import search from "../assets/search.svg";
import filters from "../assets/filters.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import share from "../assets/share.svg";
import unlike from "../assets/unlike.svg";

import art1 from "../assets/art/lara-art.png";
import art2 from "../assets/art/thomas-art.png";

import art3 from "../assets/art/thomas-ed-art.png";
import art4 from "../assets/art/chris-art.png";
import art5 from "../assets/art/Emilie-art.png";
import art6 from "../assets/art/jessica-art.png";

import user1 from "../assets/user/Lara-Leones.png";
import user2 from "../assets/user/Thomas-J.png";

// Art Post
const Posts = [
  {
    id: 1,
    userImg: user1,
    userName: "Lara Leones",
    userId: "@thewallart",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    art: art1,
    likes: 9.8,
    comments: 8.6,
    share: 7.2,
  },
  {
    id: 2,
    userImg: user2,
    userName: "Thomas J.",
    userId: "@thecustomcreater",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    art: art2,
    likes: 9.8,
    comments: 8.6,
    share: 7.2,
  },
];

// Recommended Art
const RecArtist = [
  {
    id: 1,
    art: art6,
    title: "Modern Wall Decor Framed Painting",
    cost: 199.99,
    star: "⭐⭐⭐⭐⭐",
  },

  {
    id: 2,
    art: art5,
    title: "Modern Wall Decor Framed Painting",
    cost: 199.99,
    star: "⭐⭐⭐⭐⭐",
  },

  {
    id: 3,
    art: art3,
    title: "Modern Wall Decor Framed Painting",
    cost: 199.99,
    star: "⭐⭐⭐⭐⭐",
  },

  {
    id: 4,
    art: art4,
    title: "Modern Wall Decor Framed Painting",
    cost: 199.99,
    star: "⭐⭐⭐⭐⭐",
  },

  {
    id: 5,
    art: art5,
    title: "Modern Wall Decor Framed Painting",
    cost: 199.99,
    star: "⭐⭐⭐⭐⭐",
  },

  {
    id: 6,
    art: art6,
    title: "Modern Wall Decor Framed Painting",
    cost: 199.99,
    star: "⭐⭐⭐⭐⭐",
  },
];

const Main = () => {
  return (
    <>
      <div className="flex flex-col my-2 gap-5  h-screen text-sm  w-auto">
        <a
          className="flex relative justify-center w-[39rem] items-center"
          href="#"
        >
          <img
            className="absolute w-6 left-8 cursor-pointer"
            src={search}
            alt="search icon"
          />
          <input
            className="w-full py-6 px-16 h-20 bg-white rounded-lg "
            type="search"
            placeholder="Search here..."
          />
          <button className="absolute flex text-mg gap-2 h-full right-8 justify-center items-center">
            <img className="m-1" src={filters} alt="filter button" />
            Filters
          </button>
        </a>

        <div className="overflow-auto w-[39rem] no-scrollbar">
          <div className="flex flex-col gap-5 rounded-lg  ">
            {Posts.map((post) => (
              <div key={post.id} className=" rounded-lg bg-white  ">
                <div className="flex flex-col gap-4 p-6 border-b-2 border-gray-200">
                  <div className="flex justify-between">
                    <a className=" flex gap-3" href="#">
                      <img
                        className="w-12 rounded-lg"
                        src={post.userImg}
                        alt="user img"
                      />
                      <div>
                        <p className="text-xl font-bold">{post.userName}</p>
                        <p className=" text-sm font-light">{post.userId}</p>
                      </div>
                    </a>
                    <BsThreeDotsVertical className="text-2xl m-3" />
                  </div>

                  <p className="text-sm">
                    {post.desc}
                    <span className=" text-red-400"> Read More</span>
                  </p>

                  <div className="relative">
                    <img
                      className="text-2xl text-white  absolute right-5 top-5"
                      src={unlike}
                      alt="like"
                    />
                    <img
                      className="rounded-lg h-72 w-full"
                      src={post.art}
                      alt="picture"
                    />
                  </div>
                </div>

                <div className="flex gap-5 px-8 py-5">
                  <p className="flex gap-3 text-xl">
                    <img src={like} alt="likes" />
                    <span>{post.likes} k</span>
                  </p>
                  <p className="flex gap-3 text-xl">
                    <img src={comment} alt="comments" />
                    <span>{post.comments} k</span>
                  </p>
                  <p className="flex gap-3 text-xl">
                    <img src={share} alt="share" />
                    <span>{post.share} k</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-nowrap gap-4 mt-5 overflow-x-auto no-scrollbar">
            {RecArtist.map((rec) => (
              <div
                key={rec.id}
                className="flex flex-col ease-in-out gap-3 h-full rounded-lg"
              >
                <img className="rounded-lg h-44" src={rec.art} alt="art" />
                <p className="text-xs font-bold">{rec.title}</p>
                <div className="flex gap-16">
                  <p className="text-2xl font-bold">
                    $<span>{rec.cost}</span>
                  </p>
                  <p className="my-2 text-sm">{rec.star}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
