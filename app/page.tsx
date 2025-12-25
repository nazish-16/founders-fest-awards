import { Hero } from "@/components/Hero";
import { NavbarDemo } from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import SocialMediaVideos from "@/components/SocialMediaVideos";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <NavbarDemo/>
      <Hero/>
      <About/>
      <SocialMediaVideos/>
      <CTA/>
      <Footer/>
    </div>
  );
}
