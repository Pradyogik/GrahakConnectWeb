import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Heroimg from "../images/hero.svg";

const Hero = () => {
    return (
        <section className="pt-20 md:pt-40">
            <div className="container mx-auto px-6 lg:flex">

                <div className="text-center lg:text-left lg:py-8 lg:w-1/2 flex flex-col justify-center">
                    <h1 className="text-4xl text-[#098F8A] lg:text-5xl xl:text-6xl font-bold font-lato leading-none">
                        Break Language Barriers,
                        Build Stronger Connections
                        with customers
                    </h1>
                    <p className="text-xl lg:text-2xl mt-6 py-0 text-[#098F8A] font-lato">
                        Multilingual, efficient query management, data-driven insights for growth
                    </p>
                    <p className="mt-8 mb-4 font-bold font-lato md:mt-12">
                        {/* Change button to Link and specify the to prop */}
                        <Link
                            to="/Signup" // Specify the URL of the onboarding page
                            className="py-4 w-2/4 text-sm lg:text-2xl lg:w-1/4 rounded-xl px-8
                            bg-[#098F8A]
                            hover:bg-teal-600
                            text-white"
                        >
                            Try now
                        </Link>
                    </p>
                </div>
                <div className="lg:w-1/2">
                    <img src={Heroimg} alt="hero" className="mx-auto lg:mx-0" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
