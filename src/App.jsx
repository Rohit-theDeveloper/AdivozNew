import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import ScrollTopButton from './Component/ScrollTopButton'
import Footer from "./Component/Footer";
// import pages 

import Home from "./Pages/Home";
import About from "./Pages/About";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
        <Footer />
        <ScrollTopButton />
      </Router>
    </>
  );
}

export default App;
