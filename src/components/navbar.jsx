"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion"; // ✅ Removed `stagger`

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: { x: "100vw" },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: { x: 10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className="hidden md:flex gap-4 items-center w-1/3 cursor-pointer">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm w-10 h-10 gap-1 bg-black rounded-full p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white">S</span>
          <span className="rounded-full p-1 h-5 w-5 bg-white text-whited flex items-center justify-center">
            A
          </span>
        </Link>
      </div>

      <div className="hidden md:flex gap-4 justify-end items-center w-1/3">
        <Link href="https://github.com/shahzadakram786">
          <Image src="/github.png" alt="GitHub" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/shahzad-akram-250a2b25b/">
          <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
        </Link>
        <Link href="https://www.instagram.com/shahzadakram1100/">
          <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
        </Link>
        {/* <Link href="#">
          <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
        </Link> */}
        {/* <Link href="#">
          <Image src="/pinterest.png" alt="Pinterest" width={24} height={24} />
        </Link> */}
      </div>

      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between relative z-50 "
        
          onClick={() => setOpen(!open)}
        >
          <motion.div
            className="w-10 h-1 bg-black rounded origin-left"
            variants={topVariants}
            animate={open ? "opened" : "closed"}
          ></motion.div>
          <motion.div
            className="w-10 h-1 bg-black rounded"
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
          ></motion.div>
          <motion.div
            className="w-10 h-1 bg-black rounded origin-left"
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
          ></motion.div>
        </button>

        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div key={link.title} className="cursor-pointer" variants={listItemVariants}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
