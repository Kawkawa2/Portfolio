import { Link } from "react-router-dom";
import Gotolink from "./gotolink";

function Resume() {
  return (
    <section className="min-h-[calc(100vh - 40vh)] flex items-center justify-center">
      <div className="max-w-4xl">
        <Link to="/projects">
          <h1 className="relative my-8 mx-0 uppercase tracking-[9.9px] text-gray-900 text-4xl font-bold">
            resume
          </h1>
        </Link>
        <article>
          <p className="text-sm">
            Contact me using my{" "}
            <Link
              to="/contact"
              aria-label="Go to Contact Page"
              className="relative border-none font-extrabold text-black leading-5 hover:underline hover:text-blue-700"
            >
              Contact page.
            </Link>
          </p>
        </article>
        <div className="relative w-full pt-[141.4286%] shadow-md mt-6 mb-3.5 overflow-hidden rounded-lg will-change-transform">
          <iframe
            loading="lazy"
            className="absolute w-full h-full top-0 left-0 border-none p-0 m-0"
            src="https://www.canva.com/design/DAGGai9C6dQ/iFUJbUSF0On28tTu9FEACw/view?embed"
            allowFullScreen
            allow="fullscreen"
          ></iframe>
        </div>
        <Gotolink
          content={"Are you now persuaded to get in touch with me?"}
          linkpath={"/contact"}
        />
        
      </div>
    </section>
  );
}

export default Resume;
