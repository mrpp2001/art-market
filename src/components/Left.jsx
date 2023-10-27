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
    
    <div className=" flex flex-col h-screen text-sm gap-10 ">
        <div className="flex justify-start h-20 py-6 px-8 bg-white rounded-lg">
          <h1 className="text-3xl">LOGO</h1>
        </div>
        <div className="flex flex-col gap-5 py-8 h-screen rounded-lg bg-white relative ">
        <a className='flex gap-3 text-xl py-1.5 px-8 hover:border-l-4 focus:border-l-4 hover:border-green-200 focus:border-green-200 text-gray-400 hover:text-black focus:text-black hover:font-bold focus:font-bold' href="#"><BiHome className='text-2xl'/> Home</a>
        <a className='flex gap-3 text-xl py-1.5 px-8 hover:border-l-4 focus:border-l-4 hover:border-green-200 focus:border-green-200 text-gray-400 hover:text-black focus:text-black hover:font-bold focus:font-bold' href="#"><BiBell className='text-2xl'/> Notifications</a>
        <a className='flex gap-3 text-xl py-1.5 px-8 hover:border-l-4 focus:border-l-4 hover:border-green-200 focus:border-green-200 text-gray-400 hover:text-black focus:text-black hover:font-bold focus:font-bold' href="#"><AiOutlineHeart className='text-2xl'/> Shop</a>
        <a className='flex gap-3 text-xl py-1.5 px-8 hover:border-l-4 focus:border-l-4 hover:border-green-200 focus:border-green-200 text-gray-400 hover:text-black focus:text-black hover:font-bold focus:font-bold' href="#"><HiOutlineMail className='text-2xl'/> Conversation</a>
        <a className='flex gap-3 text-xl py-1.5 px-8 hover:border-l-4 focus:border-l-4 hover:border-green-200 focus:border-green-200 text-gray-400 hover:text-black focus:text-black hover:font-bold focus:font-bold' href="#"><BsWallet2 className='text-2xl'/> Wallet</a>
        <a className='flex gap-3 text-xl py-1.5 px-8 hover:border-l-4 focus:border-l-4 hover:border-green-200 focus:border-green-200 text-gray-400 hover:text-black focus:text-black hover:font-bold focus:font-bold' href="#"><MdOutlineStars className='text-2xl'/> Subscription</a>
        <a className='flex gap-3 text-xl py-1.5 px-8 hover:border-l-4 focus:border-l-4 hover:border-green-200 focus:border-green-200 text-gray-400 hover:text-black focus:text-black hover:font-bold focus:font-bold' href="#"><BiUser className='text-2xl'/> My Profile</a>
        <a className='flex gap-3 text-xl py-1.5 px-8 hover:border-l-4 focus:border-l-4 hover:border-green-200 focus:border-green-200 text-gray-400 hover:text-black focus:text-black hover:font-bold focus:font-bold' href="#"><LuSettings className='text-2xl'/> Settings</a>
        <button className='flex gap-3 text-xl py-1.5 px-8 absolute bottom-5 text-green-300 focus:text-green-500 hover:border-l-4 focus:border-l-4 hover:border-green-200 focus:border-green-200 hover:font-bold focus:font-bold'><BiLogOutCircle className='text-2xl'/> log out</button>
        </div>
      </div>
    
    </>
  )
}

export default Left