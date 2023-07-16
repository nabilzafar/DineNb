import Image from "next/image";
export default function PromotionSection() {
  return (
    <>
    <section className="px-28 font-poppin mt-28">
        <div className="text-center ">
        <p className="text-[#0000FF] text-sm font-bold">PROMOTIONS</p>
        <h1 className="text-4xl mt-3 font-bold">Our Promotions Events</h1>    
        </div>

        <div className="flex items-center gap-x-8 mt-10">
            <div className="left">

            <div className="bg-[#d6d6d8] flex items-center justify-center w-[42rem] gap-x-12">
                <div>
                <h1 className="text-4xl font-bold">GET UP TO 60%</h1>
                <p>For the summer season</p>
                </div>
                <div>
                <Image src={"/event1.png"} alt="event" width={250} height={250}/>
                </div>
            </div>
            
            <div className="bg-[#212121] text-white flex flex-col justify-center items-center w-[42rem] mt-4 pb-8">
                <h1 className="text-4xl font-bold mt-14">GET 30% Off</h1>
                <p className="mt-4">USE PROMO CODE</p>
                <h4 className="font-bold bg-[#474747] w-80 text-lg tracking-[0.3em] rounded-md py-1 text-center">DINEWEEKENDSALE</h4>
            </div>

        </div>

        <div className="right flex space-x-4">
            <div className="bg-[#EFE1C7] w-72">
                <p className="pt-5 pl-5">Flex Sweatshirt</p>
                <div className="flex gap-x-3 pl-5">
                    <p className="line-through text-lg">$100.00</p>
                    <p className="font-bold text-lg">$75.00</p>
                </div>
                <div className="ml-4 mt-5">
                <Image src={"/event2.png"} alt="event" width={250} height={250}/>
                </div>
                </div>


            <div className="bg-[#D7D7D9] w-72">
            <p className="pt-5 pl-5">Flex Push Button Bomber</p>
                <div className="flex gap-x-3 pl-5">
                    <p className="line-through text-lg">225.00</p>
                    <p className="font-bold text-lg">$190.00</p>
                </div>
                <div className="ml-4 mt-4">
                <Image src={"/event3.png"} alt="event" width={250} height={250}/>
                </div>
            </div>

        </div>
        </div>
    </section>
    </>
  )
}
