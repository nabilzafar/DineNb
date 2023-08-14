import Image from "next/image";
import Link from "next/link";
import GetProducts from "@/components/Shared/SanityProducts";
import { IProducts } from "@/components/Shared/SanityInterface";
import { urlForImage } from "../../../sanity/lib/image";

async function DineMarket() {
  const res = await GetProducts();
  return res;
}

export default async function page() {
  const data: IProducts[] = await DineMarket();
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-10 mb-32 
    lg:px-28 md:px-20 px-8 justify-items-center gap-y-10 gap-x-10">
    {data.map( (item) => 
  <Link href={`Products/${item.slug.current}`}> 
  <div className="hover:scale-110 duration-300">
  <Image key={item._id} src={urlForImage(item.images[0]).url()} alt={"products"} width={300} height={300} 
  className="rounded-lg aspect-square"/>
  <h1 className="mt-3 text-lg font-bold">{item.title}</h1>
  <h2 className="font-bold text-gray-500 text-sm">{item.subtitle}</h2>
  <p className="font-bold text-lg mt-2">{item.currency} {item.price}</p>
  </div>
  </Link>
  )}
   </div>
  )
}
