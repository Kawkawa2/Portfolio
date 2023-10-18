import React from "react";
import { Link } from "react-router-dom";
import Gotolink from "./gotolink";

function Resume() {
  return (
    <section className=" min-h-[calc(100vh - 40vh)] flex items-center justify-center">
      <div className="max-w-4xl">
        <a href="/projects">
          <h1 className="relative my-8 mx-0 uppercase tracking-[9.9px] text-gray-900 text-4xl font-bold">
            resume
          </h1>
        </a>
        <article>
          <p className=" text-sm">
            Contact me using my{" "}
            <Link
              to="/contact"
              aria-label="Go to Contact Page"
              className="relative border-none font-extrabold text-black  leading-5 hover:underline hover:text-blue-700"
            >
              Contact page
            </Link>{" "}
            or{" "}
            <Link
              to="/resume"
              aria-label="download resume"
              className="relative border-none font-extrabold text-black  leading-4 hover:underline hover:text-blue-700"
            >
              Download
            </Link>{" "}
            the resume.{" "}
          </p>
        </article>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 0,
            paddingTop: "141.4286%",
            paddingBottom: 0,
            boxShadow: "0 2px 8px 0 rgba(63, 69, 81, 0.16)",
            marginTop: "1.6em",
            marginBottom: "0.9em",
            overflow: "hidden",
            borderRadius: "8px",
            willChange: "transform",
          }}
        >
          <iframe
            loading="lazy"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              border: "none",
              padding: 0,
              margin: 0,
            }}
            src="https://www.canva.com/design/DAFsUd94XBQ/view?embed"
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
