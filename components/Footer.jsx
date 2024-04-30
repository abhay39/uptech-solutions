import { Clock, LocateIcon, Mail, PhoneCall } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className=" mt-4 ">
            <div className="bg-[#4273C1] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
                <Link href="/">
                    <Image src="/next.svg" alt="logo" height={100} width={100} className=" w-[100px] h-[100px]" />
                </Link>

                <div>
                    <h1 className=" text-2xl font-bold text-[#34D6FF]">Quick Links</h1>
                    <br />
                    <ul className=" flex text-white gap-4 flex-col font-semibold">
                        <Link href="#about">About Us</Link>
                        <Link href="#projects">Portfolio</Link>
                        <Link href="#testiomonials">Testimonial</Link>
                        <Link href="#services">Services</Link>
                        <Link href="#contact">Contact</Link>
                    </ul>
                </div>

                <div>
                    <h1 className=" text-2xl font-bold text-[#34D6FF]">Get in Touch</h1>
                    <br />
                    <ul className=" flex text-white gap-4 flex-col font-semibold">
                        <Link href="/about">Facebook</Link>
                        <Link href="/about">Instagram</Link>
                        <Link href="/about">Youtube</Link>
                        <Link href="/about">Twitter</Link>
                        <Link href="/about">Linkedin</Link>
                    </ul>
                </div>

                <div>
                    <h1 className=" text-2xl font-bold text-[#34D6FF]">Basic Info</h1>
                    <br />
                    <ul className=" flex text-white gap-4 flex-col font-semibold">
                        <p className=" flex cursor-pointer items-center gap-2"><LocateIcon size={16} /> LaPorte,In 46350</p>
                        <p className=" flex cursor-pointer items-center gap-2"><PhoneCall size={16} /> (+977)9876543210</p>
                        <p className=" flex cursor-pointer items-center gap-2"> <Mail size={16} /> yourbusiness@business.com</p>
                        <p className=" flex cursor-pointer items-center gap-2"> <Clock size={16} /> Mon-Fri: 9 AM-5 PM</p>
                    </ul>
                </div>
            </div>


            <div className=" bg-[#24437C] w-full text-white px-5 py-2">
                <p className=" text-center">Copyright &copy;All rights reserved. Designed by <Link href="/"><u>Abhay Kumar Gupta</u></Link> </p>
            </div>
        </footer>
    )
}

export default Footer