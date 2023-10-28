import React from "react";
import {
  BsSearch,
  BsThreeDotsVertical,
  BsHeart,
  BsHeartFill,
  BsChat,
} from "react-icons/bs";

import search from "../assets/search.svg";
import filters from "../assets/filters.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import share from "../assets/share.svg";
import unlike from "../assets/unlike.svg";

const Main = () => {
  return (
    <>
      <div className="flex flex-col my-2 gap-5  h-screen text-sm  w-auto">
        <a
          className="flex relative justify-center w-[39rem] items-center"
          href=""
        >
          <img className="absolute w-6 left-8 cursor-pointer" src={search} alt="" />
          <input
            className="w-full py-6 px-16 h-20 bg-white rounded-lg "
            type="search"
            placeholder="Search here..."
          />
          <button className="absolute flex text-mg gap-2 h-full right-8 justify-center items-center">
            <img className="m-1" src={filters} alt="" />
            Filters
          </button>
        </a>

        {/* add h-screen to parent element */}
        <div className="overflow-auto w-[39rem] no-scrollbar">
          <div className="flex flex-col gap-5 rounded-lg  ">
            {/* POST 1 */}
            <div className=" rounded-lg bg-white  h-[37.5rem]">
              <div className="flex flex-col gap-8 p-8 border-b-2 border-gray-200">
                <div className="flex justify-between">
                  <a className=" flex gap-3" href="#">
                    <img
                      className="w-12 rounded-lg"
                      src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=626&ext=jpg&ga=GA1.1.550779275.1698437704&semt=sph"
                      alt=""
                    />
                    <div>
                      <p className="text-xl font-bold">Thomas Edward</p>
                      <p className=" text-sm font-light">
                        @thewildwithyou
                      </p>
                    </div>
                  </a>
                  <BsThreeDotsVertical className="text-2xl m-3" />
                </div>

                <p className="text-sm">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                  <span className=" text-red-400">Read More</span>
                </p>

                <div className="relative">
                  <img className="text-2xl text-white  absolute right-5 top-5" src={unlike} alt="" />
                  <img
                    className="rounded-lg h-72 w-full"
                    src="https://img.freepik.com/free-photo/watercolor-painting-with-multi-colored-abstract-backgrounds-generative-ai_188544-7811.jpg?size=626&ext=jpg&ga=GA1.1.550779275.1698437704&semt=sph"
                    alt=""
                  />
                </div>
              </div>

              <div className="flex gap-5 p-8">
                <p className="flex gap-3 text-xl">
                  <img src={like} alt="" />
                  <span>9.8k</span>
                </p>
                <p className="flex gap-3 text-xl">
                <img src={comment} alt="" />
                  <span>8.6k</span>
                </p>
                <p className="flex gap-3 text-xl">
                <img src={share} alt="" />
                  <span>7.2k</span>
                </p>
              </div>
            </div>

           
            {/* POST 1 */}
            <div className=" rounded-lg bg-white">
              <div className="flex flex-col gap-8 p-8 border-b-2 border-gray-200">
                <div className="flex justify-between">
                  <a className=" flex gap-3" href="#">
                    <img
                      className="w-12 rounded-lg"
                      src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=626&ext=jpg&ga=GA1.1.550779275.1698437704&semt=sph"
                      alt=""
                    />
                    <div>
                      <p className="text-xl font-bold">Thomas Edward</p>
                      <p className=" text-sm font-light">
                        @thewildwithyou
                      </p>
                    </div>
                  </a>
                  <BsThreeDotsVertical className="text-2xl m-3" />
                </div>

                <p className="text-sm">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                  <span className=" text-red-400">Read More</span>
                </p>

                <div className="relative">
                  <img className="text-2xl text-white  absolute right-5 top-5" src={unlike} alt="" />
                  <img
                    className="rounded-lg h-72 w-full"
                    src="https://img.freepik.com/free-photo/watercolor-painting-with-multi-colored-abstract-backgrounds-generative-ai_188544-7811.jpg?size=626&ext=jpg&ga=GA1.1.550779275.1698437704&semt=sph"
                    alt=""
                  />
                </div>
              </div>

              <div className="flex gap-5 p-8">
                <p className="flex gap-3 text-xl">
                  <img src={like} alt="" />
                  <span>9.8k</span>
                </p>
                <p className="flex gap-3 text-xl">
                <img src={comment} alt="" />
                  <span>8.6k</span>
                </p>
                <p className="flex gap-3 text-xl">
                <img src={share} alt="" />
                  <span>7.2k</span>
                </p>
              </div>
            </div>

           
          </div>

          {/* /////////////////////////  scrollbar //////////////////////////// */}

          <div className="flex gap-4 mt-5 overflow-x-auto no-scrollbar">


            <div className="flex flex-col gap-3  h-full rounded-lg">
              <img
                className="rounded-lg h-44"
                src="https://img.freepik.com/free-photo/watercolor-painting-with-multi-colored-abstract-backgrounds-generative-ai_188544-7811.jpg?size=626&ext=jpg&ga=GA1.1.550779275.1698437704&semt=sph"
                alt=""
              />
              <p className="text-xs font-bold">
                Modern Wall Decor Framed Painting
              </p>
              <div className="flex gap-16">
                <p className="text-2xl font-bold">
                  $<span>199.99</span>
                </p>
                <p className="my-2 text-sm">⭐⭐⭐⭐⭐</p>
              </div>
            </div>




            <div className="flex flex-col gap-3  h-full rounded-lg">
              <img
                className="rounded-lg h-44"
                src="https://img.freepik.com/free-photo/watercolor-painting-with-multi-colored-abstract-backgrounds-generative-ai_188544-7811.jpg?size=626&ext=jpg&ga=GA1.1.550779275.1698437704&semt=sph"
                alt=""
              />
              <p className="text-xs font-bold">
                Modern Wall Decor Framed Painting
              </p>
              <div className="flex gap-16">
                <p className="text-2xl font-bold">
                  $<span>199.99</span>
                </p>
                <p className="my-2 text-sm">⭐⭐⭐⭐⭐</p>
              </div>
            </div>




            <div className="flex flex-col gap-3  h-full rounded-lg">
              <img
                className="rounded-lg h-44"
                src="https://img.freepik.com/free-photo/watercolor-painting-with-multi-colored-abstract-backgrounds-generative-ai_188544-7811.jpg?size=626&ext=jpg&ga=GA1.1.550779275.1698437704&semt=sph"
                alt=""
              />
              <p className="text-xs font-bold">
                Modern Wall Decor Framed Painting
              </p>
              <div className="flex gap-16">
                <p className="text-2xl font-bold">
                  $<span>199.99</span>
                </p>
                <p className="my-2 text-sm">⭐⭐⭐⭐⭐</p>
              </div>
            </div>




            <div className="flex flex-col gap-3  h-full rounded-lg">
              <img
                className="rounded-lg h-44"
                src="https://img.freepik.com/free-photo/watercolor-painting-with-multi-colored-abstract-backgrounds-generative-ai_188544-7811.jpg?size=626&ext=jpg&ga=GA1.1.550779275.1698437704&semt=sph"
                alt=""
              />
              <p className="text-xs font-bold">
                Modern Wall Decor Framed Painting
              </p>
              <div className="flex gap-16">
                <p className="text-2xl font-bold">
                  $<span>199.99</span>
                </p>
                <p className="my-2 text-sm">⭐⭐⭐⭐⭐</p>
              </div>
            </div>




            <div className="flex flex-col gap-3  h-full rounded-lg">
              <img
                className="rounded-lg h-44"
                src="https://img.freepik.com/free-photo/watercolor-painting-with-multi-colored-abstract-backgrounds-generative-ai_188544-7811.jpg?size=626&ext=jpg&ga=GA1.1.550779275.1698437704&semt=sph"
                alt=""
              />
              <p className="text-xs font-bold">
                Modern Wall Decor Framed Painting
              </p>
              <div className="flex gap-16">
                <p className="text-2xl font-bold">
                  $<span>199.99</span>
                </p>
                <p className="my-2 text-sm">⭐⭐⭐⭐⭐</p>
              </div>
            </div>




            <div className="flex flex-col gap-3  h-full rounded-lg">
              <img
                className="rounded-lg h-44"
                src="https://img.freepik.com/free-photo/watercolor-painting-with-multi-colored-abstract-backgrounds-generative-ai_188544-7811.jpg?size=626&ext=jpg&ga=GA1.1.550779275.1698437704&semt=sph"
                alt=""
              />
              <p className="text-xs font-bold">
                Modern Wall Decor Framed Painting
              </p>
              <div className="flex gap-16">
                <p className="text-2xl font-bold">
                  $<span>199.99</span>
                </p>
                <p className="my-2 text-sm">⭐⭐⭐⭐⭐</p>
              </div>
            </div>





          </div>




        </div>
      </div>
    </>
  );
};

export default Main;
