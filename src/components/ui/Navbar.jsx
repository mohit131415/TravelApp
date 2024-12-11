import React from "react";

function Navbar() {
  return (
    <>
      {/* Navigation positioned over the image */}
      <nav className="flex h-[15%] absolute top-0 left-0 text-white w-full items-center justify-between bg-[#301c0e]/80 p-4 sm:p-6 rounded-3xl">
        <ul className="flex flex-wrap gap-3 sm:gap-5 md:gap-7 text-sm sm:text-base md:text-xl font-semibold">
          <li className="relative group cursor-pointer">
            <a href="#" className="text-white">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          </li>
          <li className="relative group cursor-pointer">
            <a href="#" className="text-white">
              About
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          </li>
          <li className="relative group cursor-pointer">
            <a href="#" className="text-white">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          </li>
          <li className="relative group cursor-pointer hidden sm:block">
            <a href="#" className="text-white">
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          </li>
          <li className="relative group cursor-pointer hidden md:block">
            <a href="#" className="text-white">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          </li>
          <li className="relative group cursor-pointer hidden lg:block">
            <a href="#" className="text-white">
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        <div className="flex flex-row gap-4 sm:gap-6 md:gap-10 text-sm sm:text-base md:text-xl font-semibold">
          <button className="py-1 px-3 sm:py-2 sm:px-5 rounded-md sm:rounded-lg">
            Sign up
          </button>
          <button className="border-white border-[2px] px-3 py-1 sm:px-5 sm:py-2 rounded-md sm:rounded-lg bg-transparent">
            Log in
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
