import Image from "next/image";
import Link  from "next/link";
import {AiOutlineShoppingCart} from "react-icons/ai";
export default function HeroSection() {
  return (
    <>
    <section className="lg:px-28 md:px-16 px-6 font-poppin flex items-center space-x-28 md:mt-10 mt-5 md:text-base text-sm">

        <div className="left flex flex-col shrink-0">
            <p className="bg-blue-100 w-28 py-2 rounded-md text-center text-[#0000FF] font-bold">Sale 70%</p>
            <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold mt-10">An Industrial Take <br /> on Streetwear</h1>
            <p className="text-gray-600 mt-10">Anyone can beat you but no one can beat your <br /> outfit as long as you wear Dine outfits.</p>
            <Link href={"/ProductSection"}>
            <div className="flex text-white bg-black md:w-52 w-40 justify-center md:py-5 py-3 gap-x-2 mt-10 
            border-2 border-t-slate-400 border-l-slate-400 border-b-black border-r-black">
                <AiOutlineShoppingCart size={25}/>
                <button>Start Shopping</button>
                </div>
                </Link>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-x-12 gap-y-3 lg:mt-28 md:mt-20 mt-10">
                <Image src={"/Featured1.png"} alt="feature1" width={100} height={100}/>
                <Image src={"/Featured2.png"} alt="feature2" width={100} height={100}/>
                <Image src={"/Featured3.png"} alt="feature3" width={100} height={100}/>
                <Image src={"/Featured4.png"} alt="feature4" width={100} height={100}/>
            </div>
             </div>

<div className="right">
    <div className="bg-orange-100 rounded-full lg:w-[580px] lg:h-[580px] relative overflow-hidden">
    <Image src={"/header.png"} alt="head" width={600} height={600} className="absolute left-1 top-6"/>
    </div>
    </div>

    </section>
    </>
  )
}
