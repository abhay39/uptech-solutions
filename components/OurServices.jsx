import { ArrowRight } from "lucide-react"

const OurServices = () => {
  return (
    <section id="services" className=" min-h-screen p-8 flex flex-col gap-3 px-4 lg:px-16">
            <p className="text-[#4978C3] text-center lg:text-justify text-sm font-light">What we are offering</p>
        
        <h2 className=" text-5xl  font-extrabold text-[#4978C3] text-center md:text-justify">Our Services</h2>
        <p className=" font-light text-[16px] text-center md:text-justify text-sm">No job is too big or too small for the crew at your business Name LLC</p>

        <div className=" flex items-center flex-col w-full md:flex-row gap-12">
            <div  className="border-[1px] w-full lg:w-2/6 border-[#3CD8FF] relative flex flex-col gap-8 p-4 py-5  ">
                <h1 className=" text-3xl font-semibold text-[#4373C1]">Plumbing</h1>
                <p className=" mb-6"><span className=" font-bold">Business names</span> employs access to ana exclusive team of certified plumbing contractors, with 24 hours plumbing services available at cost effecient pricing.</p>
                <button className=" absolute bottom-1  right-3 text-[#4373C1] flex items-center gap-3 mb-1">View Details <ArrowRight /> </button>
                <div class="absolute bottom-0 right-0 w-24 h-24 border-4 border-l-white border-t-white border-r-[#4273C1]  border-blue-500 border-b-[#4273C1]"></div>
            </div>
            <div  className="border-[1px] w-full  lg:w-2/6 border-[#3CD8FF] relative flex flex-col gap-8 p-4 py-5  ">
                <h1 className=" text-3xl font-semibold text-[#4373C1]">Plumbing</h1>
                <p className=" mb-6"><span className=" font-bold">Business names</span> employs access to ana exclusive team of certified plumbing contractors, with 24 hours plumbing services available at cost effecient pricing.</p>
                <button className=" absolute bottom-1  right-3 text-[#4373C1] flex items-center gap-3 mb-1">View Details <ArrowRight /> </button>
                <div class="absolute bottom-0 right-0 w-24 h-24 border-4 border-l-white border-t-white border-r-[#4273C1]  border-blue-500 border-b-[#4273C1]"></div>
            </div>
        </div>

        <div className=" flex items-center flex-col mt-6 md:flex-row gap-10">
            <div  className="border-[1px] w-full  lg:w-2/5 border-[#3CD8FF] relative flex flex-col gap-8 p-4 py-5  ">
                <h1 className=" text-3xl font-semibold text-[#4373C1]">Commercial Property Maintenance</h1>
                <p className=" mb-6">No matter what type of business you run, its exterior appearance is just as important as that of the interior. Business Name proud to offer commercial property maintenance for your business. We focus on the fastest and safest execution of the project with a clear cost and benefit solution.</p>
                <button className=" absolute bottom-1  right-3 text-[#4373C1] flex items-center gap-3 mb-1">View Details <ArrowRight /> </button>
                <div class="absolute bottom-0 right-0 w-24 h-24 border-4 border-l-white border-t-white border-r-[#4273C1]  border-blue-500 border-b-[#4273C1]"></div>
            </div>
            <div  className="border-[1px]  w-full  lg:w-2/5 border-[#3CD8FF] relative flex flex-col gap-8 p-4 py-5  ">
                <h1 className=" text-3xl font-semibold text-[#4373C1]">Preventive Maintenance</h1>
                <p className=" mb-6">Our Preventative Maintenance programs are designed to make you stand out from your competitors. Our Handyman Programs ensure your facilities are kept up to the standards you expect. This program often discovers problems earlier so that repairs cost less. As a result, you save time and money.</p>
                <button className=" absolute bottom-1  right-3 text-[#4373C1] flex items-center gap-3 mb-1">View Details <ArrowRight /> </button>
                <div class="absolute bottom-0 right-0 w-24 h-24 border-4 border-l-white border-t-white border-r-[#4273C1]  border-blue-500 border-b-[#4273C1]"></div>
            </div>
        </div>

    </section>
  )
}

export default OurServices