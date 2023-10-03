export default function Footer() {
  return (
    <footer className="absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full ">
      <div className=" border-b px-8 py-3 font-bold font-serif">
        <p>Bharat</p>
      </div>
      <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-between px-6 py-3 space-y-5 sm:space-y-0">
        <ul className="flex items-center space-x-6">
          <li className="link">About</li>
          <li className="link">Advertising</li>
          <li className="link">Business</li>
          <li className="link">How Search works</li>
        </ul>
        <ul className="flex items-center space-x-6">
          <li className="link">Privacy</li>
          <li className="link">Terms</li>
          <li className="link">Setting</li>
        </ul>
      </div>
    </footer>
  );
}
