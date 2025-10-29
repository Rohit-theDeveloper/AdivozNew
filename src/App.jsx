import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import ScrollTopButton from "./Component/ScrollTopButton";
import Footer from "./Component/Footer";
import { CirclesWithBar } from "react-loader-spinner";
// import pages

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
          </Routes>
        </Suspense>

        <Footer />
        <ScrollTopButton />
      </Router>
    </>
  );
}

export default App;
