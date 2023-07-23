import Image from "next/image";

export default function FeatureSection() {
  return (
      <>
      <h1 className="font-bold lg:text-5xl md:text-4xl text-3xl flex flex-col items-center lg:ml-[40rem] md:ml-[20rem] font-poppin lg:leading-tight mt-40">Unique and Authentic <br /> Vintage Designer <br /> Jewellery</h1>
    <section className="flex flex-col items-center justify-center font-poppin bg-[#FBFCFF] my-10">
        <div className="lg:px-28 md:px-16 px-10 grid lg:grid-cols-2 grid-cols-1 items-center justify-center ">
            
        <div className="left">

            <div className="md:text-8xl text-7xl font-bold text-[#f2f3f7] absolute">
            <h1>Different <br /> from <br /> others</h1>
            </div>

            <div className="grid grid-cols-2 relative gap-y-10  gap-x-3">
                <div>
                <h1 className="font-bold md:text-xl text-lg">Using Good Quality <br /> Materials</h1>
                <p className="text-gray-500 mt-3 md:text-base text-sm">Lorem ipsum dolor sit <br /> amt, consectetur <br /> adipiscing elit.</p>
                </div>

                <div>
                <h1 className="font-bold md:text-xl text-lg">100% Handmade <br /> Products</h1>
                <p className="text-gray-500 mt-3 md:text-base text-sm">Lorem ipsum dolor sit <br /> amt, consectetur <br /> adipiscing elit.</p>
                </div>

                <div>
                <h1 className="font-bold md:text-xl text-lg">Modern Fashion <br /> Design</h1>
                <p className="text-gray-500 mt-3 md:text-base text-sm">Lorem ipsum dolor sit <br /> amt, consectetur <br /> adipiscing elit.</p>
                </div>

                <div>
                <h1 className="font-bold md:text-xl text-lg">Discount for Bulk <br /> Orders</h1>
                <p className="text-gray-500 mt-3 md:text-base text-sm">Lorem ipsum dolor sit <br /> amt, consectetur <br /> adipiscing elit.</p>
                </div>
             </div>
             
        </div>
        
            <div className="right flex md:flex-row flex-col justify-center items-center gap-x-10 lg:mt-0 mt-10">

                <Image src={"/pic6.png"} alt="pic6" width={320} height={320} />
                <div className="">
                <p className="text-gray-700 text-justify my-5 md:text-base text-sm">This piece is ethically crafted in our small family-owned workshop in Peru with 
                unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                <button type="submit" className="bg-black text-white px-3 py-2 border-2 tracking-widest md:text-base text-xs
                 border-t-slate-400 border-l-slate-400 border-b-black border-r-black">See All Product</button>
                </div>

            </div>

        </div>
    </section>
    </>
  )
}
