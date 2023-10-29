
import favorite from "../assets/favorite.svg";
import heart from "../assets/heart.svg";
import home from "../assets/home.svg";
import logout from "../assets/logout.svg";
import message from "../assets/message.svg";
import wallet from "../assets/wallet.svg";
import notification from "../assets/notification.svg";
import profile from "../assets/profile.svg";
import setting from "../assets/setting.svg";

const Left = () => {
  return (
    <>
      <div className=" flex flex-col h-[44rem] my-2 gap-5 w-64 text-sm ">
        <div className="flex justify-start h-20 py-6 px-8 bg-white rounded-lg">
          <h1 className="text-3xl font-Cinzel font-semibold">LOGO</h1>
        </div>
        <div className="flex flex-col gap-5 py-8 h-screen rounded-lg bg-white relative ">
          <a
            className="flex gap-3 text-base py-1.5 px-8 hover:border-l-4 focus:border-l-4 hover:border-green-200 focus:border-green-200 text-gray-400 hover:text-black focus:text-black hover:font-bold focus:font-bold"
            href="#"
          >
            <img src={home} className="text-xl my-0.5" alt="" />
            Home
          </a>
          <a
            className="flex gap-3 text-base py-1.5 px-8 hover:border-l-4 focus:border-l-4 hover:border-green-200 focus:border-green-200 text-gray-400 hover:text-black focus:text-black hover:font-bold focus:font-bold"
            href="#"
          >
            <img src={notification} className="text-xl my-0.5" alt="" />{" "}
            Notifications
          </a>
          <a
            className="flex gap-3 text-base py-1.5 px-8 hover:border-l-4 focus:border-l-4 hover:border-green-200 focus:border-green-200 text-gray-400 hover:text-black focus:text-black hover:font-bold focus:font-bold"
            href="#"
          >
            <img src={heart} className="text-xl my-0.5" alt="" /> Shop
          </a>
          <a
            className="flex gap-3 text-base py-1.5 px-8 hover:border-l-4 focus:border-l-4 hover:border-green-200 focus:border-green-200 text-gray-400 hover:text-black focus:text-black hover:font-bold focus:font-bold"
            href="#"
          >
            <img src={message} className="text-xl my-0.5" alt="" />
            Conversation
          </a>
          <a
            className="flex gap-3 text-base py-1.5 px-8 hover:border-l-4 focus:border-l-4 hover:border-green-200 focus:border-green-200 text-gray-400 hover:text-black focus:text-black hover:font-bold focus:font-bold"
            href="#"
          >
            <img src={wallet} className="text-xl my-0.5" alt="" /> Wallet
          </a>
          <a
            className="flex gap-3 text-base py-1.5 px-8 hover:border-l-4 focus:border-l-4 hover:border-green-200 focus:border-green-200 text-gray-400 hover:text-black focus:text-black hover:font-bold focus:font-bold"
            href="#"
          >
            <img src={favorite} className="text-xl my-0.5" alt="" />{" "}
            Subscription
          </a>
          <a
            className="flex gap-3 text-base py-1.5 px-8 hover:border-l-4 focus:border-l-4 hover:border-green-200 focus:border-green-200 text-gray-400 hover:text-black focus:text-black hover:font-bold focus:font-bold"
            href="#"
          >
            <img src={profile} className="text-xl my-0.5" alt="" /> My Profile
          </a>
          <a
            className="flex gap-3 text-base py-1.5 px-8 hover:border-l-4 focus:border-l-4 hover:border-green-200 focus:border-green-200 text-gray-400 hover:text-black focus:text-black hover:font-bold focus:font-bold"
            href="#"
          >
            <img src={setting} className="text-xl my-0.5" alt="" /> Settings
          </a>
          <button className="flex gap-3 text-base py-1.5 px-8 absolute bottom-5 text-green-300 focus:text-green-500 hover:border-l-4 focus:border-l-4 hover:border-green-200 focus:border-green-200 hover:font-bold focus:font-bold">
            <img src={logout} className="text-xl my-1" alt="" /> log out
          </button>
        </div>
      </div>
    
      <div className="flex justify-between text-gray-500 text-xs">
        <p>2022©logo name</p>
        <p>Developed by ivan Infotech</p>
      </div>
     
    </>
  );
};

export default Left;
