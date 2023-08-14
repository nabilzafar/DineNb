"use client";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { BsDoorClosed } from "react-icons/bs";
import { useState } from "react";

export default function Nav() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="lg:px-28 md:px-16 px-6 py-10 font-poppin">
        <div className="flex justify-between items-center">
          <div>
            <Link href={"/"}><Image src={"/logo.png"} alt="dine" width={150} height={150} /></Link>
          </div>

          <div className="md:flex hidden">
            <ul className="flex gap-x-10">
              <li className="hover:scale-110 transition-all">
                <Link href={"/category/female"}>Female</Link>
              </li>
              <li className="hover:scale-110 transition-all">
                <Link href={"/category/male"}>Male</Link>
              </li>
              <li className="hover:scale-110 transition-all">
                <Link href={"/category/kids"}>Kids</Link>
              </li>
              <li className="hover:scale-110 transition-all">
                <Link href={"/Products"}>All Products</Link>
              </li>
            </ul>
          </div>

          <div className="lg:flex hidden items-center border border-1 border-solid border-gray-300 rounded-md px-1 py-0.5">
            <CiSearch className="bg-white" />
            <input
              type="text"
              placeholder="What you looking for"
              className="pr-28 px-1 text-sm outline-none"
            />
          </div>

          <Link href={"/CartSection"}>
            <div className="md:flex bg-gray-200  hidden rounded-full p-3 relative hover:scale-110 transition-all">
              <span className="bg-red-600 text-white rounded-full px-1 absolute -top-2 right-0">
                0
              </span>
              <AiOutlineShoppingCart size={22} />
            </div>
          </Link>

          <div className="md:hidden">
            {toggle ? (
              <BsDoorClosed
                size={30}
                onClick={() => {
                  setToggle(false);
                }}
                className="float-right"
              />
            ) : (
              <BiMenuAltRight
                size={30}
                onClick={() => {
                  setToggle(true);
                }}
              />
            )}
            {toggle ? (
              <>
                <div className="absolute w-full h-96 left-0 flex flex-col justify-center items-center text-center mt-10 bg-slate-50 drop-shadow-lg">
                  <div className="bg-gray-200 rounded-full p-3 relative hover:scale-110 transition-all">
                    <Link href={"/CartSection"}>
                      <span className="bg-red-600 text-white rounded-full px-1 absolute -top-2 right-0">
                        0
                      </span>
                      <AiOutlineShoppingCart size={22} />
                    </Link>
                  </div>
                  <div className="md:hidden flex items-center border border-1 border-solid border-gray-300 rounded-md px-1 py-0.5 mt-3">
                    <CiSearch className="bg-white" />
                    <input
                      type="text"
                      placeholder="What you looking for"
                      className="pr-20 px-1 text-sm outline-none"
                    />
                  </div>
                  <div>
                    <ul className="flex flex-col py-1">
                      <li className="py-1 hover:scale-110 transition-all">
                        <Link href={"/category/female"}>Female</Link>
                      </li>
                      <li className="py-1 hover:scale-110 transition-all">
                        <Link href={"/category/male"}>Male</Link>
                      </li>
                      <li className="py-1 hover:scale-110 transition-all">
                        <Link href={"/category/kids"}>Kids</Link>
                      </li>
                      <li className="py-1 hover:scale-110 transition-all">
                        <Link href={"/Products"}>All Products</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </nav>
    </>
  );
}
