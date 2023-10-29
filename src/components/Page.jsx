import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Left from "./Left";
import Main from "./Main";
import Right from "./Right";

const Page = () => {
    toast.error("Welcome");
  return (
    <>
      <div className="flex gap-5 justify-center ">
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
      <ToastContainer />
    </>
  );
};

export default Page;
