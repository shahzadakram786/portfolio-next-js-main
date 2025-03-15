"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div className="h-full" 
    initial={{y:"-200vh"}}
     animate={{y:"0%"}}
     transition={{duration:1}}>

    

    <div className="h-full flex justify-center items-center flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:gap-10">
      {/* Image container  */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative py-10  overflow-hidden">
      {/* <marquee className="absolute text-white text-9xl font-semibold top-52">Shahzad Akram</marquee> */}
        <Image
          src="/avatar.png"
          alt="Shahzad Akram - Web Developer Profile"
          fill
          className="object-contain  "
        />
      </div>

      {/* text container  */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col justify-center items-center gap-8">
        {/* TiTle */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Crafting Digital Experiences, Designing Tommorow
        </h1>
        {/* desc  */}
        <p className="md:text-xl">
          Welcome to my digital canvas, where innovation and creativity
          converge. With a keen eye for aesthetics
        </p>

        <div className="flex gap-4 w-full">
          <Link href="#" target={"_blank"}
          download={true}
           className="p-4 bg-black text-white rounded-lg ring-1 ring-white">
            Resume 
          </Link>
          <Link href="#" className="p-4 rounded-lg ring-1 ring-black">
            Contact me
          </Link>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Homepage;
