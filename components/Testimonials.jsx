"use client"
import { Poppins } from "next/font/google"
import Image from "next/image"
import { useEffect, useState } from "react"


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { Autoplay, Pagination } from 'swiper/modules';

export const projects = [

  {
    id: 2,
    user: '/man.jpg',
    comment: "We have used Your Business Name LLC for several years and consider Tim and his men as a part of our company. Great customer service and very fast service. I'm thankful to have such a reliable, express and trustworthy company to work with.",
    userName: "John F. Kennedy"
  },
  {
    id: 1,
    user: '/girl.jpg',
    comment: "I can't recommend XYZ Plumbing enough! Their team was incredibly professional and efficient. They arrived promptly, diagnosed the issue quickly, and fixed it right away. Plus, their rates were very reasonable. I'll definitely be calling them again for any plumbing needs!",
    userName: "Rakeel Moriyo"
  },
  {
    id: 3,
    user: '/man-2.jpg',
    comment: "I had a plumbing emergency late at night, and XYZ Plumbing came to the rescue! Their emergency service was a lifesaver. The plumber was friendly, knowledgeable, and worked tirelessly to fix the problem. I'm so grateful for their prompt response and excellent service.",
    userName: "Chirs Gayle"
  },
]

const Poppi = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ["normal"],
})



const Testimonials = () => {


  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <section id="testiomonials" className={` ${Poppi.className} flex flex-col lg:flex-row  justify-center items-center  px-8  min-h-screen gap-8`}>
      <div className=" w-full lg:w-1/2 flex  flex-col gap-6 p-3">
        <div className=" flex items-center flex-col lg:flex-row  gap-1 ">
          <p className="text-[#4978C3] text-center lg:text-justify font-light">What our client says</p>
          <hr className=" border-b-[1px] border-blue-400 w-[160px]  lg:w-[60px]" />
        </div>
        <h2 className=" text-4xl lg:text-6xl font-extrabold text-center lg:text-justify text-[#4978C3]">Client's <br /> Testimonials</h2>
        <p className="text-[#4978C3] font-light  text-center lg:text-justify ">Here's what our customers are saying about Uptech </p>
       
      </div>



      <div className=" w-full lg:w-1/2">
        <Swiper
          spaceBetween={300}
          slidesPerView={1}
          loop={true}
          pagination={{ dynamicBullets: true, clickable: true }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
        >
          {projects.map((image, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center z-50 px-4 md:px-8  lg:px-24">
              <div className={` relative h-[400px] w-full  bg-gray-100 mb-7`}>
                <div className="absolute inset-0 rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(/p7.jpg)`, objectFit: 'cover' }}></div>
                <div className="absolute inset-0 bg-[#516fd0] opacity-70"></div>
                <hr className=" absolute top-0 left-0 h-[200px] border-8 border-[#34D6FF]" />
                <div className="relative left-3 container mx-auto text-white px-6 py-10 mt-5">
                  <div className=" w-full flex  flex-col gap-3 p-3 items-center justify-center text-center">
                    <p className=" text-sm md:text-xl font-medium text-justify">{image.comment}</p>
                  </div>
                  <div className=" relative bottom-2 ">
                    <div className="  ">
                      <Image src={image.user} alt="user" height={100} width={100} className=" h-[100px] md:h-[150px] mt-32 md:mt-10 lg:mt-7 absolute -left-[50px] md:-left-[70px] lg:-left-[100px] border-[4px] border-[#34D6FF]  w-[100px] md:w-[150px] rounded-full" />
                      <p className=" absolute mt-1 right-3  text-white font-bold text-xl ">- {image.userName}</p>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


    </section>
  )
}

export default Testimonials