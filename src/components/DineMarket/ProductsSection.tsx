"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { items_array } from "./Mockup";
import Image from 'next/image';


export default function ProductsSection() {
  const nabeel = items_array;
  return (
    <>
    <section className="font-poppin lg:px-36 md:px-16 px-8">
      
        <div className="text-center">
        <p className="text-[#0000FF] md:text-sm text-xs font-bold">PRODUCTS</p>
        <h1 className="lg:text-4xl md:text-3xl text-2xl mt-3 font-bold">Check What We Have</h1>    
        </div>

        <div className="">
          <Swiper spaceBetween={10} slidesPerView={1} breakpoints={{
            768:  { slidesPerView: 2, spaceBetween: 20  },
            1024: { slidesPerView: 3, spaceBetween: 20  },
           
          }}>
            {nabeel.map( (items) => <SwiperSlide key={items.id}>
            <div className="flex flex-col justify-center items-center hover:scale-110 duration-500 md:text-left text-center mt-16">
              <Image src={items.source} alt={items.alternative} width={items.size} height={items.size} />
              <h1 className="font-bold text-lg mt-3">{items.name}</h1>
              <p className="font-bold text-lg mb-3">{items.price}</p>
            </div>
            </SwiperSlide>)}
          </Swiper>
        </div>

    </section>
    </>
  )
}
