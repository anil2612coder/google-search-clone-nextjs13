"use client";
import React, { useState } from "react";

import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useSearchParams, useRouter } from "next/navigation";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex border border-gray-200 rounded-full shadow-md shadow-gray-400 px-6 py-3 sm:py-2 ml-3 sm:ml-10 lg:ml-20 mr-1 sm:mr-5 flex-grow max-w-2xl items-center"
    >
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        type="text"
        className="w-full  focus:outline-none"
      />
      <RxCross2
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
        onClick={() => setTerm("")}
      />
      <BsFillMicFill className="hidden md:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 md:mr-5" />
      <AiOutlineSearch
        onClick={handleSubmit}
        className="text-2xl hidden md:inline-flex text-blue-500 cursor-pointer"
      />
    </form>
  );
}
