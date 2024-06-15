"use client";

import Hero from "@/components/sections/Hero";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

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
    <main className='flex relative min-h-screen flex-col items-center justify-between p-24'>
      <video
        autoPlay
        loop
        muted
        disablePictureInPicture
        className='absolute inset-0 w-full h-screen object-cover -hue-rotate-30'
        ref={videoRef}
      >
        <source src='/heroVideo.mp4' type='video/mp4' />
      </video>
      <div className='cursor absolute w-20 h-20 rounded-full bg-black mix-blend-multiply opacity-10 -translate-x-1/2 -translate-y-1/2 blur-xl'></div>

      <Hero />
    </main>
  );
}
