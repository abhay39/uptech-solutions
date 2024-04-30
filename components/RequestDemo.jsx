import { Poppins } from "next/font/google"

const Poppi = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ['400', '500', '600', '700', '800', '900'],
    style: ["normal"],
})

const RequestDemo = () => {
    return (
        <section id="contact" className={`min-h-screen ${Poppi.className} overflow-x-hidden mx-auto`}>
            <div>
                <div className={` relative h-[350px] w-full bg-gray-100`}>
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(/p5.jpg)`, objectFit: 'cover' }}></div>
                    <div className="absolute inset-0 bg-[#516fd0] opacity-70"></div>
                    <div className="relative left-3 container mx-auto text-white flex flex-col gap-4 items-center px-6 py-10 mt-5">
                        <div className=" w-full flex  flex-col gap-3 p-3 items-center justify-center text-center">
                            <div className=" flex items-center flex-col lg:flex-row  gap-1 ">
                                <p className="text-white text-center lg:text-justify font-light">Have some works for us?</p>
                                <hr className=" border-b-[1px] border-blue-400 w-[160px] lg:w-[60px]" />
                            </div>
                            <h2 className=" text-4xl lg:text-6xl font-extrabold text-center lg:text-justify text-white">Requests A Quote Today </h2>
                            <p className=" font-light text-[16px] text-center md:text-justify">Please contact us with all your water needs. We look forward to serving you.</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className=" flex items-center justify-center gap-6 p-6 flex-col  lg:flex-row lg:gap-11">
                <div className=" bg-slate-100 w-[100%]  lg:w-[40%] p-8 boxShadow mt-0 lg:-mt-32 z-50">
                    <h1 className=" text-3xl text-blue-500 font-bold ">Request A free Quote</h1>
                    <div className=" mt-4">
                        <input type="text" name="" placeholder="Full Name" className=" p-4 w-full outline-none mb-5  border-gray-400 border-[1px]"  id="" />
                        <input type="email" name="" placeholder="Email Address" className=" p-4 w-full outline-none mb-5  border-gray-400 border-[1px]"  id="" />
                        <input type="number" name="" placeholder="Contact Number" className=" p-4 w-full outline-none mb-5 border-gray-400 border-[1px]"  id="" />
                        <input type="text" name="" placeholder="Service Title" className=" p-4 w-full outline-none mb-5  border-gray-400 border-[1px]"  id="" />
                        <textarea type="text" name="" placeholder="Service Title" className=" p-4 w-full outline-none mb-5  border-gray-400 border-[1px]"  id="" rows={6}/>
                        <button className="  bg-[#4273C1] p-3 rounded-md text-center w-full text-white">Send Request</button>
                    </div>
                </div>
                <div className=" w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-3 text-center">
                    <h1 className=" text-slate-600">Visit our office</h1>
                    <h1 className=" text-4xl text-[#4273C1] font-bold">Our Main Office</h1>
                    <p className=" text-center lg:text-justify text-[15px] w-1/2">You are welcome to visit our office during office hour. Find details of our location and business hour below.</p>
                    <hr className=" border-[1px] w-full border-slate-100"/>

                    <div className=" flex flex-col gap-3">
                        <div className=" flex items-center gap-4">
                            <p>Address:</p>
                            <p>LaPorte, IN 46350</p>
                        </div>
                        <div className=" flex items-center gap-4">
                            <p>Phone:</p>
                            <p>(+977) 123456789</p>
                        </div>
                        <div className=" flex items-center gap-4">
                            <p>Business Hours:</p>
                            <p>Mon-Fri: 9am-5pm</p>
                        </div>
                        <div className=" flex items-center gap-2">
                            <p>Email:</p>
                            <p>abhayguptaak39@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RequestDemo