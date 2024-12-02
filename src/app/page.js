"use client"
import Process from '@/components/home/process';
import Hero from '../components/home/Hero' // Adjust the path as necessary
import Service from "@/components/home/Services";
import Experts from '@/components/home/Experts';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import Contact from '@/components/home/Contact';
import AboutUs from '@/components/home/AboutUs';
import TrustedBy from '@/components/home/TrustedBy';
import Footer from '@/components/layout/Footer';
import FloatingActionButton from '@/components/layout/FloatingActionButton';
import Header from '@/components/layout/Header';
import { useEffect, useState } from 'react';
import Loader from '@/components/layout/loader';


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Loader visible for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
     <div className="">
      <Header />
      <Hero />
      <TrustedBy />
      <AboutUs />
      <Service />
      <Process />
      {/* <Experts/>÷ */}
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingActionButton />
{loading && <Loader/> } 
    </div></>
  );
}
