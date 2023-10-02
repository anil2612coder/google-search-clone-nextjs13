import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

function HomeHeader() {
  return (
    <header>
      <div>
        <Link href="https://mail.google.com" className="hover:underline">
          Gmail
        </Link>
        <Link href="https://image.google.com" className="hover:underline">
          Images
        </Link>
        <TbGridDots className="" />
      </div>
    </header>
  );
}

export default HomeHeader;
