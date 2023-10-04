import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOprions from "./SearchHeaderOprions";

export default function SearchHeader() {
  return (
    <header className="sticky top-0  bg-white">
      <div className="flex w-full px-2 sm:px-6 py-6 items-center justify-between">
        <Link href={"/"}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
            width={120} // Set the width
            height={40} // Set the height
            alt="Google Logo"
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>

        <div className="hidden sm:inline-flex space-x-2">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
        <button className="bg-blue-500 text-white px-5 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all ml-2">
          Sign In
        </button>
      </div>
      <SearchHeaderOprions />
    </header>
  );
}
