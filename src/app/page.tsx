"use client";

import Hero from "@/components/sections/Hero";
import Nav from "@/components/sections/Nav";
import Sidebar from "@/components/sections/Sidebar";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeNavTab, setActiveNavTab] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3;
    }
  }, []);

  //Cursor glow.
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className='flex relative min-w-screen h-screen flex-row items-center justify-between p-8 lg:p-28 gap-6 overflow-hidden'>
      <video
        autoPlay
        muted
        disablePictureInPicture
        className='absolute -z-10 inset-0 w-screen h-screen object-cover -hue-rotate-30 opacity-60 bg-blend-multiply'
        ref={videoRef}
      >
        <source src='/heroVideo.mp4' type='video/mp4' />
      </video>

      <div className=' w-1/3 h-full flex self-start flex-col gap-24'>
        {" "}
        <Hero />
        <Nav activeNavTab={activeNavTab} selectTab={setActiveNavTab} />
      </div>

      <div className='w-2/3 h-full'>
        <Sidebar activeNavTab={activeNavTab} />
      </div>

      <div className='cursor -z-10 absolute w-60 h-60 rounded-full bg-amber-50 opacity-10 -translate-x-1/2 -translate-y-1/2 blur-3xl mix-blend-lighten'></div>
      <div className='absolute left-0 top-0 -z-10 w-screen h-screen bg-indigo-900 bg-opacity-40 mix-blend-multiply'></div>
    </main>
  );
}
