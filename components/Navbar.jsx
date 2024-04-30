"use client"
import { AlignJustify, Cross, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaHamburger, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";


const Navbar = () => {

  const [openNav,setOpenNav]=useState(false)
  const hanldeOpenNav=()=>{
    setOpenNav(!openNav)
  }

  return (
    <nav className=" w-full z-[999] ">
        <div className=" bg-[#34D4FD] px-6 py-2 flex items-center justify-between">
            <div className=" flex  items-center gap-4">
                <p className=" text-xs">Mon-Fri: 9AM-5 PM</p>
                <p className=" text-xs md:flex hidden">yourbusiness@business.com</p>
            </div>
            <div className=" flex items-center gap-3">
                <FaInstagram />
                <FaLinkedinIn />
                <FaWhatsapp />
            </div>
        </div>
        <div className=" flex mt-3 px-4 items-center justify-between">
          <div>
            <Image src="/next.svg" alt="logo" height={60} width={60} className=" w-full h-[30px]" />
          </div>
          <div>
            <ul className="  hidden lg:flex text-white font-bold  items-center gap-4">
              <Link href={"/"} className=" cursor-pointer">Home</Link>
              <Link href={"#about"} className=" cursor-pointer">About</Link>
              <Link href={"#projects"} className=" cursor-pointer">Projects</Link>
              <Link href={"#services"} className=" cursor-pointer">Services</Link>
              <Link href={"#contact"} className=" cursor-pointer">Contact</Link>
            </ul>
            <AlignJustify onClick={hanldeOpenNav}  className=" cursor-pointer text-white lg:hidden"/>
          </div>
          {
            openNav && (
              <div className=" fixed  left-0 min-h-screen bg-white top-0 w-full  overflow-hidden">
                <X onClick={hanldeOpenNav} className=" absolute cursor-pointer right-2 top-3"/>
                <ul className="  flex text-xl min-h-screen font-bold flex-col  items-center justify-center gap-10">
                    <Link href="/" className=" cursor-pointer">Home</Link>
                    <Link href="/about" className=" cursor-pointer">About</Link>
                    <Link href="/projects" className=" cursor-pointer">Projects</Link>
                    <Link href="/services" className=" cursor-pointer">Services</Link>
                    <Link href="/contact" className=" cursor-pointer">Contact</Link>
                </ul>
              </div>
            )
          }
        </div>
    </nav>
  )
}

export default Navbar