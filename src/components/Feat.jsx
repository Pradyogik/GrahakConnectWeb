import React from 'react';

const Feat = () => {
    return (
        <div>
            <h2 className="text-center text-4xl text-[#006A66] font-lato font-bold mb-16">Features of Grahak Connect</h2>
            <div className="flex flex-wrap font-lato text-xl font-medium text-center text-[#098F8A] justify-center gap-8 p-4">
                <div className="flex justify-center rounded-2xl font-medium items-center border h-20 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 bg-[#B8E1E2]">
                    Multilingual Customer Support
                </div>
                <div className="flex justify-center rounded-2xl items-center border h-20 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 bg-[#B8E1E2]">
                    Multi-channel Support
                </div>
                <div className="flex justify-center rounded-2xl items-center border h-20 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 bg-[#B8E1E2]">
                    Analytics and Reporting
                </div>
                <div className="flex justify-center rounded-2xl items-center border h-20 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 bg-[#B8E1E2]">
                    Integration with Seller Backend Systems
                </div>
            </div>
            <div className="flex flex-wrap text-center text-xl font-lato font-medium text-[#098F8A] justify-center gap-8 p-4">
                <div className="flex justify-center rounded-2xl items-center border h-20 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 bg-[#B8E1E2]">
                    Automated Ticketing System
                </div>
                <div className="flex justify-center rounded-2xl items-center border h-20 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 bg-[#B8E1E2]">
                    AI-driven Query Management
                </div>
            </div>
            <div className="flex flex-wrap text-center text-xl font-lato font-medium text-[#098F8A] justify-center gap-4 p-4">
                <div className="flex justify-center rounded-2xl items-center border h-20 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 bg-[#B8E1E2]">
                    Customizable Predefined Responses
                </div>
            </div>
        </div>
    );
};

export default Feat;
