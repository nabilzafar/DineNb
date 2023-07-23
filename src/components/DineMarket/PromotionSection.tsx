import Image from "next/image";
export default function PromotionSection() {
  return (
    <>
    <section className="lg:px-28 md:px-16 px-10 font-poppin my-28">
        <div className="text-center">
        <p className="text-[#0000FF] text-xs font-bold">PROMOTIONS</p>
        <h1 className="lg:text-4xl md:text-3xl text-2xl mt-3 font-bold">Our Promotions Events</h1>    
        </div>

        <div className="flex lg:flex-row flex-col items-center gap-x-4 mt-10 ">

            <div className="left flex flex-col mx-auto">

                <div className="bg-[#d6d6d8] rounded-md flex items-center justify-center md:w-[40rem] w-[20rem] md:p-0 px-4 py-5 ">
              <div>
                <h1 className="md:text-4xl text-3xl font-bold">GET UP TO 60%</h1>
                <p>For the summer season</p>
              </div>
              <div className="lg:bg-transparent md:bg-transparent bg-gray-800 rounded-full md:w-72 md:h-48 w-52 h-36 relative overflow-hidden">
                <Image src={"/event1.png"} alt="event" width={250} height={250} className="md:mt-0 mt-9 absolute right-1"/>
              </div>
                </div>
            
              <div className="bg-[#212121] rounded-md text-white flex flex-col justify-center items-center md:w-[40rem] w-[20rem] mt-4 pb-8">
                <h1 className="text-4xl font-bold mt-14">GET 30% Off</h1>
                <p className="mt-4">USE PROMO CODE</p>
                <h4 className="font-bold bg-[#474747] md:w-80 w-[270px] text-lg tracking-[0.3em] rounded-md py-1 text-center">DINEWEEKENDSALE</h4>
              </div>

            </div>

        <div className="right flex space-x-4 md:flex-row flex-col justify-center items-center mx-auto ">
            <div className="bg-[#EFE1C7] rounded-md lg:w-72 md:w-[312px] w-80 lg:mt-0 mt-4">
                <p className="pt-5 pl-5">Flex Sweatshirt</p>
                <div className="flex gap-x-3 pl-5">
                    <p className="line-through text-lg">$100.00</p>
                    <p className="font-bold text-lg">$75.00</p>
                </div>
                <div className="ml-4 mt-5">
                <Image src={"/event2.png"} alt="event" width={250} height={250}/>
                </div>
                </div>


            <div className="bg-[#D7D7D9] rounded-md lg:w-72 md:w-[312px] w-80 lg:mt-0 mt-4">
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
