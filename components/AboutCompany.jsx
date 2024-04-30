import { ArrowRight, Minus } from "lucide-react"
import Image from "next/image"

const AboutCompany = () => {
  return (
    <section id="about" className=" min-h-screen bg-[] flex flex-col lg:flex-row items-center justify-center  bg-[#FEFEFE] gap-10  lg:px-8 overflow-hidden">

          <div className="bg-white w-full lg:w-1/2 p-3 relative">
            <p className="text-[16px] text-[#4273C1] lg:hidden justify-center gap-4 mb-2 font-light text-center ">About our company
            </p>
          
              <Image src="/watertreatment.jpg" alt="pressure" loading="lazy" height={300} width={400} className="h-[500px] lg:h-[550px] w-full p-2 bg-slate-200" />
              <div className=" -right-1 lg:-right-6   absolute -bottom-8">
                  <Image src="/p3.jpg" alt="pressure" loading="lazy" height={300} width={400} className="h-[150px] -mt-6  w-[200px] p-2 bg-slate-200"  />
              </div>
          </div>
        <div className=" text-[#4273C1] flex items-center md:items-start justify-center lg:justify-start md:px-4 w-full lg:w-1/2 flex-col gap-1 md:gap-1 ">
         <div className="flex text-center md:text-justify items-center  gap-4">
          <p className="text-[16px] hidden lg:flex justify-center gap-4 font-light">About our company
           </p>
          <hr className=" border-b-2 border-blue-500"/>
         </div>
          <h1 className=" text-center text-5xl md:text-7xl  md:text-justify font-extrabold">UPTECH SOLUTIONS</h1>
          <p className=" text-center md:text-justify text-black text-[17px] font-light  w-[80%]">We are a locally owned and operated company with 20 years of industry experience. We value honesty and integrity in all aspects of our business. We offer a variety of Home Improvement services that are customizable to each individual project. 
         </p>
          <p className=" text-center md:text-justify text-black text-[17px] font-light w-[80%]"> We specialize in handyman work and a variety of related service and repair projects. We pride ourselves on the quality of our work as well as our commitment to outstanding results. We look forward to building lasting relationships with our clients and guarantee your satisfaction! 
         </p>
         <button className=" bg-[#4273C1] text-white font-bold flex p-4 px-6 items-center gap-3 mt-3 md:mt-0">Read More <ArrowRight /></button>
        </div>
        
    </section>
  )
}

export default AboutCompany