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
      videoRef.current.playbackRate = 0.4;
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
    <main className='flex relative min-w-screen h-screen flex-row items-center justify-between p-8 lg:p-24 gap-16 overflow-hidden'>
      <video
        autoPlay
        muted
        disablePictureInPicture
        className='absolute -z-10 inset-0 w-screen h-screen object-cover -hue-rotate-30 opacity-70'
        ref={videoRef}
      >
        <source src='/heroVideo.mp4' type='video/mp4' />
      </video>

      <div className='w-2/5 h-full flex self-start flex-col gap-24'>
        {" "}
        <Hero />
        <Nav selectTab={setActiveNavTab} />
      </div>

      <div className='w-3/5 h-full'>
        <Sidebar component={activeNavTab} />
      </div>

      <div className='cursor -z-10 absolute w-96 h-96 rounded-full bg-amber-50 opacity-5 -translate-x-1/2 -translate-y-1/2 blur-3xl'></div>
      <div className='absolute -left-60 -left -top-80 -z-10 w-[900px] h-[900px] rounded-full bg-indigo-400 blur-3xl bg-opacity-40 mix-blend-multiply'></div>
    </main>
  );
}
