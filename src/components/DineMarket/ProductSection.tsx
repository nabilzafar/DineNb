"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';


export default function ProductSection() {
  return (
    <section className="font-poppin my-28 px-28">
        <div className="text-center">
        <p className="text-[#0000FF] text-sm font-bold">PRODUCTS</p>
        <h1 className="text-4xl mt-3 font-bold">Check What We Have</h1>    
        </div>
        <div className="mt-16">
          <Swiper spaceBetween={50} slidesPerView={3} >
            <SwiperSlide>
            <Image src={"/pic5.png"} alt="event" width={380} height={380}
                   className="hover:scale-110 duration-300" />
            </SwiperSlide>
            <SwiperSlide>
            <Image src={"/main.png"} alt="event" width={380} height={380}
                   className="hover:scale-110 duration-300" />
            </SwiperSlide>
            <SwiperSlide>
            <Image src={"/pic6.png"} alt="event" width={380} height={380}
                   className="hover:scale-110 duration-300" />
            </SwiperSlide>
            <SwiperSlide>
            <Image src={"/pic8.png"} alt="event" width={380} height={380}
                  className="hover:scale-110 duration-300" />
            </SwiperSlide>
            <SwiperSlide>
            <Image src={"/pic10.png"} alt="event" width={380} height={380}
                   className="hover:scale-110 duration-300" />
            </SwiperSlide>
            <SwiperSlide>
            <Image src={"/pic4.png"} alt="event" width={380} height={380}
                   className="hover:scale-110 duration-300" />
            </SwiperSlide>
            <SwiperSlide>
            <Image src={"/pic7.png"} alt="event" width={380} height={380}
                   className="hover:scale-110 duration-300" />
            </SwiperSlide>
            <SwiperSlide>
            <Image src={"/pic2.png"} alt="event" width={380} height={380}
                   className="hover:scale-110 duration-300" />
            </SwiperSlide>
            <SwiperSlide>
            <Image src={"/pic3.png"} alt="event" width={380} height={380}
                   className="hover:scale-110 duration-300" />
            </SwiperSlide>
            <SwiperSlide>
            <Image src={"/pic9.png"} alt="event" width={380} height={380}
                   className="hover:scale-110 duration-300" />
            </SwiperSlide>
          </Swiper>
        </div>
    </section>
  )
}
