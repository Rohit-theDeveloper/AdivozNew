import React from 'react'
import Hero from '../Component/Hero'
import AboutUs from '../Component/AboutUs'
import FeaturesSection from '../Component/Featuresection'
import WorkProcess from '../Component/WorkProcess'
import WorkProcesss from '../Component/WorkProcesss'
import Slider from '../Component/Slider'
import OurProcess from '../Component/OurProcess'
import Testimonial from '../Component/Testimonial'
import NewsArticles from '../Component/NewsArticles'
import SubscribeSection from '../Component/SubscribeSection'


export default function Home() {
  return (
    <>
     <Hero/>
     <AboutUs/>
     <FeaturesSection />
     {/* <WorkProcess /> */}
     <WorkProcesss/>
     <Slider/>
     <OurProcess/>
     <Testimonial />
     <NewsArticles />
     <SubscribeSection />
    </>
  )
}
