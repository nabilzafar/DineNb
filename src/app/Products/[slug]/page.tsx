import {AiOutlineShoppingCart} from "react-icons/ai";
import Image from "next/image";
import GetProducts from "@/components/Shared/SanityProducts";
import { IProducts } from "@/components/Shared/SanityInterface";
import { urlForImage } from "../../../../sanity/lib/image";
import Quantity from "@/components/DineMarket/Quantity";


async function ProductsByDetail({ params }: { params : { slug: string } }) {
  const data: IProducts[] = await GetProducts();
   return data.filter((item) => item.slug.current == params.slug);
}

const sizes = ["XS","S","M","L","XL"];

export default async function page({ params }: { params: { slug: string } }){
  const result = await ProductsByDetail({params})
  return (
    <section className="bg-gray-50 lg:px-32 md:px-20 px-8 pt-16 pb-1 mb-16 font-poppin">
    {result.map( (item) => (
      <>
      <div className="flex lg:flex-row flex-col gap-x-10">
      <div className="left flex md:flex-row flex-col-reverse gap-y-5 gap-x-8 items-start justify-center">
        <Image src={urlForImage(item.images[0]).url()} alt={"pics"} width={80} height={80} className="rounded-md" />
        <Image src={urlForImage(item.images[0]).url()} alt={"pics"} width={670} height={670} className="rounded-md" />
      </div>
      <div className="right pt-16">
        <h1 className="text-2xl tracking-widest">{item.title}</h1>
        <h2 className="text-xl text-gray-400">{item.subtitle}</h2>
        <p className="font-bold pt-10">SELECT SIZE</p>
        <div className="flex gap-x-3">
        {sizes.map( (item) => (
          <div className="w-9 h-9 duration-300 rounded-full hover:shadow-xl border mt-2 flex items-center justify-center">
          <span className="text-gray-500 font-bold">{item}</span>
        </div>
        ))}
        </div>
  
        <div className="flex items-center py-10 gap-x-3">
          <h1 className="text-lg font-bold">Quantity:</h1>
          <Quantity/>
        </div>
  
        <div className="flex items-center gap-x-5">
          <button className="flex items-center justify-center  text-white bg-black px-5 py-2 gap-x-2 
          border-2 border-t-slate-400 border-l-slate-400 border-b-black border-r-black"><AiOutlineShoppingCart size={25}/>Add to Cart</button>
        <p className="text-2xl font-bold">{item.currency} {item.price}.00</p>
        </div>
        </div>
      </div>
  
      <div className="bg-[#fff] my-16">
  <div className="relative md:px-16 px-5 pt-10 pb-4">
    <div className="lg:text-9xl md:text-8xl text-6xl font-bold text-[#f2f3f7]">
      Overview
    </div>
    <div>
    <p className="lg:text-3xl md:text-2xl text-lg font-bold absolute lg:-translate-y-20 md:-translate-y-16 -translate-y-11">Product Information</p>
    </div>
    </div>
    <div className="border-b-2 border-b-gray-300 mx-16">
   </div>
  
   <div className="mt-8">
    <div className="flex md:flex-row flex-col lg:px-16 md:px-12 px-8">
      <h1 className="lg:text-xl md:text-lg text-gray-500 font-bold tracking-wider mb-6">PRODUCT <br /> DETAILS</h1>
      <p className="text-gray-600 tracking-widest text-justify lg:ml-56 md:ml-28">{item.description}</p>
    </div>
    <div className="flex md:flex-row flex-col lg:px-16 md:px-12 px-8 pt-10 pb-20">
      <h1 className="lg:text-xl md:text-lg text-gray-500 font-bold tracking-wider mb-6">PRODUCT <br /> CARE</h1>
        <ul className="font-bold tracking-widest list-disc lg:ml-60 md:ml-[130px] ml-4">
          {item.productcare.map( (care) => (<li>{care}</li>))}
        </ul>
    </div>
   </div>
  </div>
    </>
    ))}
    </section>
  )
}






 


