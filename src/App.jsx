import React, { useRef, useEffect } from "react";
import "./index.css"; // Make sure to import your custom CSS file
import styled from "styled-components";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import Resume from "./components/Resume";

const App = () => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const mainControl = useAnimation();

  useEffect(() => {
    if (isInview) {
      mainControl.start("visible");
    }
  }, [isInview]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <Main className="[&>*]:max-w-7xl [&>*]:mx-auto [&>*]:py-4 [&>*]:px-6 [&>*]:h-auto ">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          <Footer />
        </Main>
      </motion.div>
    </div>
  );
};

export default App;

const Main = styled.main`
  &:before {
    background: #1b1b1b;
    content: "";
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(currentColor 1px, transparent 1px),
      linear-gradient(to right, currentColor 1px, transparent 1px);
    background-size: 105px 100px;
    color: rgb(113 113 113 / 7%);
    position: fixed;
    z-index: -1;
    background-color: transparent;
    transition: all 0.5s linear;
  }

  &:after {
    background-image: radial-gradient(at 40% 40%, #1e90ff 0, transparent 50%),
      radial-gradient(at 90% 10%, #ff69b4 0, transparent 50%),
      radial-gradient(at 50% 95%, #00ffff 0, transparent 50%),
      radial-gradient(at 20% 30%, #32cd32 0, transparent 50%),
      radial-gradient(at 90% 90%, #ffff00 0, transparent 50%),
      radial-gradient(at 33% 50%, #ff4500 0, transparent 50%),
      radial-gradient(at 79% 53%, #800080 0, transparent 50%);
    position: fixed;
    content: "";
    z-index: -1;
    width: 100%;
    height: 100%;
    filter: blur(100px) saturate(100%);
    top: 0px;
    opacity: 0.1;
    transform: translateZ(0);
  }
`;
