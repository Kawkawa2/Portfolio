import React, { useState } from "react";
import Gotolink from "./gotolink";

function Projects() {
  const [activeLink, setActiveLink] = useState("projects");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <section className=" min-h-[calc(100vh - 40vh)] flex items-center  justify-center">
      <div className="max-w-4xl">
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
              <figure className="group relative lg:max-w-md md:max-w-lg sm:max-w-md transition-all duration-300 cursor-pointer">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="/image4.jpg"
                    alt="image description"
                  />
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">Craftmanship</h1>
                  <p className="text-gray-200 text-sm">
                    Design and development of a website connecting clients with
                    artisans, facilitating the search for professional services
                    for users.
                  </p>
                  <div className="flex mt-2">
                    <span className="bg-gray-500 text-gray-100 text-xs font-medium py-1 px-2.5 rounded-full mr-2">
                      Laravel
                    </span>
                    <span className="bg-gray-500 text-gray-100 text-xs font-medium py-1 px-2.5 rounded-full mr-2">
                      Jquery-Js
                    </span>
                    <span className="bg-gray-500 text-gray-100 text-xs font-medium py-1 px-2.5 rounded-full mr-2">
                      bootstrap
                    </span>
                    <span className="bg-gray-500 text-gray-100 text-xs font-medium py-1 px-2.5 rounded-full mr-2">
                      Html-Css
                    </span>
                    <span className="bg-gray-500 text-gray-100 text-xs font-medium py-1 px-2.5 rounded-full mr-2">
                      MySQL
                    </span>
                  </div>
                </figcaption>
              </figure>
            </article>

            {/* article 2 */}
            <article className="">
              <figure className="group relative lg:max-w-sm md:max-w-md sm:max-w-md transition-all duration-300 cursor-pointer">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="/image-5.jpg"
                    alt="image description"
                  />
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">Absence management</h1>
                  <p className="text-gray-200 text-sm">
                    Efficient absence management solution for ISGI Institute,
                    simplifying attendance tracking and record-keeping{" "}
                  </p>
                  <div className="flex mt-2">
                    <span className="bg-gray-500 text-gray-100 text-xs font-medium py-1 px-2.5 rounded-full mr-2">
                      Laravel
                    </span>
                    <span className="bg-gray-500 text-gray-100 text-xs font-medium py-1 px-2.5 rounded-full mr-2">
                      Php
                    </span>
                    <span className="bg-gray-500 text-gray-100 text-xs font-medium py-1 px-2.5 rounded-full mr-2">
                      Jquery-Js
                    </span>
                    <span className="bg-gray-500 text-gray-100 text-xs font-medium py-1 px-2.5 rounded-full mr-2">
                      bootstrap
                    </span>
                  </div>
                  <div className="flex mt-2">
                    <span className="bg-gray-500 text-gray-100 text-xs font-medium py-1 px-2.5 rounded-full mr-2">
                      Html-Css
                    </span>

                    <span className="bg-gray-500 text-gray-100 text-xs font-medium py-1 px-2.5 rounded-full mr-2">
                      MySQL
                    </span>
                  </div>
                </figcaption>
              </figure>
            </article>
          </div>
        )}

        {/* drawers for projects start*/}

        {/* drawer for projects end */}

        {/* dev tools */}
        {activeLink === "devTools" && (
          <div className="flex flex-wrap gap-5 items-center" id="devTools">
            {/* dev tool 2 */}
            <article className="">
              <figure className="group relative w-40 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="/react .png"
                    alt="image description"
                  />
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">React Js</h1>
                </figcaption>
              </figure>
            </article>

            {/* dev tool 3 */}
            <article className="">
              <figure className="group relative w-40 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="/node.png"
                    alt="image description"
                  />
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">Node Js</h1>
                </figcaption>
              </figure>
            </article>

            {/* dev tool 4 */}
            <article className="">
              <figure className="group relative w-40 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="/express.png"
                    alt="image description"
                  />
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">Express Js</h1>
                </figcaption>
              </figure>
            </article>

            {/* dev tool 5 */}
            <article className="">
              <figure className="group relative w-40 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="/js.png"
                    alt="image description"
                  />
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">Javascript</h1>
                </figcaption>
              </figure>
            </article>

            {/* dev tool 6 */}
            <article className="">
              <figure className="group relative w-40 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="/jquery.png"
                    alt="image description"
                  />
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">Jquery</h1>
                </figcaption>
              </figure>
            </article>
            {/* dev tool 1 */}
            <article className="">
              <figure className="group relative w-40 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="/laravel-2.png"
                    alt="image description"
                  />
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">Laravel</h1>
                </figcaption>
              </figure>
            </article>

            {/* dev tool 7 */}
            <article className="">
              <figure className="group relative w-40 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="/php.png"
                    alt="image description"
                  />
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">Php</h1>
                </figcaption>
              </figure>
            </article>
            {/* dev tool 10 */}
            <article className="">
              <figure className="group relative w-40 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="/python.png"
                    alt="image description"
                  />
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">Python</h1>
                </figcaption>
              </figure>
            </article>
            {/* dev tool 7 */}
            <article className="">
              <figure className="group relative w-40 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="/myqsl.png"
                    alt="image description"
                  />
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">Mysql</h1>
                </figcaption>
              </figure>
            </article>
            {/* dev tool 7 */}
            <article className="">
              <figure className="group relative w-40 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="/mongodb.png"
                    alt="image description"
                  />
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">Mongo DB</h1>
                </figcaption>
              </figure>
            </article>

            {/* dev tool 8 */}
            <article className="">
              <figure className="group relative w-40 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="/html.png"
                    alt="image description"
                  />
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">Html</h1>
                </figcaption>
              </figure>
            </article>

            {/* dev tool 9 */}
            <article className="">
              <figure className="group relative w-40 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="/css.png"
                    alt="image description"
                  />
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">Css</h1>
                </figcaption>
              </figure>
            </article>

            {/* dev tool 9 */}
            <article className="">
              <figure className="group relative w-40 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="/bootstrap.png"
                    alt="image description"
                  />
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">bootstrap</h1>
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
              <figure className="group relative lg:max-w-md md:max-w-lg sm:max-w-md transition-all duration-300 cursor-pointer">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="/figma1.PNG"
                    alt="image description"
                  />
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">ISGI UX-UI DESIGN</h1>
                  <p className="text-gray-200 text-sm">
                    Revamped ISGI Institute's UX/UI for enhanced user
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
              <figure className="group relative lg:max-w-sm md:max-w-md sm:max-w-md transition-all duration-300 cursor-pointer">
                <a href="#">
                  <img
                    className="rounded-lg"
                    src="/figma2.PNG"
                    alt="image description"
                  />
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">
                    Absence Management design
                  </h1>
                  <p className="text-gray-200 text-sm">
                    Crafted intuitive UX/UI for ISGI Institute's absence
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
