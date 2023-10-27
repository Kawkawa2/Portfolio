import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="">
      <footer className="sm:flex sm:items-center sm:justify-between mt-12">
        <p className="mb-4 text-sm text-center text-gray-500  sm:mb-0">
          &copy; 2023{" "}
          <Link
            to="/"
            aria-label="Go to home Page"
            className="hover:underline"
            target="_blank"
          >
            kawkawa
          </Link>
          . All rights reserved.
        </p>
        <div className="flex justify-center items-center space-x-2">
          {/* facebook link */}
          <Link
            to="https://web.facebook.com/kawtare.el.25"
            aria-label="Visit us on Facebook"
            data-tooltip-target="tooltip-facebook"
            target="_blank"
            className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900"
          >
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
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

          {/* linkedin link */}
          <Link
            to="https://www.linkedin.com/in/kawtar-el-kazdir-1991b3224/"
            aria-label="Visit us on Linkedin"
            data-tooltip-target="tooltip-linkedin"
            target="_blank"
            className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer   hover:text-gray-900 "
          >
            <svg
              fill="currentColor"
              className="w-5 h-5"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="-143 145 500 500"
              xml:space="preserve"
            >
              <path
                d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9
                V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7
                C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6
                c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z
                "
              />
            </svg>
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

          {/* github link */}
          <Link
            to="https://github.com/Kawkawa2"
            aria-label="Visit us on Github"
            data-tooltip-target="tooltip-github"
            target="_blank"
            className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer   hover:text-gray-900 "
          >
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
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
        </div>
      </footer>
    </div>
  );
}

export default Footer;
