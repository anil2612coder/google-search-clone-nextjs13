import React from "react";
import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBox() {
  return (
    <form className="flex border border-gray-200 rounded-full shadow-md shadow-gray-400 px-6 py-3 sm:py-2 ml-3 sm:ml-10 lg:ml-20 mr-1 sm:mr-5 flex-grow max-w-2xl items-center">
      <input type="text" className="w-full  focus:outline-none" />
      <RxCross2 className="text-2xl text-gray-500 cursor-pointer sm:mr-2" />
      <BsFillMicFill className="hidden md:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 md:mr-5" />
      <AiOutlineSearch className="text-2xl hidden md:inline-flex text-blue-500 cursor-pointer" />
    </form>
  );
}
