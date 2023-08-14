"use client";
import {useState} from "react";

export default function Quantity() {
    const [num, setNum] = useState(1)
    const stop = num <= 1;
  return (
    <>
     <button onClick={() => setNum(num - 1)} disabled={stop} className="bg-gray-200 rounded-full w-9 h-9 ml-5">-</button>
      {num}
     <button onClick={() => setNum(num + 1)} className="border-2 border-black rounded-full w-9 h-9">+</button>
    </>
  )
}
