import React from 'react'
import Logo from '../images/logo.svg'

const Header = () => {
    return (
        <div className="">
            <a className="flex  items-center" href="#">
                <img className="block h-12 w-auto mr-2" src={Logo} alt="Logo" />
                <div className="text-3xl hidden md:block">
                    <span className="bg-gradient-to-t   from-[#098F8A] font-extrabold font-baloo2 text-5xl to-white bg-clip-text text-transparent">Grahak Konnect</span>
                </div>
            </a>
        </div>
    )
}

export default Header