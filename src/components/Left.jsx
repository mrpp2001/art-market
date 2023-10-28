import React from 'react'
import {BiHome,BiBell,BiUser,BiLogOutCircle} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import {BsWallet2} from 'react-icons/bs'
import {MdOutlineStars} from 'react-icons/md'
import {LuSettings} from 'react-icons/lu'

const Left = () => {
  return (
    <>
    
    <div className=" flex flex-col h-[44rem] w-64 text-sm gap-7 ">
        <div className="flex justify-start h-20 py-6 px-8 bg-white rounded-lg">
          <h1 className="text-3xl">LOGO</h1>
        </div>
        <div className="flex flex-col gap-5 py-8 h-screen rounded-lg bg-white relative ">
        <a className='flex gap-3 text-base py-1.5 px-8 hover:border-l-4 focus:border-l-4 hover:border-green-200 focus:border-green-200 text-gray-400 hover:text-black focus:text-black hover:font-bold focus:font-bold' href="#"><BiHome className='text-xl my-0.5'/> Home</a>
        <a className='flex gap-3 text-base py-1.5 px-8 hover:border-l-4 focus:border-l-4 hover:border-green-200 focus:border-green-200 text-gray-400 hover:text-black focus:text-black hover:font-bold focus:font-bold' href="#"><BiBell className='text-xl my-0.5'/> Notifications</a>
        <a className='flex gap-3 text-base py-1.5 px-8 hover:border-l-4 focus:border-l-4 hover:border-green-200 focus:border-green-200 text-gray-400 hover:text-black focus:text-black hover:font-bold focus:font-bold' href="#"><AiOutlineHeart className='text-xl my-0.5'/> Shop</a>
        <a className='flex gap-3 text-base py-1.5 px-8 hover:border-l-4 focus:border-l-4 hover:border-green-200 focus:border-green-200 text-gray-400 hover:text-black focus:text-black hover:font-bold focus:font-bold' href="#"><HiOutlineMail className='text-xl my-0.5'/> Conversation</a>
        <a className='flex gap-3 text-base py-1.5 px-8 hover:border-l-4 focus:border-l-4 hover:border-green-200 focus:border-green-200 text-gray-400 hover:text-black focus:text-black hover:font-bold focus:font-bold' href="#"><BsWallet2 className='text-xl my-0.5'/> Wallet</a>
        <a className='flex gap-3 text-base py-1.5 px-8 hover:border-l-4 focus:border-l-4 hover:border-green-200 focus:border-green-200 text-gray-400 hover:text-black focus:text-black hover:font-bold focus:font-bold' href="#"><MdOutlineStars className='text-xl my-0.5'/> Subscription</a>
        <a className='flex gap-3 text-base py-1.5 px-8 hover:border-l-4 focus:border-l-4 hover:border-green-200 focus:border-green-200 text-gray-400 hover:text-black focus:text-black hover:font-bold focus:font-bold' href="#"><BiUser className='text-xl my-0.5'/> My Profile</a>
        <a className='flex gap-3 text-base py-1.5 px-8 hover:border-l-4 focus:border-l-4 hover:border-green-200 focus:border-green-200 text-gray-400 hover:text-black focus:text-black hover:font-bold focus:font-bold' href="#"><LuSettings className='text-xl my-0.5'/> Settings</a>
        <button className='flex gap-3 text-base py-1.5 px-8 absolute bottom-5 text-green-300 focus:text-green-500 hover:border-l-4 focus:border-l-4 hover:border-green-200 focus:border-green-200 hover:font-bold focus:font-bold'><BiLogOutCircle className='text-xl my-0.5'/> log out</button>
        </div>
      </div>
    
    </>
  )
}

export default Left