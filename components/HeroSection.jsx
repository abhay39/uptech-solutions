'use client'
import { MoveRight } from "lucide-react";
import Navbar from "./Navbar";
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination } from 'swiper/modules';




const images=[
  
  {
    image:"/p2.jpg"
  },
  
  {
    image:"/p4.jpg"
  },
  {
    image:"/p5.jpg"
  },
  
]
const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gray-100">
     
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/plumbing-home.jpg')" }}
      ></div>

     
      <div className="absolute inset-0 bg-[#30499B] opacity-50"></div>
   
      <div className="relative container mx-auto ">
        
        {/* <div className=" sticky top-0 left-0 w-full"> */}
          <Navbar  />
        {/* </div> */}

        <div className=" min-h-screen flex flex-col lg:flex-row  justify-center items-center gap-24  lg:mt-0  px-8">
            <div className=" flex mt-7 flex-col items-center lg:items-start justify-center text-center lg:text-justify lg:justify-start gap-2">
                <p className=" text-white">Building with confidence</p>
                <h1 className=" text-[#34D6FF] text-6xl md:text-7xl lg:text-7xl font-bold">Building <span className=" text-white ">And</span></h1>
                <h1 className=" text-[#34D6FF] text-6xl md:text-7xl lg:text-8xl font-bold">Maintaining </h1>
                <h1 className=" text-white text-6xl md:text-7xl lg:text-7xl font-bold">Your Dreams</h1>
                <p className=" text-white text-center">Fast, friendly home repair service done right the first time!!</p>
                <button className=" px-6 mt-3 w-[200px] flex items-center gap-3 py-3 bg-white font-semibold text-[#4273C9]">Explore More <MoveRight /></button>
            </div>
            
            <div className=" overflow-x-hidden w-full flex items-center justify-center overflow-y-hidden">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              pagination={{
                dynamicBullets: true,
                clickable: true
              }}
              modules={[Pagination,Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className=" mySwiper"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index} className="  flex items-center justify-center ">
                  <Image src={image.image} width={200} height={400} loading="lazy"  alt={`Slide ${index + 1}`} className="flex   rounded-lg shadow-xl items-center justify-center w-full h-[400px]  lg:w-[500px] lg:h-[600px] mb-6" />
                </SwiperSlide>
              ))}
            </Swiper>
              </div>
        </div>
      </div>
        <div className=" bg-[#34D6FF] relative  py-10 w-full mt-6 lg:-mt-28">
          <h1 className=" text-white font-bold text-4xl md:text-6xl ml-20">20+ Years of Experience</h1>
        </div>

    </section>
  );
};

export default HeroSection;
