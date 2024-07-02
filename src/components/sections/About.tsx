import { rock_salt } from "@/fonts";
import React, { useEffect, useState } from "react";
import TypingAnimation from "../Typing";
import Image from "next/image";

const About = () => {
  const quotes = [
    "I find immense satisfaction and personal growth in coding. Enjoy tackling complex problems and crafting creative solutions.",
    "I am deeply intrigued by the AI hype and its potential to revolutionize industries and society.",
    "I believe that good design should not only be functional but also visually pleasing. I've always been drawn to the intersection of technology and art. I'm sure that code can be a powerful tool for creative expression, and I enjoy exploring the boundaries of what's possible.",
    "I am passionate about continuous learning and am focused on growing within the IT industry through my dedication and perseverance.",
    "In my free time, I read fantasy fiction novels, write poetry, listen to jazz, and dance. I also enjoy exploring permaculture and ecology.",
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string>("");
  const [charIndex, setCharIndex] = useState<number>(0);

  useEffect(() => {
    const type = () => {
      if (charIndex < quotes[currentQuoteIndex].length) {
        setDisplayedText(
          (prev) => prev + quotes[currentQuoteIndex].charAt(charIndex)
        );
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setDisplayedText("");
          setCharIndex(0);
          setCurrentQuoteIndex((currentQuoteIndex + 1) % quotes.length);
        }, 3000);
      }
    };

    const timeoutId = setTimeout(type, 50);

    return () => clearTimeout(timeoutId);
  }, [charIndex, currentQuoteIndex, quotes]);

  return (
    <div
      className={` w-full h-full flex items-center justify-center flex-col text-xl tracking-widest gap-4`}
    >
      <div className='w-1/2'>{displayedText}</div>
    </div>
  );
};

export default About;
