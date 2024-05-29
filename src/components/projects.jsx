import { useState } from "react";
import Gotolink from "./gotolink";
import { Link } from "react-router-dom";

function Projects() {
  const [activeLink, setActiveLink] = useState("projects");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <section className=" min-h-[calc(100vh - 40vh)] flex items-center  justify-center">
      <div className="max-w-6xl">
        <a href="/projects">
          <h1 className="relative my-8 mx-0 uppercase tracking-[9.9px] text-gray-900 text-4xl font-bold">
            Projects
          </h1>
        </a>
        {/* navigation */}
        <div className="my-5">
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 lg:justify-center sm:justify-start capitalize">
            <li className="mr-2">
              <a
                href="#projects"
                className={`inline-block px-4 py-2 rounded-lg hover:text-gray-900 ${
                  activeLink === "projects"
                    ? "bg-gray-600 text-white hover:text-white"
                    : ""
                }`}
                onClick={() => handleLinkClick("projects")}
                aria-current="page"
              >
                projects
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#devTools"
                className={`inline-block px-4 py-2 rounded-lg hover:text-gray-900  ${
                  activeLink === "devTools"
                    ? "bg-gray-600 text-white hover:text-white"
                    : ""
                }`}
                onClick={() => handleLinkClick("devTools")}
              >
                dev tools
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#designs"
                className={`inline-block px-4 py-2 rounded-lg hover:text-gray-900  ${
                  activeLink === "designs"
                    ? "bg-gray-600 text-white hover:text-white"
                    : ""
                }`}
                onClick={() => handleLinkClick("designs")}
              >
                Designs
              </a>
            </li>
          </ul>
        </div>

        {/* projects */}
        {activeLink === "projects" && (
          <div className={`flex flex-wrap gap-5 items-center`} id="projects">
            {/* article 1 */}
            <article className="">
              <Link
                to="https://github.com/Kawkawa2/Top_Travaux"
                target="_blank"
              >
                <figure className="group relative lg:max-w-lg md:max-w-md sm:max-w-md transition-all duration-300 ">
                  <img
                    className="rounded-lg"
                    src="/image5.jpg"
                    alt="image description"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h1 className="font-bold text-xl mb-2">Craftmanship</h1>
                    <p className="text-gray-100 text-sm">
                      Design and development of a website connecting clients
                      with artisans, facilitating the search for professional
                      services for users.
                    </p>
                    <div className="flex mt-2">
                      <span className="bg-gray-500 text-gray-100 text-xs font-medium py-1 px-2.5 rounded-full mr-2">
                        Php-Laravel
                      </span>
                      <span className="bg-gray-500 text-gray-100 text-xs font-medium py-1 px-2.5 rounded-full mr-2">
                        MySQL
                      </span>
                      <span className="bg-gray-500 text-gray-100 text-xs font-medium py-1 px-2.5 rounded-full mr-2">
                        Html
                      </span>
                      <span className="bg-gray-500 text-gray-100 text-xs font-medium py-1 px-2.5 rounded-full mr-2">
                        Css-Bootstrap
                      </span>
                      <span className="bg-gray-500 text-gray-100 text-xs font-medium py-1 px-2.5 rounded-full mr-2">
                        Js-Jquery
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </Link>
            </article>

            {/* article 2 */}
            <article className="">
              <Link
                to="https://github.com/Kawkawa2/ISGI_Absence_management"
                target="_blank"
              >
                <figure className="group relative lg:max-w-lg md:max-w-md sm:max-w-md transition-all duration-300">
                  <img
                    className="rounded-lg"
                    src="/dashboard.PNG"
                    alt="image description"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h1 className="font-bold text-xl mb-2">
                      Absence management
                    </h1>
                    <p className="text-white text-sm">
                      Efficient absence management solution for ISGI Institute,
                      simplifying attendance tracking and record-keeping{" "}
                    </p>
                    <div className="flex mt-2">
                      <span className="bg-gray-500 text-gray-100 text-xs font-medium py-1 px-2.5 rounded-full mr-2">
                        Php-Laravel
                      </span>

                      <span className="bg-gray-500 text-gray-100 text-xs font-medium py-1 px-2.5 rounded-full mr-2">
                        MySQL
                      </span>
                      <span className="bg-gray-500 text-gray-100 text-xs font-medium py-1 px-2.5 rounded-full mr-2">
                        Js-Jquery
                      </span>
                    </div>
                    <div className="flex mt-2">
                      <span className="bg-gray-500 text-gray-100 text-xs font-medium py-1 px-2.5 rounded-full mr-2">
                        Html
                      </span>

                      <span className="bg-gray-500 text-gray-100 text-xs font-medium py-1 px-2.5 rounded-full mr-2">
                        Css-bootstrap
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </Link>
            </article>
          </div>
        )}

        {/* dev tools */}
        {activeLink === "devTools" && (
          <div className="flex flex-wrap gap-5 items-center" id="devTools">
            {/* React */}
            <article className="">
              <figure className="relative w-24 transition-all duration-300">
                <div className="bg-transparent p-4 rounded">
                  <i className="devicon-react-original colored text-7xl"></i>
                </div>
                <figcaption className="text-center mt-1">
                  <h1 className="font-bold text-md ">React Js</h1>
                </figcaption>
              </figure>
            </article>

            {/* Redux */}
            <article className="">
              <figure className=" relative w-24 transition-all duration-300 ">
                <div className="bg-transparent p-4 rounded">
                  <i className="devicon-redux-original colored text-7xl"></i>
                </div>
                <figcaption className="text-center mt-1">
                  <h1 className="font-bold text-md">Redux</h1>
                </figcaption>
              </figure>
            </article>

            {/* material ui */}
            <article className="">
              <figure className=" relative w-24 transition-all duration-300 ">
                <div className="bg-transparent p-4 rounded">
                  <i className="devicon-materialui-plain colored text-7xl"></i>
                </div>
                <figcaption className="text-center mt-1">
                  <h1 className="font-bold text-md">Material UI</h1>
                </figcaption>
              </figure>
            </article>

            {/* Node js */}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 ">
                <div className="bg-transparent p-4 rounded">
                  <i className="devicon-nodejs-plain colored text-7xl"></i>
                </div>
                <figcaption className="text-center mt-1">
                  <h1 className="font-bold text-md">Node Js</h1>
                </figcaption>
              </figure>
            </article>

            {/* Express js */}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 ">
                <div className="bg-transparent p-4 rounded">
                  <i className="devicon-express-original colored text-7xl"></i>
                </div>
                <figcaption className="text-center mt-1">
                  <h1 className="font-bold text-md">Express Js</h1>
                </figcaption>
              </figure>
            </article>

            {/*Php */}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 ">
                <div className="bg-transparent p-4 rounded">
                  <i className="devicon-php-plain colored text-7xl"></i>
                </div>
                <figcaption className="text-center mt-1">
                  <h1 className="font-bold text-md">Php</h1>
                </figcaption>
              </figure>
            </article>

            {/* Laravel */}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 ">
                <div className="bg-transparent p-4 rounded">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
                    className="text-7xl"
                  ></img>
                </div>
                <figcaption className="text-center mt-1">
                  <h1 className="font-bold text-md">Laravel</h1>
                </figcaption>
              </figure>
            </article>

            {/* python */}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 ">
                <div className="bg-transparent p-4 rounded">
                  <i class="devicon-python-plain colored text-7xl"></i>
                </div>
                <figcaption className="text-center mt-1">
                  <h1 className="font-bold text-md">Python</h1>
                </figcaption>
              </figure>
            </article>

            {/* Html */}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 ">
                <div className="bg-transparent p-4 rounded">
                  <i class="devicon-html5-plain colored text-7xl"></i>
                </div>
                <figcaption className="text-center mt-1">
                  <h1 className="font-bold text-md">HTML5</h1>
                </figcaption>
              </figure>
            </article>

            {/* Css */}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 ">
                <div className="bg-transparent p-4 rounded">
                  <i class="devicon-css3-plain colored text-7xl"></i>
                </div>
                <figcaption className="text-center mt-1">
                  <h1 className="font-bold text-md">Css3</h1>
                </figcaption>
              </figure>
            </article>
            {/* Javascript */}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 ">
                <div className="bg-transparent p-4 rounded">
                  <i class="devicon-javascript-plain colored text-7xl"></i>
                </div>
                <figcaption className="text-center mt-1">
                  <h1 className="font-bold text-md">Javascript</h1>
                </figcaption>
              </figure>
            </article>

            {/* TypeScript */}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 ">
                <div className="bg-transparent p-4 rounded">
                  <i class="devicon-typescript-plain colored text-7xl"></i>
                </div>
                <figcaption className="text-center mt-1">
                  <h1 className="font-bold text-md">TypeScript</h1>
                </figcaption>
              </figure>
            </article>

            {/* Jquery */}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 ">
                <div className="bg-transparent p-4 rounded">
                  <i class="devicon-jquery-plain colored text-7xl"></i>
                </div>
                <figcaption className="text-center mt-1">
                  <h1 className="font-bold text-md">Jquery</h1>
                </figcaption>
              </figure>
            </article>

            {/* bootstrap*/}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 ">
                <div className="bg-transparent p-4 rounded">
                  <i class="devicon-bootstrap-plain colored text-7xl"></i>
                </div>
                <figcaption className="text-center mt-1">
                  <h1 className="font-bold text-md">Bootstrap</h1>
                </figcaption>
              </figure>
            </article>

            {/* Tailwind */}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 ">
                <div className="bg-transparent p-4 rounded">
                  <i class="devicon-tailwindcss-plain colored text-7xl"></i>
                </div>
                <figcaption className="text-center mt-1">
                  <h1 className="font-bold text-md">TailwindCSS</h1>
                </figcaption>
              </figure>
            </article>
            {/* Mysql */}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 ">
                <div className="bg-transparent p-4 rounded">
                  <i class="devicon-mysql-plain colored text-7xl"></i>
                </div>
                <figcaption className="text-center mt-1">
                  <h1 className="font-bold text-md">MySQL</h1>
                </figcaption>
              </figure>
            </article>

            {/* Mongo DB */}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 ">
                <div className="bg-transparent p-4 rounded">
                  <i class="devicon-mongodb-plain colored text-7xl"></i>
                </div>
                <figcaption className="text-center mt-1">
                  <h1 className="font-bold text-md">MongoDB</h1>
                </figcaption>
              </figure>
            </article>
          </div>
        )}

        {/* designs */}
        {activeLink === "designs" && (
          <div className={`flex flex-wrap gap-5 items-center`} id="designs">
            {/* article 1 */}
            <article className="">
              <figure className="group relative lg:max-w-lg md:max-w-md sm:max-w-md transition-all duration-300 ">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="/figma1.PNG"
                    alt="image description"
                  />
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">ISGI UX-UI DESIGN</h1>
                  <p className="text-white text-sm">
                    Revamped ISGI Institute{"'"}s UX/UI for enhanced user
                    experiences. Modern, intuitive, and engaging design.
                  </p>
                  <div className="flex mt-2">
                    <span className="bg-gray-500 text-gray-100 text-xs font-medium py-1 px-2.5 rounded-full mr-2">
                      Figma
                    </span>
                  </div>
                </figcaption>
              </figure>
            </article>

            {/* article 2 */}
            <article className="">
              <figure className="group relative lg:max-w-lg md:max-w-md sm:max-w-md transition-all duration-300 ">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="/figma2.PNG"
                    alt="image description"
                  />
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">
                    Absence Management design
                  </h1>
                  <p className="text-white text-sm">
                    Crafted intuitive UX/UI for ISGI Institute{"'"}s absence
                    management, enhancing user experience and efficiency
                  </p>
                  <div className="flex mt-2">
                    <span className="bg-gray-500 text-gray-100 text-xs font-medium py-1 px-2.5 rounded-full mr-2">
                      figma
                    </span>
                  </div>
                </figcaption>
              </figure>
            </article>
          </div>
        )}
        <Gotolink content={"Lets Go To My Resume."} linkpath={"/resume"} />
      </div>
    </section>
  );
}

export default Projects;
