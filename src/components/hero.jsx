import { Link } from "react-router-dom";
import "./style.css";
import { motion } from "framer-motion";
import Gotolink from "./gotolink";

function Hero() {
  return (
    <section className=" min-h-[calc(100vh - 40vh)] flex items-center justify-center ">
      <div className="max-w-4xl">
        <a href="/">
          <motion.h1
            className="relative my-8 mx-0 uppercase tracking-[9.9px] text-gray-900 text-4xl font-medium intro_text"
            initial={{ opacity: 0, y: -20, textShadow: "0px 0px 0px #fca5a5" }}
            animate={{
              opacity: 1,
              y: 0,
              textShadow: "0px 6px 12px #fca5a5", // Change the text shadow color to gray
              transition: {
                duration: 1,
                delay: 1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          >
            I&apos;m Kawkawa
          </motion.h1>
        </a>
        <p className="mb-1 font-normal text-gray-700 text-base leading-loose">
          Your friendly kawkawa full-stack wizard, conjuring flawless links
          between Laravel&apos;s backend fascination and React&apos;s frontend
          enchantment. JavaScript is my spellbook, where I bring ideas to life
          with lines of code, as I specialize in the MERN stack. I&apos;m your
          go-to developer for creating user-friendly interfaces or building
          solid backend systems.{" "}
        </p>
        <p className="mb-1 font-normal text-gray-700 text-base leading-loose">
          While coding is my area of expertise, I also like outdoor adventures
          and indoor coding marathons for the right balance of work and play. I
          love minimalism and find elegance in simplicity and structure, which I
          incorporate into every project I work on.
        </p>{" "}
        <p className="mb-1 font-normal text-gray-700 text-base leading-loose">
          Feel free to explore my latest{" "}
          <Link
            to="/projects"
            aria-label="Go to Projects Page"
            className="relative border-none font-extrabold text-black text-base uppercase leading-5 hover:underline hover:text-blue-700"
          >
            Projects
          </Link>{" "}
          , where I&apos;ve transformed concepts into captivating digital
          realities.
        </p>
        <p className="mb-1 font-normal text-gray-700 text-base leading-loose">
          Interested in collaborating? Don&apos;t hesitate to reach out via my{" "}
          <Link
            to="/contact"
            aria-label="Go to Contact Page"
            className="relative border-none font-extrabold text-black text-base uppercase leading-5 hover:underline hover:text-blue-700"
          >
            Contact Me
          </Link>{" "}
          page. Let&apos;s join forces and create something extraordinary
          together!{" "}
        </p>
        <Gotolink content={"See More About Me."} linkpath={"/about"} />
      </div>
    </section>
  );
}

export default Hero;
