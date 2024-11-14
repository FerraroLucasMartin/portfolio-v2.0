import React, { Dispatch, SetStateAction } from "react";
import { bebas } from "@/fonts";
import Link from "next/link";

interface NavProps {
  selectTab: Dispatch<SetStateAction<string | undefined>>;
  activeNavTab: string | undefined;
}

const Nav = ({ selectTab, activeNavTab }: NavProps) => {
  return (
    <nav className='w-full h-fit md:h-full '>
      <ul
        className={`flex justify-between md:justify-start md:flex-col gap-8 min-w-full h-full ${bebas.className} hover:drop-shadow-2xl font-semibold text-xl tracking-widest lg:text-2xl`}
      >
        <li>
          <Link
            href=''
            onClick={() => {
              selectTab("timeline");
            }}
            className={`${
              activeNavTab === "timeline"
                ? "md:pl-8 animate-pulse"
                : "md:hover:pl-8"
            }  transition-all duration-300`}
          >
            {" "}
            Timeline
          </Link>
        </li>
        {/* <li>
          <Link
            href=''
            onClick={() => {
              selectTab("projects");
            }}
            className={`${
              activeNavTab === "projects"
                ? "md:pl-8 animate-pulse"
                : "md:hover:pl-8"
            } transition-all duration-300`}
          >
            {" "}
            Projects
          </Link>
        </li> */}
        <li>
          <Link
            href=''
            onClick={() => {
              selectTab("about");
            }}
            className={`${
              activeNavTab === "about"
                ? "md:pl-8 animate-pulse"
                : "md:hover:pl-8"
            } transition-all duration-300`}
          >
            {" "}
            About me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
