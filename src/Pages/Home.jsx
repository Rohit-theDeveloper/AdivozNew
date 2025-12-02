import React, { Suspense, lazy } from "react";
import Hero from "../Component/Hero";
const AboutUs = lazy(() => import("../Component/AboutUs"));
const FeaturesSection = lazy(() => import("../Component/Featuresection"));
const WorkProcesss = lazy(() => import("../Component/WorkProcesss"));
const Slider = lazy(() => import("../Component/Slider"));
const OurProcess = lazy(() => import("../Component/OurProcess"));
const Testimonial = lazy(() => import("../Component/Testimonial"));

import { CirclesWithBar } from "react-loader-spinner";

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-[70vh]">
            <CirclesWithBar
              height="100"
              width="100"
              color="#0e1029ff"
              outerCircleColor="#094ac2ff"
              innerCircleColor="#020b25ff"
              barColor="#0c074eff"
              ariaLabel="loading"
              visible={true}
            />
          </div>
        }
      >
        <AboutUs />
        <FeaturesSection />
        <WorkProcesss />
        <Slider />
        <OurProcess />
        <Testimonial />
      </Suspense>
    </>
  );
}
