import React from 'react'
import Hero from '../components/hero'
import Navbar from '../shared/Navbar'
import Why from '../components/Why'
import Feat from '../components/Feat'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Why />
            <Feat />
        </div>
    )
}

export default Home