import React from 'react';
import './main.css';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import About from '@/components/home/About';
import Products from '@/components/home/Products';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';

const Home = () => {
  return (
    <>
      <div className='min-h-[90vh]'>
        <Hero />
        <Features />
        <Testimonials />
        <About />
        <Products />
        <Services />
      </div>
    </>
  )
}

export default Home