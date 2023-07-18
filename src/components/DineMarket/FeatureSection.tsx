import Image from "next/image";

export default function FeatureSection() {
  return (
      <>
      <h1 className="font-bold text-5xl flex flex-col items-center ml-[40rem] leading-tight font-poppin mt-40">Unique and Authentic <br /> Vintage Designer <br /> Jewellery</h1>
    <section className="flex flex-col items-center justify-center font-poppin bg-[#FBFCFF] h-[30rem]  ">
        <div className="px-28 grid grid-cols-2 items-center justify-center ">
            
        <div className="left">

            <div className="text-8xl font-bold text-black opacity-5 absolute">
            <h1>Different <br /> from <br /> others</h1>
            </div>

            <div className="grid grid-cols-2 relative gap-y-10">
                <div>
                <h1 className="font-bold text-xl">Using Good Quality <br /> Materials</h1>
                <p className="text-gray-500 mt-3">Lorem ipsum dolor sit <br /> amt, consectetur <br /> adipiscing elit.</p>
                </div>

                <div>
                <h1 className="font-bold text-xl">100% Handmade <br /> Products</h1>
                <p className="text-gray-500 mt-3">Lorem ipsum dolor sit <br /> amt, consectetur <br /> adipiscing elit.</p>
                </div>

                <div>
                <h1 className="font-bold text-xl">Modern Fashion <br /> Design</h1>
                <p className="text-gray-500 mt-3">Lorem ipsum dolor sit <br /> amt, consectetur <br /> adipiscing elit.</p>
                </div>

                <div>
                <h1 className="font-bold text-xl">Discount for Bulk <br /> Orders</h1>
                <p className="text-gray-500 mt-3">Lorem ipsum dolor sit <br /> amt, consectetur <br /> adipiscing elit.</p>
                </div>
             </div>
             
        </div>
        
            <div className="right flex justify-center items-center gap-x-10">

                <Image src={"/pic6.png"} alt="pic6" width={320} height={320} />
                <div className="space-y-5">
                <p className="text-gray-700 text-justify">This piece is ethically crafted in our small family-owned workshop in Peru with 
                unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                <button type="submit" className="bg-black text-white px-3 py-2 border-2 tracking-widest
                 border-t-slate-400 border-l-slate-400 border-b-black border-r-black">See All Product</button>
                </div>

            </div>

        </div>
    </section>
    </>
  )
}
