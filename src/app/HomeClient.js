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
import FloatingActionButton from '@/components/layout/FloatingActionButton';
import PopupContactForm from "@/components/home/PopupContactForm";
import { useEffect, useState } from 'react';
import Loader from '@/components/layout/loader';

export default function HomeClient() {
    const [loading, setLoading] = useState(true);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Loader visible for 2 seconds
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setShowPopup(true), 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <PopupContactForm show={showPopup} onClose={() => setShowPopup(false)} />
            <div className="">
                <Hero />
                <TrustedBy />
                <AboutUs />
                <Service />
                <Process />
                {/* <Experts/>÷ */}
                <Testimonials />
                <FAQ />
                <Contact />
                <FloatingActionButton />
                {loading && <Loader />}
            </div></>
    );
}
