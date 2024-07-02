import React from "react";
import { bebas } from "@/fonts";
import Image from "next/image";

const Wip = () => {
  return (
    <div
      className={`${bebas.className} w-full h-full flex items-center justify-center text-xl`}
    >
      {/*       <p>Code in progress...</p>
       */}{" "}
      <Image
        alt='gif-gag'
        src='/loading-complete.gif'
        width={600}
        height={600}
        className='mix-blend-lighten'
      />
    </div>
  );
};

export default Wip;
