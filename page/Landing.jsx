import AboutCompany from "@/components/AboutCompany"
import FeaturedProjects from "@/components/FeaturedProjects"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import OurServices from "@/components/OurServices"
import RequestDemo from "@/components/RequestDemo"
import Testimonials from "@/components/Testimonials"
import { ArrowUp } from "lucide-react"
import Link from "next/link"

const Landing = () => {
  return (
    <main>
      <HeroSection />
      <AboutCompany />
      <OurServices />
      <FeaturedProjects />
      <Testimonials />
      <RequestDemo />
      <Footer />
      <Link href="#home" className=" fixed bottom-4 right-3 cursor-pointer bg-white p-2 rounded-lg">
        <ArrowUp />
      </Link>
    </main>
  )
}

export default Landing