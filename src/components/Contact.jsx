import { Link } from "react-router-dom";
import Gotolink from "./gotolink";

function Contact() {
  return (
    <section className="min-h-[calc(100vh - 40vh)] flex items-center justify-center">
      <div className="max-w-4xl">
        <Link to="/projects">
          <h1 className="relative my-8 mx-0 uppercase tracking-[9.9px] text-gray-900 text-4xl font-bold">
            contact
          </h1>
        </Link>
        <article>
          <p className="text-sm mb-5">
            Don{"'"}t hesitate to reach out to me or drop an email anytime{" "}
          </p>
          <p className="text-sm mb-5">
            Reach me out at{" "}
            <a
              href="mailto:kawtarelka25@gmail.com"
              className="relative border-none font-extrabold text-black leading-5 hover:underline hover:text-blue-700"
              aria-label="Send an email"
            >
              kawtarelka25@gmail.com
            </a>
          </p>
          <p className="text-sm mt-5 mb-5">
            Thanks for your valuable time! Tschüss 👋{" "}
          </p>
        </article>

        {/* Uncomment this form if needed */}
        {/* 
        <form className="py-5">
          <div className="relative z-0 mb-6 mt-5 group w-full">
            <input
              type="text"
              name="floating_name"
              id="floating_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_name"
              className="peer-focus:font-bold absolute text-md text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 capitalize"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 mb-6 mt-5 group w-full">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-bold absolute text-md text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 capitalize"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 mb-6 mt-5 group w-full">
            <textarea
              name="floating_message"
              id="floating_message"
              rows="4"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_message"
              className="peer-focus:font-bold absolute text-md text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 capitalize"
            >
              Message
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-md px-5 py-3 mb-2 capitalize"
          >
            Send Message
          </button>
        </form>
        */}

        <Gotolink content={"Go Back Home."} linkpath={"/"} />
      </div>
    </section>
  );
}

export default Contact;
