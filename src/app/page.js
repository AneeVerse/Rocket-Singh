import Process from '@/components/home/process';
import Hero from '../components/home/Hero' // Adjust the path as necessary
import Service from "@/components/home/Services";
import Experts from '@/components/home/Experts';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import Contact from '@/components/home/Contact';
import AboutUs from '@/components/home/AboutUs';


export default function Home() {
  return (
    <div className="">
      <Hero />
      <AboutUs/>
      <Service />
      <Process/>
      {/* <Experts/> */}
      <Testimonials/>
      <FAQ/>
      <Contact/>
     
    </div>
  );
}
