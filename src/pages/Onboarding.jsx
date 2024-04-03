import React from 'react'
import OnBoardingPages from '../components/Onboarding/OnBoardingPages'
import Header from '../shared/Header'

const Onboarding = () => {
   
    document.body.style.overflow = 'hidden';

    return (
        <div>
            <div className="flex bg-[#B8E1E2] bg-opacity-40 justify-center items-start">
                <Header />
            </div>
            <OnBoardingPages />
        </div>
    )
}

export default Onboarding
