import React from "react";
import { bebas } from "@/fonts";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className='w-full h-full '>
      <ul
        className={`flex flex-col gap-8 w-full h-full ${bebas.className} hover:drop-shadow-2xl font-semibold text-xl tracking-widest lg:text-2xl`}
      >
        <li>
          <Link href='' className='hover:pl-8 transition-all duration-300'>
            {" "}
            Timeline
          </Link>
        </li>
        <li>
          <Link href='' className='hover:pl-8 transition-all duration-300'>
            {" "}
            Projects
          </Link>
        </li>
        <li>
          <Link href='' className='hover:pl-8 transition-all duration-300'>
            {" "}
            About me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
