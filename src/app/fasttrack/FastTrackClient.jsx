"use client";
import Container from "@/components/layout/Container";
import Contact from "@/components/home/Contact";
import Image from "next/image";
import { FaCheckCircle, FaUserCheck, FaGlobeAsia, FaArrowRight, FaQuestionCircle, FaEnvelope, FaRobot, FaBolt, FaDoorOpen, FaGift, FaHandHolding, FaSmileBeam, FaPlus, FaMinus, FaGlobe, FaPlaneDeparture, FaCogs, FaTachometerAlt, FaLock, FaHeart, FaShieldAlt } from "react-icons/fa";
import { FaRoute } from "react-icons/fa6";
import { FaIdCard, FaRegSmileBeam } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import PopupContactForm from "@/components/home/PopupContactForm";

const benefits = [
    { label: "Automated Process", icon: <FaCogs className="text-white text-3xl" /> },
    { label: "Faster Immigration Processing", icon: <FaTachometerAlt className="text-white text-3xl" /> },
    { label: "Dedicated e-gates", icon: <FaDoorOpen className="text-white text-3xl" /> },
    { label: "Free Service", icon: <FaGift className="text-white text-3xl" /> },
    { label: "Contactless", icon: <FaShieldAlt className="text-white text-3xl" /> },
    { label: "Hassle Free Travel", icon: <FaHeart className="text-white text-3xl" /> },
];

const stepsToRegister = [
    {
        step: "Step 1",
        desc: "Apply through the government. website - ",
        link: "https://ftittp.mha.gov.in/fti/",
        linkText: "https://ftittp.mha.gov.in/fti/",
        after: " & fill in the required details."
    },
    {
        step: "Step 2",
        desc: "After verification by the Bureau of Immigration, the approved passenger will receive an email or SMS to proceed."
    },
    {
        step: "Step 3",
        desc: "Proceed for biometric enrolment at any all India airport's dedicated counter or FRRO.",
    },
    {
        step: "Step 4",
        desc: "Submit biometric details to complete the registration process."
    },
];

const fastTrackSteps = [
    { icon: <FaRoute className="text-white text-4xl" />, text: "Proceed to the dedicated TTP e-gates installed at the Immigration area." },
    { icon: <FaIdCard className="text-white text-4xl" />, text: "Scan your passport and boarding pass at the first e-gate. If verified, proceed to the next e-gate." },
    { icon: <FaRegSmileBeam className="text-white text-4xl" />, text: "At the next e-gate, your face will be scanned. If verified, your emigration process is complete." },
];

const faqs = [
    {
        question: "Is the Trusted Traveller Program available at all terminals of all India airports and FFRO?",
        answer: "The service is currently available at select terminals of all India airports. Availability may vary by airport.",
    },
    {
        question: "Will the Trusted Traveller Program be available at other airports in India?",
        answer: "Currently, the Trusted Traveller Program is available at select all India airports. Expansion to more airports in India may be considered in the future by the authorities.",
    },
    {
        question: "How many Indian airports will feature the Trusted Traveller Program?",
        answer: "As of now, select all India airports feature the Trusted Traveller Program. Updates regarding inclusion of other airports will be announced by the government.",
    },
    {
        question: "How can I register for the Trusted Traveller Program?",
        answer: "You can register online by visiting the official website (www.ftittp.mha.gov) and filling in the required details. After verification, you will be notified to proceed for biometric enrolment at the FRRO or a dedicated counter at any all India airport.",
    },
    {
        question: "Is it only applicable to passengers travelling outside India?",
        answer: "Yes, the Trusted Traveller Program is primarily designed for international departing and arriving passengers at all India airports.",
    },
    {
        question: "What are the charges for the Trusted Traveller Program?",
        answer: "Currently, the Trusted Traveller Program is a free service and does not require any charges for registration or usage.",
    },
    {
        question: "Is this programme initiated only for Indian citizens?",
        answer: "No, the program is available for both Indian nationals and foreign nationals holding an OCI (Overseas Citizen of India) card.",
    },
    {
        question: "What should be the passport validity for the application?",
        answer: "Your passport must be valid for at least six months at the time of application for the Trusted Traveller Program.",
    },
    {
        question: "How many e-gates are dedicated to the Trusted Traveller Programme at all India airports and FFRO?",
        answer: "There are multiple dedicated e-gates for the Trusted Traveller Program at select terminals of all India airports, ensuring a smooth and fast immigration process.",
    },
];

export default function FastTrackClient() {
    const [showPopup, setShowPopup] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setShowPopup(true), 5000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <PopupContactForm show={showPopup} onClose={() => setShowPopup(false)} />
            <div className="font-sans">
                {/* Hero Section (full width, no Container) */}
                <section className="bg-gradient-to-r relative from-white to-red-50 py-24 lg:py-32 px-4 sm:px-6 lg:px-8 mb-8 w-full overflow-hidden min-h-[80vh]">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/fast/fast.jpg"
                            alt="Travelers at airport with luggage"
                            fill
                            className="object-cover opacity-0"
                            priority
                        />
                        {/* Subtle gradient overlay for better text contrast */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-red-50/40 to-white/60"></div>
                    </div>

                    {/* Decorative background elements matching your theme */}
                    <div className='absolute h-[300px] w-[380px] bg-red-100/70 rounded-tl-full blur-md bottom-0 right-0 hidden lg:block'></div>
                    <div className='absolute h-[200px] w-[200px] bg-red-50/70 rounded-full blur-lg top-10 left-10 hidden lg:block'></div>

                    {/* Content */}
                    <div className="relative z-10 mx-auto max-w-7xl">
                        <div className="flex items-center justify-center">

                            {/* Main Content Section - Centered */}
                            <div className="max-w-4xl mx-auto space-y-6 text-center">
                                {/* Icon */}
                                <div className="flex items-center justify-center mb-6">
                                    <div className="relative">
                                        <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100/90 backdrop-blur-sm shadow-xl relative">
                                            <FaGlobe className="text-red-600 text-4xl" />
                                            <FaPlaneDeparture className="text-red-500 text-xl absolute top-3 right-3 rotate-12" />
                                        </span>
                                    </div>
                                </div>

                                {/* Main heading matching your theme */}
                                <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
                                    <span className="text-red-600">FAST TRACK</span> IMMIGRATION
                                </h1>

                                <div className="text-2xl lg:text-3xl font-bold text-gray-700 mb-2">
                                    Trusted Traveller Program
                                </div>

                                <div className="text-lg text-gray-600 font-medium tracking-wide mb-6">
                                    (FTI-TTP)
                                </div>

                                {/* Subtitle */}
                                <p className="text-lg lg:text-xl text-gray-600 font-medium leading-relaxed">
                                    Skip the queues, save time and enjoy seamless immigration clearance at all India airports and FFRO.
                                </p>

                                {/* Call to action buttons matching your theme */}
                                <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center ">
                                    <motion.a
                                        className="bg-red-600 text-white py-3 px-8 rounded-full font-semibold inline-block hover:bg-red-700 transition-all duration-300 text-center"
                                        href="#contact-form"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Register Now
                                    </motion.a>
                                    <motion.a
                                        className="bg-white text-red-600 py-3 px-8 rounded-full font-semibold inline-block border-2 border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 text-center "
                                        href="#contact-form"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Learn More
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Program Overview Section - New dedicated section */}
                <section className="py-20 -mt-8 relative overflow-hidden">
                    <Container>
                        {/* Background decorative elements */}
                        <div className="absolute top-0 left-0 w-72 h-72 bg-red-50/40 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">
                                    <span className="text-red-600">Program</span> Overview
                                </h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    Learn everything about India&apos;s revolutionary Fast Track Immigration initiative
                                </p>
                            </div>

                            <div className="max-w-6xl mx-auto">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                                    {/* Left Content */}
                                    <motion.div
                                        className="h-full"
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-red-100/50 relative overflow-hidden h-full flex flex-col">
                                            {/* Top accent bar */}
                                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-red-600 to-red-500"></div>

                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                                                    <FaGlobe className="text-white text-2xl" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-gray-800">About FTI-TTP</h3>
                                            </div>

                                            <p className="text-gray-700 leading-relaxed text-lg mb-6 flex-grow">
                                                <span className="font-bold text-red-600">The Fast Track Immigration – Trusted Traveller Program (FTI-TTP)</span> is a groundbreaking government-led initiative designed to expedite immigration clearance for eligible travelers, making your journey smoother and faster.

                                            </p>

                                            <div className="bg-red-50/50 rounded-2xl p-6 mt-auto">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <FaCheckCircle className="text-red-600 text-xl" />
                                                    <span className="font-semibold text-gray-800">Government Initiative</span>
                                                </div>
                                                <p className="text-gray-600 leading-relaxed">
                                                    Officially launched in partnership with the Ministry of Home Affairs and major Indian airports, this program represents a collaborative effort between government agencies and aviation authorities to enhance India&apos;s position as a global aviation hub.
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Right Content - Key Features */}
                                    <motion.div
                                        className="space-y-6 h-full"
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                    >
                                        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl shadow-2xl p-8 text-white relative overflow-hidden flex-grow">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                                            <div className="relative z-10">
                                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                                    <FaBolt className="text-white text-2xl" />
                                                    Key Features
                                                </h3>

                                                <div className="space-y-4">
                                                    <div className="flex items-start gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                            <FaCheckCircle className="text-white text-xl" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <span className="font-semibold text-white block">Available for Indian nationals</span>
                                                            <span className="text-red-100 text-sm">and OCI cardholders</span>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-start gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                            <FaTachometerAlt className="text-white text-xl" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <span className="font-semibold text-white block">Faster, smoother experience</span>
                                                            <span className="text-red-100 text-sm">Skip traditional queues</span>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-start gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                            <FaShieldAlt className="text-white text-xl" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <span className="font-semibold text-white block">Secure process</span>
                                                            <span className="text-red-100 text-sm">Pre-verified passengers only</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Stats Card */}
                                        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-red-100/50">
                                            <div className="text-center">
                                                <div className="flex justify-center items-center gap-8">
                                                    <div className="text-center">
                                                        <div className="text-3xl font-bold text-red-600">5</div>
                                                        <div className="text-sm text-gray-600 font-medium">Years Validity</div>
                                                    </div>
                                                    <div className="w-px h-12 bg-red-200"></div>
                                                    <div className="text-center">
                                                        <div className="text-3xl font-bold text-red-600">FREE</div>
                                                        <div className="text-sm text-gray-600 font-medium">Service Cost</div>
                                                    </div>
                                                    <div className="w-px h-12 bg-red-200"></div>
                                                    <div className="text-center">
                                                        <div className="text-3xl font-bold text-red-600">24/7</div>
                                                        <div className="text-sm text-gray-600 font-medium">Availability</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Bottom CTA */}
                                <motion.div
                                    className="text-center mt-16"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-red-100/50">
                                        <FaHandHolding className="text-red-600 text-2xl" />
                                        <span className="text-lg font-semibold text-gray-800">
                                            Ready to experience the future of travel? Register today!
                                        </span>
                                        <FaArrowRight className="text-red-600 text-xl" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </Container>
                </section>

                <Container>
                    {/* Who Can Use & How It Works */}
                    <section className="py-16 -mt-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4">
                                <span className="text-red-600">Who Can</span> Use This Service?
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Discover if you&apos;re eligible for our exclusive Fast Track Immigration service
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 max-w-6xl mx-auto">
                            <motion.div
                                className="group relative"
                                whileHover={{ y: -12, scale: 1.02 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <div className="bg-gradient-to-br from-white via-white to-red-50/40 rounded-3xl p-8 relative overflow-hidden shadow-2xl border border-red-100/60 h-full">
                                    {/* Enhanced shadow layers */}
                                    <div className="absolute inset-0 rounded-3xl shadow-xl opacity-50"></div>
                                    <div className="absolute inset-0 rounded-3xl shadow-lg opacity-30"></div>

                                    {/* Top accent bar */}
                                    <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-red-500 via-red-600 to-red-500 rounded-t-3xl"></div>

                                    {/* Side glow effects */}
                                    <div className="absolute -left-1 top-8 bottom-8 w-1 bg-gradient-to-b from-red-200 via-red-300 to-red-200 rounded-full opacity-60"></div>
                                    <div className="absolute -right-1 top-8 bottom-8 w-1 bg-gradient-to-b from-red-200 via-red-300 to-red-200 rounded-full opacity-60"></div>

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-6 mb-8">
                                            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                                                <FaUserCheck className="text-white text-2xl" />
                                            </div>
                                            <h3 className="text-3xl font-bold text-gray-800">Eligible Users</h3>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4 p-5 bg-white/80 rounded-2xl backdrop-blur-sm shadow-lg border border-red-50">
                                                <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                                                    <FaCheckCircle className="text-red-600 text-xl" />
                                                </div>
                                                <span className="text-xl font-bold text-gray-800">Indian Nationals</span>
                                            </div>
                                            <div className="flex items-center gap-4 p-5 bg-white/80 rounded-2xl backdrop-blur-sm shadow-lg border border-red-50">
                                                <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                                                    <FaGlobeAsia className="text-red-600 text-xl" />
                                                </div>
                                                <span className="text-xl font-bold text-gray-800">Foreign Nationals with OCI Card</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="group relative"
                                whileHover={{ y: -12, scale: 1.02 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <div className="bg-gradient-to-br from-white via-white to-red-50/40 rounded-3xl p-8 relative overflow-hidden shadow-2xl border border-red-100/60 h-full">
                                    {/* Enhanced shadow layers */}
                                    <div className="absolute inset-0 rounded-3xl shadow-xl opacity-50"></div>
                                    <div className="absolute inset-0 rounded-3xl shadow-lg opacity-30"></div>

                                    {/* Top accent bar */}
                                    <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-red-500 via-red-600 to-red-500 rounded-t-3xl"></div>

                                    {/* Side glow effects */}
                                    <div className="absolute -left-1 top-8 bottom-8 w-1 bg-gradient-to-b from-red-200 via-red-300 to-red-200 rounded-full opacity-60"></div>
                                    <div className="absolute -right-1 top-8 bottom-8 w-1 bg-gradient-to-b from-red-200 via-red-300 to-red-200 rounded-full opacity-60"></div>

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-6 mb-8">
                                            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                                                <FaBolt className="text-white text-2xl" />
                                            </div>
                                            <h3 className="text-3xl font-bold text-gray-800">How It Works</h3>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="p-5 bg-white/80 rounded-2xl backdrop-blur-sm shadow-lg border border-red-50">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                                                        <span className="text-white text-sm font-bold">1</span>
                                                    </div>
                                                    <div>
                                                        <span className="font-bold text-red-600 text-lg">Pre-verification:</span>
                                                        <p className="text-gray-700 mt-2 text-base leading-relaxed">Eligible passengers are verified in advance</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-5 bg-white/80 rounded-2xl backdrop-blur-sm shadow-lg border border-red-50">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                                                        <span className="text-white text-sm font-bold">2</span>
                                                    </div>
                                                    <div>
                                                        <span className="font-bold text-red-600 text-lg">Fast Track Lanes:</span>
                                                        <p className="text-gray-700 mt-2 text-base leading-relaxed">Proceed to exclusive FTI-TTP immigration counters</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-5 bg-white/80 rounded-2xl backdrop-blur-sm shadow-lg border border-red-50">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                                                        <span className="text-white text-sm font-bold">3</span>
                                                    </div>
                                                    <div>
                                                        <span className="font-bold text-red-600 text-lg">Quick Clearance:</span>
                                                        <p className="text-gray-700 mt-2 text-base leading-relaxed">Experience faster processing with ease</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* First-of-its-Kind Initiative - Enhanced */}
                        <div className="relative">
                            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl shadow-2xl p-12 text-center relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-400/20 to-red-800/20"></div>
                                <div className="relative z-10">
                                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <FaGlobe className="text-white text-3xl" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4">A First-of-its-Kind Initiative</h3>
                                    <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
                                        All India airports are introducing the Fast Track Immigration – Trusted Traveller Program in partnership with the Government of India.
                                    </p>
                                </div>
                                <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full"></div>
                                <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-white/5 rounded-full"></div>
                            </div>
                        </div>
                    </section>

                    {/* Benefits */}
                    <section className="py-20 bg-gradient-to-br from-red-50/30 to-white rounded-3xl my-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-100/30 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-50/40 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">
                                    <span className="text-red-600">Amazing</span> Benefits
                                </h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    Experience the future of travel with our exclusive Fast Track Immigration program
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {benefits.map((b, i) => (
                                    <motion.div
                                        key={i}
                                        className="group relative"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        whileHover={{ y: -12 }}
                                    >
                                        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-red-100/50 h-full group-hover:shadow-2xl transition-all duration-300">
                                            <div className="relative p-8 text-center">
                                                <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                                    {b.icon}
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight">{b.label}</h3>
                                                <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto group-hover:w-20 transition-all duration-300"></div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="text-center">
                                <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-red-100/50">
                                    <FaSmileBeam className="text-red-600 text-2xl" />
                                    <span className="text-lg font-semibold text-gray-800">
                                        Get ready to travel smarter and enjoy the benefits of this exclusive fast-track program.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Eligibility Criteria */}
                    <section className="py-16">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">
                                <span className="text-red-600">Eligibility</span> Criteria
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Important requirements you need to meet for program registration
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <motion.div
                                className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl shadow-2xl p-8 text-white relative overflow-hidden"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                                        <FaCheckCircle className="text-white text-2xl" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Passport Validity</h3>
                                    <p className="text-red-100 text-lg leading-relaxed">
                                        Applicants must ensure that their passport is valid for at least six months when applying for the Trusted Traveller Program.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-red-100/50 relative overflow-hidden"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-100/30 rounded-full blur-xl"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                                        <FaCheckCircle className="text-red-600 text-2xl" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Registration Validity</h3>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        The registration remains valid for up to 5 years or until the passport&apos;s expiration, whichever occurs first.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Steps to Register */}
                    <section className="py-20 bg-gradient-to-br from-red-50/20 to-white rounded-3xl my-16 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-48 h-48 bg-red-100/20 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-50/30 rounded-full blur-2xl"></div>

                        <div className="relative z-10">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">
                                    <span className="text-red-600">Registration</span> Process
                                </h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Follow these simple steps to register for the Trusted Traveller Program
                                </p>
                            </div>

                            <div className="max-w-4xl mx-auto">
                                <div className="relative">
                                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-red-600 rounded-full hidden md:block"></div>
                                    <div className="space-y-8">
                                        {stepsToRegister.map((step, i) => (
                                            <motion.div
                                                key={i}
                                                className="relative"
                                                initial={{ opacity: 0, x: -50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                            >
                                                <div className="flex items-start gap-8">
                                                    <div className="relative z-10">
                                                        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl">
                                                            <span className="text-white text-xl font-bold">{i + 1}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-red-100/50">
                                                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.step}</h3>
                                                        <p className="text-gray-700 text-lg leading-relaxed">
                                                            {step.desc}
                                                            {step.link && (
                                                                <a href={step.link} target="_blank" rel="noopener noreferrer" className="text-red-600 underline font-semibold hover:text-red-700 transition-colors">
                                                                    {step.linkText}
                                                                </a>
                                                            )}
                                                            {step.after}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Avail Benefits Steps */}
                    <section className="py-20">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">
                                <span className="text-red-600">How to Use</span> Fast Track
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Simple steps to enjoy your Fast Track Immigration experience
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {fastTrackSteps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    className="group relative"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    whileHover={{ y: -8 }}
                                >
                                    <div className="bg-gradient-to-br from-white to-red-50/30 backdrop-blur-sm rounded-3xl shadow-xl p-10 text-center border border-red-100/50 h-full group-hover:shadow-2xl transition-all duration-300">
                                        <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            {step.icon}
                                        </div>
                                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-red-600 text-xl font-bold">{idx + 1}</span>
                                        </div>
                                        <p className="text-gray-800 font-medium leading-relaxed font-sans">{step.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="py-20 bg-gradient-to-br from-red-50/20 to-white rounded-3xl my-16 relative overflow-hidden -mb-12">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-red-100/20 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-50/30 rounded-full blur-2xl"></div>

                        <div className="relative z-10">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">
                                    <span className="text-red-600">Frequently</span> Asked Questions
                                </h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Get answers to the most common questions about the Fast Track Immigration program
                                </p>
                            </div>
                            <FAQAccordion faqs={faqs} />
                        </div>
                    </section>
                </Container>


                <Container>
                    {/* Support */}
                    <section className="py-12 -mt-20">
                        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl shadow-2xl p-8 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-400/20 to-red-800/20"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <FaEnvelope className="text-white text-2xl" />
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-3">Need Help?</h2>
                                <p className="text-lg text-red-100 mb-6 max-w-2xl mx-auto">
                                    Our support team is here to assist you with the Trusted Traveller Program
                                </p>
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 max-w-md mx-auto">
                                    <h3 className="text-lg font-bold text-white mb-2">Contact Support</h3>
                                    <a href="mailto:rocketsinghentps@gmail.com" className="text-red-200 hover:text-white font-bold text-base transition-colors">
                                        rocketsinghentps@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full"></div>
                            <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-white/5 rounded-full"></div>
                        </div>
                    </section>
                </Container>
                {/* Contact Section */}

                <div id="contact-form">
                    <Contact />
                </div>

            </div>
        </>
    );
}

// FAQAccordion: only one open at a time
function FAQAccordion({ faqs }) {
    const [openIdx, setOpenIdx] = useState(null);
    // If odd, add a dummy placeholder for alignment
    const faqsWithPlaceholder = faqs.length % 2 === 1 ? [...faqs, { placeholder: true }] : faqs;
    return (
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:flex-wrap gap-8">
            {faqsWithPlaceholder.map((faq, idx) => (
                <div key={idx} className="flex-1 min-w-[320px] max-w-[500px]">
                    {faq.placeholder ? (
                        <div className="invisible" />
                    ) : (
                        <FAQItem
                            faq={faq}
                            open={openIdx === idx}
                            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}

function FAQItem({ faq, open, onClick }) {
    return (
        <motion.div
            className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-red-100/50 transition-all duration-300 overflow-hidden ${open ? 'shadow-2xl border-red-200/50' : 'hover:shadow-xl hover:border-red-200/30'
                }`}
            whileHover={{ y: -2 }}
            layout
        >
            <button
                className="w-full text-left p-8 focus:outline-none"
                onClick={onClick}
            >
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-800 pr-4 leading-relaxed">
                        {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${open ? 'bg-red-600' : 'bg-red-100'
                        }`}>
                        {open ?
                            <FaMinus className="w-4 h-4 text-white" /> :
                            <FaPlus className="w-4 h-4 text-red-600" />
                        }
                    </div>
                </div>
            </button>
            <AnimatePresence initial={false}>
                {open && faq.answer && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-8 pb-8 text-gray-700 leading-relaxed">
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>

    );
} 
