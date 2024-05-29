import { Link } from "react-router-dom";
import FacebookIcon from "../assets/facebook.svg";
import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import MailIcon from "../assets/mail.svg";

function Footer() {
  return (
    <div className="">
      <footer className="mt-5">
        <div className="flex justify-start items-start space-x-2">
          {/* github link */}
          <Link
            to="https://github.com/Kawkawa2"
            aria-label="Visit us on Github"
            data-tooltip-target="tooltip-github"
            target="_blank"
            className="inline-flex justify-center pr-2 text-gray-500 rounded-lg cursor-pointer   hover:text-gray-900 "
          >
            <img src={GithubIcon} alt="Facebook" width="20" height="20" />

            <span className="sr-only">Github</span>
          </Link>
          <div
            id="tooltip-github"
            role="tooltip"
            className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip "
          >
            Visit us on GitHub
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          {/* linkedin link */}
          <Link
            to="https://www.linkedin.com/in/kawtar-el-kazdir/"
            aria-label="Visit us on Linkedin"
            data-tooltip-target="tooltip-linkedin"
            target="_blank"
            className="inline-flex justify-center pr-2 text-gray-500 rounded-lg cursor-pointer   hover:text-gray-900 "
          >
            <img src={LinkedinIcon} alt="Facebook" width="20" height="20" />

            <span className="sr-only">Linkedin</span>
          </Link>
          <div
            id="tooltip-linkedin"
            role="tooltip"
            className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip "
          >
            Visit us on Linkedin
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          {/* Gmail link */}
          <a
            href="mailto:kawtarelka25@gmail.com"
            className="inline-flex justify-center pr-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900"
          >
            <img src={MailIcon} alt="Facebook" width="20" height="20" />
            <span className="sr-only">Gmail</span>
          </a>
          <div
            id="tooltip-facebook"
            role="tooltip"
            className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip "
          >
            Get in touch with me
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          {/* facebook link */}
          <Link
            to="https://web.facebook.com/kawtare.el.25"
            aria-label="Visit us on Facebook"
            data-tooltip-target="tooltip-facebook"
            target="_blank"
            className="inline-flex justify-center pr-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900"
          >
            <img src={FacebookIcon} alt="Facebook" width="20" height="20" />
            <span className="sr-only">Facebook</span>
          </Link>
          <div
            id="tooltip-facebook"
            role="tooltip"
            className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip "
          >
            Visit us on Facebook
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
