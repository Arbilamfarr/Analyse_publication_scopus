"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import Link from "next/link";
import "react-activity/dist/library.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [nav, setNav] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const links = [
    {
      id: 1,
      link: "auteur",
    },
    {
      id: 2,
      link: "publication",
    },
    
  ];

  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
      </Head>
      <body className={inter.className}>
        <div className="flex justify-between items-center z-50 w-full h-20 px-4 text-white bg-blue-900 fixed top-0 nav">
          <div>
            <h1 className="text-5xl font-signature ml-2">
              <a
                className="link-underline link-underline-black"
                href="/"
                rel="noreferrer"
              >
                <span className=" text-orange-400">Sco</span>pus
              </a>
            </h1>
          </div>

          <ul className="hidden md:flex">
            <li className="nav-links px-4 cursor-pointer capitalize font-bold tracking-wider text-gray-200 hover:scale-105 hover:text-white duration-200 link-underline">
              <Link href="/">Home</Link>
            </li>
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="nav-links px-4 cursor-pointer capitalize font-bold tracking-wider text-gray-200 hover:scale-105 hover:text-white duration-200 link-underline"
              >
                <Link href={link}>{link}</Link>
              </li>
            ))}
          </ul>

          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 right-0 w-1/2 h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
              <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
                <Link onClick={() => setNav(!nav)} href="/">
                  Home
                </Link>
              </li>
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                  <Link onClick={() => setNav(!nav)} href={link}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <div className="hidden md:flex items-center ml-auto md:ml-0 p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 pl-10 bg-gray-200 text-gray-800 rounded-md focus:outline-none focus:bg-white focus:text-gray-900 placeholder-gray-500 border border-gray-300 shadow-md"
              />
              <div className="absolute inset-y-0 right-0 mx-2 flex items-center pl-3">
                <AiOutlineSearch color="gray" size={26} />
              </div>
            </div>
          </div>
        </div>

        <main className="mt-20">{children}</main>
      </body>
    </html>
  );
}
