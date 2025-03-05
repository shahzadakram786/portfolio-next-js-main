"use client";

import Link from "next/link";
import React, { useState } from "react";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full py-4 flex  justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">

            <div className=" hidden md:flex gap-4">
                {links.map((link) => (
                    <Link href={link.url} key={link.title}>
                        {link.title}
                    </Link>
                ))}

            </div>




      {/* logo  */}
      <div className="md:hidden">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white">Shahzad</span>
          <span className="bg-white w-12 h-8 rounded text-black flex items-center justify-center">
            .Akram
          </span>
        </Link>
      </div>
      {/* resposicve mentu  */}
      <div className="md:hidden">
        {/* menu button   */}
        <button className="w-10 h-8  flex flex-col justify-between relative z-50" 
        onClick={(() => setOpen(!open))}>

          <div className="w-10 h-1 bg-white rounded"> </div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>

        {/* menu links   */}

        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
