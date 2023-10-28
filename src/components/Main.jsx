import React from "react";
import {
  BsSearch,
  BsThreeDotsVertical,
  BsHeart,
  BsHeartFill,
  BsChat,
} from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { PiShareFat } from "react-icons/pi";

const Main = () => {
  return (
    <>
      <div className="flex flex-col  text-sm gap-7 w-auto">
        <a className="flex relative justify-center h-20 items-center" href="">
          <BsSearch className="absolute text-lg left-10 cursor-pointer" />
          <input
            className="w-full py-6 px-20 h-full bg-white rounded-lg "
            type="search"
            placeholder="Search here..."
          />
          <button className="absolute flex text-mg gap-1 h-full right-7 justify-center items-center">
            <LuSettings2 className="m-1" />
            Filters
          </button>
        </a>


{/* add h-screen to parent element */}
        <div className="overflow-auto h-screen no-scrollbar">

        <div className="flex flex-col gap-5 rounded-lg  ">
          {/* POST 1 */}
          <div className="rounded-lg bg-white">
            <div className="flex flex-col gap-6 p-7 border-b-2 border-gray-200">
              <div className="flex justify-between">
                <a className=" flex gap-3" href="#">
                  <img
                    className="w-12 rounded-lg"
                    src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=626&ext=jpg&ga=GA1.1.550779275.1698437704&semt=sph"
                    alt=""
                  />
                  <p className="m-1 font-bold">
                    Thomas Edward <br />
                    <span className=" text-xs font-light">@thewildwithyou</span>
                  </p>
                </a>
                <BsThreeDotsVertical className="text-2xl m-3" />
              </div>

              <p className="font-bold">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{" "}
                <span className=" text-red-400">Read More</span>
              </p>

              <div className="relative">
                <BsHeart className="text-2xl text-white  absolute right-5 top-5" />
                {/* <BsHeartFill className="text-3xl text-red-500  absolute right-5 top-5"/> */}
                <img
                  className="rounded-lg h-80 w-full"
                  src="https://img.freepik.com/free-photo/watercolor-painting-with-multi-colored-abstract-backgrounds-generative-ai_188544-7811.jpg?size=626&ext=jpg&ga=GA1.1.550779275.1698437704&semt=sph"
                  alt=""
                />
              </div>
            </div>

            <div className="flex gap-5 p-7">
              <p className="flex gap-3 text-lg">
                <BsHeart className="my-1" />
                <span>9.8k</span>
              </p>
              <p className="flex gap-3 text-lg">
                <BsChat className="my-1" />
                <span>8.6k</span>
              </p>
              <p className="flex gap-3 text-lg">
                <PiShareFat className="my-1" />
                <span>7.2k</span>
              </p>
            </div>
          </div>

          {/* POST 2 */}
          <div className="rounded-lg bg-white">
            <div className="flex flex-col gap-6 p-7 border-b-2 border-gray-200">
              <div className="flex justify-between">
                <a className=" flex gap-3" href="#">
                  <img
                    className="w-12 rounded-lg"
                    src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=626&ext=jpg&ga=GA1.1.550779275.1698437704&semt=sph"
                    alt=""
                  />
                  <p className="m-1 font-bold">
                    Thomas Edward <br />
                    <span className=" text-xs font-light">@thewildwithyou</span>
                  </p>
                </a>
                <BsThreeDotsVertical className="text-2xl m-3" />
              </div>

              <p className="font-bold">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{" "}
                <span className=" text-red-400">Read More</span>
              </p>

              <div className="relative">
                <BsHeart className="text-2xl text-white  absolute right-5 top-5" />
                {/* <BsHeartFill className="text-3xl text-red-500  absolute right-5 top-5"/> */}
                <img
                  className="rounded-lg h-80 w-full"
                  src="https://img.freepik.com/free-photo/watercolor-painting-with-multi-colored-abstract-backgrounds-generative-ai_188544-7811.jpg?size=626&ext=jpg&ga=GA1.1.550779275.1698437704&semt=sph"
                  alt=""
                />
              </div>
            </div>

            <div className="flex gap-5 p-7">
              <p className="flex gap-3 text-lg">
                <BsHeart className="my-1" />
                <span>9.8k</span>
              </p>
              <p className="flex gap-3 text-lg">
                <BsChat className="my-1" />
                <span>8.6k</span>
              </p>
              <p className="flex gap-3 text-lg">
                <PiShareFat className="my-1" />
                <span>7.2k</span>
              </p>
            </div>
          </div>
        </div>

{/* /////////////////////////  scrollbar //////////////////////////// */}

        <div className="flex gap-5 h-fit mt-5 overflow-x-auto">

            
          <div className="flex flex-col gap-3 w-72 h-full rounded-lg">
            <img
              className="rounded-lg "
              src="https://img.freepik.com/free-photo/watercolor-painting-with-multi-colored-abstract-backgrounds-generative-ai_188544-7811.jpg?size=626&ext=jpg&ga=GA1.1.550779275.1698437704&semt=sph"
              alt=""
            />
            <p className="text-xs font-bold">
              Modern Wall Decor Framed Painting
            </p>
            <div className="flex justify-between">
              <p className="text-xl font-bold">
                $<span>199.99</span>
              </p>
              <p className="m-1">⭐⭐⭐⭐⭐</p>
            </div>
          </div>

          
          

            
          <div className="flex flex-col gap-3 w-72 h-full rounded-lg">
            <img
              className="rounded-lg "
              src="https://img.freepik.com/free-photo/watercolor-painting-with-multi-colored-abstract-backgrounds-generative-ai_188544-7811.jpg?size=626&ext=jpg&ga=GA1.1.550779275.1698437704&semt=sph"
              alt=""
            />
            <p className="text-xs font-bold">
              Modern Wall Decor Framed Painting
            </p>
            <div className="flex justify-between">
              <p className="text-xl font-bold">
                $<span>199.99</span>
              </p>
              <p className="m-1">⭐⭐⭐⭐⭐</p>
            </div>
          </div>

          
          

            
          <div className="flex flex-col gap-3 w-72 h-full rounded-lg">
            <img
              className="rounded-lg "
              src="https://img.freepik.com/free-photo/watercolor-painting-with-multi-colored-abstract-backgrounds-generative-ai_188544-7811.jpg?size=626&ext=jpg&ga=GA1.1.550779275.1698437704&semt=sph"
              alt=""
            />
            <p className="text-xs font-bold">
              Modern Wall Decor Framed Painting
            </p>
            <div className="flex justify-between">
              <p className="text-xl font-bold">
                $<span>199.99</span>
              </p>
              <p className="m-1">⭐⭐⭐⭐⭐</p>
            </div>
          </div>

          
          

            
          <div className="flex flex-col gap-3 w-72 h-full rounded-lg">
            <img
              className="rounded-lg "
              src="https://img.freepik.com/free-photo/watercolor-painting-with-multi-colored-abstract-backgrounds-generative-ai_188544-7811.jpg?size=626&ext=jpg&ga=GA1.1.550779275.1698437704&semt=sph"
              alt=""
            />
            <p className="text-xs font-bold">
              Modern Wall Decor Framed Painting
            </p>
            <div className="flex justify-between">
              <p className="text-xl font-bold">
                $<span>199.99</span>
              </p>
              <p className="m-1">⭐⭐⭐⭐⭐</p>
            </div>
          </div>

          
          

            
          <div className="flex flex-col gap-3 w-72 h-full rounded-lg">
            <img
              className="rounded-lg "
              src="https://img.freepik.com/free-photo/watercolor-painting-with-multi-colored-abstract-backgrounds-generative-ai_188544-7811.jpg?size=626&ext=jpg&ga=GA1.1.550779275.1698437704&semt=sph"
              alt=""
            />
            <p className="text-xs font-bold">
              Modern Wall Decor Framed Painting
            </p>
            <div className="flex justify-between">
              <p className="text-xl font-bold">
                $<span>199.99</span>
              </p>
              <p className="m-1">⭐⭐⭐⭐⭐</p>
            </div>
          </div>

          
        </div>
          
        </div>
      </div>
    </>
  );
};

export default Main;
