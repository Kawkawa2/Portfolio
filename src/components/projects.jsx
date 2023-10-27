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
              <Link
                to="https://github.com/Kawkawa2/Top_Travaux"
                target="_blank"
              >
                <figure className="group relative lg:max-w-md md:max-w-lg sm:max-w-md transition-all duration-300 cursor-pointer">
                  <img
                    className="rounded-lg"
                    src="/image5.jpg"
                    alt="image description"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
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
                <figure className="group relative lg:max-w-sm md:max-w-md sm:max-w-md transition-all duration-300 cursor-pointer">
                  <img
                    className="rounded-lg"
                    src="/dashboard.PNG"
                    alt="image description"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
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
            {/*Php */}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <svg viewBox="0 0 128 128">
                    <defs>
                      <path
                        id="php-original-a"
                        d="M64.026 96.076c33.676 0 60.976-14.361 60.976-32.076s-27.3-32.075-60.976-32.075S3.051 46.285 3.051 64s27.3 32.076 60.975 32.076"
                      ></path>
                    </defs>
                    <defs>
                      <path
                        id="php-original-c"
                        d="M2.998 31.924h122.004v64.1H2.998z"
                      ></path>
                    </defs>
                    <clipPath id="php-original-b">
                      <use
                        xlink:href="#php-original-a"
                        overflow="visible"
                      ></use>
                    </clipPath>
                    <clipPath
                      id="php-original-d"
                      clipPath="url(#php-original-b)"
                    >
                      <use
                        xlink:href="#php-original-c"
                        overflow="visible"
                      ></use>
                    </clipPath>
                    <g clipPath="url(#php-original-d)">
                      <defs>
                        <path
                          id="php-original-e"
                          d="M2.998 31.924h122.004v64.1H2.998z"
                        ></path>
                      </defs>
                      <clipPath id="php-original-f">
                        <use
                          xlink:href="#php-original-e"
                          overflow="visible"
                        ></use>
                      </clipPath>
                      <g clipPath="url(#php-original-f)">
                        <image
                          overflow="visible"
                          width="1160"
                          height="609"
                          xlink:href="data:image/jpeg;base64,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 Hnfonne2dsuvF1nS2yxbKurKXWdRdZ0tssaspqyy6sprWdRdZ0assutZ1F1nRrWdS61nRrWdRrWd S63jZrNkYzrNZzrNmc6yZzrNZzrNZliZzrNTOsmZZZnOskzrNTOs2TOskllZliZlhJZWZYkllZli SWVmWJJZYEoS0KEBKlkAoRAqWQESWKlkJYJZEliyWElkSWGZZGc6yuc6yZxvEYzrKgAO/wDQO/nc QmPOvRfOts9WXXi6zV1ZYtlXVlLrOous1dWWNWU1ZZdWU1rNjWs6LrOpdazTWs6jWs2XesaNazY/ S40u7mxqSFzcjFzZJckzc1M6zWZcpM6zWZYZlzZM6zUzrJM6zZM6ySXNSWJmWEzrNSWJM6zUliTO s1JYkllgShLQoQEqWQChECpZARJYqWQlglkSWLJYSWRJcklzLM6yZzrJjOsxjOsqAA7/ANA7+dxC Y869F862z1c614tlW6zotljVzpbZY1ZV1c6i6zous6i6zpdXOo1c6NazZdazo1c6jWsal1rGjdzY 3rFN3FXTIuURlBm5qRCZubGbDMuamdZqZsSZsrMsMyyzMsJmypnWUksJmypLEmbKksSZsqSxJLLA lCWhQgJUsgFCIFSyBISxUshLBLIksWSwksiZ1kmdZlmdZM51kxnWIznWVAAd/wCgd/O4hMedei+d bZ2y7caudRbKurnUWyrqyxdZ0Wyy6spq51GrnS6udRq50a1jUutY0bubGtY0bubLrWKbuKbZsVBZ IWSUiDNzUiJJc1IhM2WTNhM2VM2EzZZM6ySWVmWJM6zUlhM2JJZUzYkllSWJIWBKEtChASpZAKEQ SpYJZCWKlkJYQRJYslhJZEzYTOsyzNhnOsmMbxGc6yoADv8A0Dv53EJjzr0XzrbO2Xbi2WNWVbZY 1c6W6zY1c6NXNXWs2NXOjVzqXVzo1c6jVzTdzZd3NN3NjWsU3cpds01cU0zDUgskLJKREkQZuaZu RmyyZsJmypmxJEqS5GbKkRJLKmbCSxJnWaksSSypmxILAlCVSUAJYIBUsgJUsEshLFSyECSyEsWS yJnWSSwzLJc51kmNZM41mMSxQAHf+gd/O4hMec+jec7Z3Wbtxq51Fsq6ubGrKurmmrLGrnS3WbGr nRq5sbuautZsa1jRq5q7ubG7im7ixu4ptku2UaZGpJWpIiIWSCJTKDNlkiEiVJcjNlkiElhM2WSX JJZUlyjNlSWEiJJZZJYQWBKssoShALBASpYBLAJZCWKlkQElkILJZEzYSXJJZLnOsmc6yYzrEZli gAO/9A7+dxCY859G842z1ZduLZYus1dWWLrNXVzTVljVzpbZY1c01rNNXOpdXNN3Go1c01rFl3cU 3cU2zY0g0yNMjUgsgskqyQuUESxEJEpmwkRJLmmbCS5pmxJLkZsqSxJEqSxJLKkuUZsAAFiWiUJQ IJQhLAJYBCIFgiAkslksESJLCZ1kmdZlzLkmNZMZ1mXAAAHf+gd/O4hJ8Q65U6igoqgBQUFEUCiq CgoKQoAUFABQAAAIAEAgAQEFQEBAQIgICFICABAkBBSAAEAoCkQAAKAEQAAEAEQALAQEBBEgIEgQ AAD64fTB/9oACAECAAEFAP8AljGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGR kZGMYxjPu/8AnqV/z1K/46lf8dSv+OpX/HUr/jqV2fUrs+pXZ9Suz6ldl1K7LqV2XUrsupXZdSux 6ldj1K7HqV2PUrsepXY9Sux6ldj1K7HqV2PUrsepXY9Sux6ldj1K7HqV2PUrsepXY9Sux6ldj1K7 HqV/z1K//9oACAEDAAEFAL9HWta1rWta1rWta1rWta1rW/iL1KvUq9Sr1KvUr/rqV/11K/66lf8A XUr/AK6lf9dSv++pX/fUr/vqV/31K/76ldp1K7TqV2nUrtOpXadSu06ldp1K7TqV2nUrtOpXadSu 06ldp1K7TqV2nUrtOpXadSu06ldp1K7TqV2nUr/rqV//2gAIAQEAAQUA7S2dn675u9d83eu+bvXf N3rvm713zd655u9d83euebvXPN3rnm71zzd655u9c82euebPXPNnrnmz1zzZ655s9c82et+bPXPN nrnmz1zzZ635s9b82et+bPW/Nnrfmz1vzZ635s9b82et+bPW/Nnrfmz1vzZ635s9b82et+bPW/Nn rfmz1vzZ635s9b82et+bPW/Nnrfmz1vzZ635s9b82et+bPW/Nnrfmz1vzZ635s9b82et+bPW/Nnr fmz1vzZ635s9b82et+bPXPNnrnmz1zzZ635s9c82euebPXPNnrnmz1zzZ655s9c82euebvXPN3rn m71zzd655u9d83euebvXfN3rvm713zd675u9d83eu+bvXfOHr3nD17zh695w9e84evecPXvOXr/n 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 Qv4arxV4qqqqv0PjjwTte74nM4icTiczmJxETiJxOInGJGMYxjGMYxjGMYxixZxYs4vFXiqvFXm8 Veaq8Xm8VfwtVVXiqqqqr0/jjwTte7ROZzEROYicRE4nERE4icSJEnGMYxjGMYxjGMZxixZxV4qq vF4qrxVXiqqrzeavFX8JVVV4qqqqq9P448E7Xu+IiJzOYnE4iJxEREROIiIk6GJGMYxjGMYxixjO KsXirzV4qrxVXi8VebzVVeb+Gq8VVVVVVXp/HHgna93zOYicxOInERERERERERE5kScYxjGMYxjG cWLOaqqqqqqqqqrxV4q81V5vQq/havFVVVVVV6fxx4J2vd9CcRETicRE4iIiIiJxEREREScYxjGM YxjGMZxYqqqqqqqqqqqqqqvF4qqvTq/havFVVVVVV6fxx4J2vdxOZzERE4iIiIiIiIiIiIiIk4kS JGMYxjGMYsWc2Kqqqqqqqqqqqqq8VVVebzVVfwtXiqqqqqq9P448E7Xu4nM5iIicRERERERERERE REREiRIxjGMYxjFixVVVVVVVVVVVXiqqrxVVV5vNXir+Eq8VVVVVVXp/HHgnad3E5nM5icRERERE RERERERERESJxIxjGMWcVViqqqqqqqqqqqqqqrxV5vN5q8Vfwt4q8VVVVXp/HHgnad2iInM5icRO IiIiIiIiIiIiIiIiRIxjGMWLFVVVVVVVVVVVVVVXirxV5vNVV5q/hKvFVVVVVV6fxx4J2ndoiJxE 5icROIiIiIiIiIiIiIiIiREjGMWLFiqqqqqqqqqqqqqqrxV4q81eKqr0L+EvNVVVVVV6fxx4J2nd oiIiJzE4icREREREREREREREREREjFiqqqqqqqqqqqqqqqqrxV4q81VVVXoX8JeavFVVVV6fxx4J 2ndoiIiJzE4iIiIiIiIiIiIiIiIiIiIxVVVVVVVVVVVVVVVVVVVXirxVVV4q81fwlXirxVVVVen8 ceCdp3aIiIicxOIiIiIiIiIiIiIiIiIiIiVq1VVVVVVVVVVVVVVVVVVV4q8VVVVVeav4SrxV4qqq qvT+OPBO07tEROInMTiJxEREREREREREREREREStWrVVVVVVVVVVVVVVVVV4q8Veaqqqr0L+EvNV VVVVV6fxx4J2ndoiJzOYnETiIiIiIiIiIiIiIiIlRK1rVqrVVVVVVVVVVVVVVVXirxV5q8VVXmr+ EvNVVVVVV6fxx4J2ndxOInM5icROIiIiIiIiIiIiIiIiVK1rWtWrVVVVVVVVVVVVVVVXirxV5vNX i81fwlXiqqqqqq9P448E7Tu4nM5nMTiIiIiIiIiIiIiIiIiVLxrWta1rVq1VVVVVVVVVVVVVVVXi rzebzV4q/hKvFXiqqqq9P448E7Xu4nM5iIicRERERERERERERERESpWta1rWta1aqqqqqqqqqqqq qqqrxVVV5vNVVX8JV4qqqqqqvT+OPBO17tOZzEROYiIiIiJxEREREREvMrWta1rWtatbzaqqqqvF VVVVVeKq8VVVebzeKv4WrxVVVVVVen8ceCdr3fM5iInE5icRERERERERETiJeda1rWta1rW8W81V VVVVXiqqrxV5vFVV5vQv4arxVVVVVVen8ceCdr3fETmInMTiIiJxEREROIiIl6ErWta1rWta1rVq 3m1VVeKqqqrxVVV4q81eLxV5q/havFVVVVVV6fxx4J2vd8TmcziInETiIiInETiIiIlS861rWta1 rWta1vNq1VVVVV4qqqqqrxVXi81eL+JqqqqqqqqvT+OPBO17tE5nMRE6ETiJxE4iInE5iVK3jWta 1rWta1rebWreKvFVVVVVV4q9GqvN5q8VfwlVVXiqqqqr0/jjwTte7nTiJzE4nMTiInERE4nMrWta 1rWta1rWta1a1vN4qqvFVeKvN4q81V6dX8LV4q8VVVVVen8ceCdr3c6E4nM5iczmJxETmcTjW8a1 rWta1rWta1rWta3i3i8W81V4q8VV4qrxebxV5v4arxV4qqqqv0PjjwT/AKz/AOPtV7We1ntd7Ye2 Htl7ae2ntt7ce3Ht17ee3nt9+gfoX6F+ifo36N+kfpX6Z+mfp36h+ofqX6p+qfq36x+sfrX61+uf rn65+vfr369+vfr369+vfrn65+ufrX61+sfrH6t+qfqn6l+ofqH6d+mfpn6V+kfo36N+ifoX6F+g e33t57ee3Xtx7ce23tp7ae2Xth7Ye13tZ7We1XtR7Ue03tR7Ue1HtR7Ue1HtR7Ue1HtR7Ue1HtR7 Ue1HtN7Te03tN7Te0ntJ7Se0ntF7Re0XtB7Qe0Hs97Pezns57NezHst7Leynsl7Iex3sZ7Few3sJ 7Af+fv8Az9/5+/8AP3/n7/z9/wCfvJfQ/wD6n//aAAgBAgIGPwD4YIIIIIIIIIIIIIIIIIIIIIII IIIWLop0U6KdFOinRTop0U6KdFOinRTop0U6KdFPxFPxFPxFfbiK+3EU/EU/EU/EU/EU/EU/EU/E U/EU/EU/EU/EU/EU/EU/EU/EU/8AX+T0PQ2bNmzZs2bNGjRo0aNGjRZZZZZo0aNGjRo0bNmzZs2b Nnoeh6Hoeh6GzZs2bNGjRo0WWWWWX8n/2gAIAQMCBj8A/ZcyKZFMimRTIpkUyKZFMimRTIpkUyKZ FMimRTIpkUyKZFMimRTIpkUyKZFMiq6ZMmTJkyZKKKKKKKKKKK+CiiiiiiiiijJkyZMmTJkwYMmT JkyUUUUUUV+D/9oACAEBAQY/AFGX9kRmThV7jyFXuPIVe48hV7jyFUt5CqW8hVLeQqlvIVS3kKpb yFUt5CqW8hVLeQqlvIVS3kKpbyFUt5CqW8hVLeQqlvIVS3kKpbyFUt5CqW8hVLgKpcBVLeQqlvIV S3kKpbyFUt5CqW8hVLeQqlwFUuAqlwFUuAqlwFUuAqlwFUuAqlwFUuAqlwFUuAqlwFUuAqlwFUuA qlwFUuAqlwFUuAqlwFUt5CqW8hVLeQqlvIVS3kKpbyFUt5CqXAVS4CqW8hVLeQqlvIVS3kKpbyFU t5CqW8hVLeQqlvIVS3kKpbyFUt5CqW8hVLeQqlvIVS3kKpbyFUt5CqW8hVLeQq9x5Cq3HkKvceQq 9x5Cr3HkKvceQq9x5Cr3HkKvceWAq9x5YCr3HlgKvceWAq9x5YCr3HlgKvceWArNx5YCs3HlgKzc eWArNx5YCs3HlgKzceWArNx5YCs3HlgK3ceWArdx5YCt3HlgK3ceWArd15YCu3XlgK7deWArt15Y Cu3XlgK7deWArt15YCu3XlgK7deWArt15YCu3XlgK7deWArt15YCu3XlgK7deWArt15YCu3XlgK7 deWArt15YCu3XlgK7deWArt15YCu3XlgK7deWArt15YCu3XlgK7deWArt15YCu3XlgK7deWArt15 YCu3XlgK7deWArt15YDtL7u8rfUjcSSTV/gjSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7r Ee5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sX lO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucq dLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR 7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU 7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0 sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHu cqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5Tu sR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSx eU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5y p0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6x HucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSw/wAv6+P5/wCCTESYiTESYiTE SYiTESYiTESoiVESoiVESoiVESoiVESoiVES4iXES4iXES4iXES4iXES4jwiPCI8IjwiPCI8B4Dw HgPAeA8B4jxHiPEeI8R4jwHgPAeA8B4DwHgPCI8IjwiPCIlxEuIlxEuIlxEuIlxEuIlxEqIlREqI lREqIlREqIlREqIlREmIkxEmIkxEmIkxEmIkxEmIkxEiIkREiIkREiIkREiIkREiIkREiIkREiIk REiIkREiIkREiIkREiIkREiIkREiIkREiIkREiIkREiIkREiIkREiI9eI9eI9eI9eI9eI9eI9eI9 eI9eI9aI9aI9b7D1vsPW+w9X7D1fsPV+w9X7D1fsPV+w9X7Dd/8AF/X+v8i/b+r5+Py+P4+fn/TP /9k="
                          transform="matrix(.106 0 0 -.106 2.825 96.168)"
                        ></image>
                      </g>
                    </g>
                    <path
                      fill="#6181B6"
                      d="M64.026 93.694c32.36 0 58.594-13.295 58.594-29.694S96.387 34.306 64.026 34.306 5.433 47.601 5.433 64s26.233 29.694 58.593 29.694z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M75.896 73.598l2.906-14.958c.656-3.377.11-5.896-1.62-7.486-1.677-1.54-4.523-2.288-8.703-2.288h-5.033l1.44-7.412a.955.955 0 00-.935-1.135h-6.947a.954.954 0 00-.936.771l-3.086 15.881c-.28-1.787-.973-3.323-2.079-4.591-2.038-2.332-5.261-3.515-9.58-3.515H27.856a.951.951 0 00-.935.771L20.674 81.78a.953.953 0 00.935 1.134h7.002a.953.953 0 00.936-.771l1.511-7.775h5.213c2.735 0 5.032-.296 6.827-.881 1.834-.596 3.522-1.607 5.011-3.001a15.364 15.364 0 002.96-3.676l-1.248 6.424a.95.95 0 00.935 1.134h6.947a.954.954 0 00.936-.771l3.429-17.645h4.767c2.031 0 2.626.404 2.787.578.147.159.452.718.11 2.48l-2.764 14.223a.95.95 0 00.935 1.134h7.058a.951.951 0 00.935-.769zm-32.208-12.36c-.437 2.242-1.259 3.842-2.444 4.755-1.205.927-3.132 1.397-5.727 1.397h-3.104l2.244-11.548h4.012c2.948 0 4.136.63 4.612 1.158.662.734.802 2.199.407 4.238zm61.916-8.858c-2.038-2.332-5.261-3.515-9.581-3.515H82.559a.952.952 0 00-.936.771L75.375 81.78a.953.953 0 00.935 1.134h7.003a.953.953 0 00.935-.771l1.512-7.775h5.212c2.735 0 5.033-.296 6.827-.881 1.835-.596 3.522-1.607 5.011-3.001 1.241-1.141 2.264-2.421 3.037-3.806a15.404 15.404 0 001.65-4.588c.797-4.094.16-7.363-1.893-9.712zm-7.262 8.858c-.437 2.242-1.259 3.842-2.444 4.755-1.204.927-3.131 1.397-5.727 1.397h-3.104l2.245-11.548h4.012c2.948 0 4.136.63 4.612 1.158.662.734.801 2.199.406 4.238z"
                    ></path>
                    <path
                      fill="#000004"
                      d="M38.67 54.89c2.66 0 4.434.491 5.32 1.474.885.982 1.097 2.668.633 5.057-.484 2.488-1.416 4.264-2.798 5.328-1.382 1.063-3.485 1.595-6.308 1.595h-4.26l2.614-13.453h4.799v-.001zM21.609 81.962h7.002l1.661-8.546h5.998c2.646 0 4.823-.277 6.532-.834 1.709-.556 3.263-1.488 4.661-2.797a14.369 14.369 0 002.85-3.569c.727-1.3 1.242-2.734 1.547-4.305.741-3.811.182-6.778-1.676-8.904s-4.812-3.189-8.862-3.189H27.856l-6.247 32.144zm35.394-40.691h6.947l-1.661 8.546h6.189c3.894 0 6.58.68 8.059 2.037 1.479 1.359 1.921 3.561 1.33 6.603l-2.906 14.959h-7.058l2.763-14.223c.314-1.618.199-2.722-.347-3.311-.546-.587-1.708-.882-3.485-.882h-5.553l-3.578 18.416h-6.947l6.247-32.145zM93.324 54.89c2.66 0 4.434.491 5.319 1.474.887.982 1.097 2.668.634 5.057-.484 2.488-1.417 4.264-2.799 5.328-1.382 1.063-3.484 1.595-6.308 1.595h-4.259l2.614-13.453h4.799v-.001zm-17.06 27.072h7.002l1.661-8.546h5.997c2.646 0 4.823-.277 6.532-.834 1.71-.556 3.264-1.488 4.661-2.797a14.35 14.35 0 002.851-3.569c.726-1.3 1.242-2.734 1.547-4.305.74-3.811.182-6.778-1.676-8.904s-4.812-3.189-8.863-3.189H82.511l-6.247 32.144z"
                    ></path>
                  </svg>
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">Php</h1>
                </figcaption>
              </figure>
            </article>

            {/* Laravel */}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <svg viewBox="0 0 128 128">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#FD4F31"
                      d="M16.934 1.719c-1.127.088-2.234.074-3.325.373-2.387.655-4.508 1.702-6.379 3.316-1.1.948-2.06 1.97-2.875 3.174-1.258 1.859-2.115 3.857-2.545 6.106.172.301.353.617.545.938 1.219 2.038 2.439 4.062 3.661 6.098l3.212 5.341c.988 1.646 1.974 3.293 2.96 4.939l4.608 7.688 3.143 5.244c1.527 2.545 3.058 5.088 4.583 7.634l5.609 9.371c1.617 2.699 3.237 5.396 4.857 8.093l.216.314c.235.075.422.011.616-.035 2.134-.512 4.268-1.021 6.402-1.531 3.461-.827 6.922-1.651 10.383-2.479l5.421-1.297c3.499-.836 6.999-1.67 10.498-2.508 3.537-.846 7.073-1.696 10.611-2.543 1.788-.429 3.576-.856 5.365-1.283 3.461-.826 6.922-1.65 10.383-2.474l11.308-2.693.611-.165-.167-.331-3.086-4.362-3.048-4.315-3.26-4.604-3.116-4.413-3.088-4.361-3.188-4.507c-1.041-1.47-2.084-2.938-3.126-4.407l-1.647-2.326a4.275 4.275 0 01-.587-1.159c-.326-1.011.046-1.684.636-2.181.382-.323.822-.56 1.298-.7a20.898 20.898 0 012.01-.51c1.359-.257 2.727-.475 4.091-.702l4.624-.754c.975-.161 1.949-.33 2.924-.495 1.325-.224 2.65-.449 3.976-.67 1.287-.216 2.574-.43 3.861-.642l4.213-.689 2.924-.491c1.112-.186 2.223-.371 3.334-.553 1.386-.226 2.771-.454 4.157-.671.826-.129 1.652-.174 2.472.062a5.63 5.63 0 011.696.833l.721.503c.072-.166-.032-.256-.08-.351a16.543 16.543 0 00-4.26-5.422 16.399 16.399 0 00-5.636-3.09c-1.229-.389-2.492-.208-3.778-.305M55.689 127c-.062 0-.117-.45-.187-.569-1.5-2.56-3.016-5.308-4.498-7.877a1335.74 1335.74 0 01-5.557-9.74c-1.965-3.478-3.913-6.966-5.863-10.452a5709.989 5709.989 0 01-5.549-9.948c-1.115-2.005-2.223-4.014-3.337-6.02l-.296-.459-.542.107c-1.072.277-2.142.556-3.212.838-1.49.392-2.979.791-4.47 1.18-3.347.871-6.694 1.737-10.041 2.605-3.404.884-6.951 1.77-10.356 2.65-.207.053.219.071-.781.106v21.145c.412.656.373.347.399.563.079.626.207 1.257.317 1.877.412 2.31 1.339 4.425 2.679 6.351 1.965 2.826 4.582 4.846 7.788 6.082 1.145.44 2.34.75 3.562.9l1.241.328"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#FD4F31"
                      d="M4.976 77.742c3.939-.937 7.879-1.873 11.818-2.808 1.73-.41 3.461-.815 5.191-1.227.865-.206 1.732-.402 2.59-.634.764-.206.858-.459.465-1.148-.568-.996-1.146-1.986-1.721-2.979l-5.064-8.72-5.062-8.721c-1.717-2.958-3.436-5.916-5.154-8.873l-4.412-7.59c-.636-1.094-1.408-2.191-2.047-3.284-.119-.199.42-.437-.58-.543v47.396c0-.032.453-.059.606-.096l3.37-.773zm121.248 33.878c-1.544.549-3.089 1.102-4.632 1.655l-10.545 3.781c-1.953.701-3.902 1.41-5.856 2.108-3.982 1.421-7.966 2.837-11.949 4.255-2.308.822-4.617 1.838-6.924 2.664-.632.227-1.255.917-1.881.917h26.49l.57-.327c.674-.029 1.337-.229 1.999-.35 2.719-.497 5.154-1.673 7.311-3.392 1.657-1.321 3.005-2.936 4.061-4.778 1.086-1.896 1.731-3.947 2.041-6.101.027-.186.085-.397-.071-.589-.22-.017-.414.086-.614.157zm-2.275-35.571c-1.168-1.598-2.339-3.193-3.505-4.792-1.609-2.207-3.215-4.416-4.822-6.624-.653-.896-1.315-1.785-1.952-2.691-.192-.273-.411-.346-.71-.265l-.171.049c-2.958.719-5.917 1.436-8.876 2.153l-5.302 1.287-10.372 2.519c-3.419.831-6.838 1.663-10.258 2.492l-10.662 2.582c-3.497.849-6.992 1.701-10.488 2.551l-10.142 2.462c-1.787.434-3.574.866-5.359 1.302-.263.064-.546.08-.826.292l.239.455a5999.968 5999.968 0 009.598 16.529c1.874 3.213 3.753 6.424 5.63 9.636 1.079 1.845 2.151 3.692 3.239 5.532a661.851 661.851 0 003.653 6.115c.369.607.788 1.187 1.21 1.759a3.64 3.64 0 001.046.957c.426.257.885.338 1.369.229.25-.057.495-.139.737-.223l.89-.33c3.237-1.107 6.473-2.214 9.711-3.317 2.526-.86 5.055-1.716 7.583-2.571 2.509-.851 5.02-1.698 7.53-2.545l7.474-2.524c2.548-.861 5.095-1.722 7.642-2.585 3.126-1.061 6.251-2.126 9.379-3.185 3.015-1.02 6.033-2.034 9.049-3.052.185-.062.389-.088.542-.291l.019-.439c.001-6.255-.001-12.511.006-18.766a1.38 1.38 0 00-.289-.873c-.948-1.269-1.877-2.551-2.812-3.828zm-.519-58.938c-.702-.889-1.596-1.171-2.692-.885-.477.125-.967.204-1.453.293-1.594.292-3.19.579-4.784.868-2.334.424-4.667.852-7.001 1.272-1.848.332-3.697.659-5.546.983l-7.418 1.298c-.311.054-.625.108-.925.204-.437.14-.563.414-.363.825.163.336.366.657.586.959 1.534 2.114 3.075 4.223 4.616 6.333 2.124 2.909 4.249 5.817 6.374 8.724 1.798 2.46 3.598 4.92 5.397 7.379 1.414 1.932 2.828 3.864 4.244 5.795l.279.338 12.271-3.033.029-.636c.001-8.511-.001-17.022.006-25.534 0-.376-.091-.678-.328-.976-1.032-1.303-2.045-2.621-3.066-3.933l-.226-.274zm3.301 41.241c-1.856.446-3.719.87-5.62 1.373.201.357 5.415 7.395 5.718 7.729l.19.105.021-.429.001-2.963c.001-1.719.005-3.438.001-5.157 0-.209.059-.434-.085-.646l-.226-.012z"
                    ></path>
                  </svg>
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">Laravel</h1>
                </figcaption>
              </figure>
            </article>

            {/* Javascript */}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <svg viewBox="0 0 128 128">
                    <path
                      fill="#F0DB4F"
                      d="M1.408 1.408h125.184v125.185H1.408z"
                    ></path>
                    <path
                      fill="#323330"
                      d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                    ></path>
                  </svg>
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">Javascript</h1>
                </figcaption>
              </figure>
            </article>

            {/* TypeScript */}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <svg viewBox="0 0 128 128">
                    <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
                    <path
                      data-name="original"
                      fill="#007acc"
                      d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                    ></path>
                  </svg>
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">TypeScript</h1>
                </figcaption>
              </figure>
            </article>

            {/* Jquery */}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <svg viewBox="0 0 128 128">
                    <path
                      fill="#0868AC"
                      d="M9.625 32.181C-1.404 48.032-.031 68.657 8.394 85.501c.2.404.41.801.617 1.198l.394.759.246.437.439.786c.262.461.53.92.804 1.379l.459.756c.304.491.615.976.933 1.46l.398.614c.439.655.888 1.309 1.352 1.951l.039.05.228.308c.401.553.814 1.099 1.232 1.639l.464.59c.373.469.752.935 1.138 1.399l.435.52a75.27 75.27 0 001.586 1.812l.033.033.061.068a80.44 80.44 0 001.612 1.699l.517.521c.423.426.853.845 1.287 1.262l.527.5c.58.547 1.166 1.083 1.764 1.607l.028.022.307.262c.527.456 1.063.909 1.603 1.353l.664.529c.441.354.887.702 1.336 1.044l.714.543c.496.365.995.724 1.499 1.075l.546.387.15.107c.478.329.967.646 1.456.963l.63.42c.75.474 1.51.943 2.279 1.396l.63.355c.565.326 1.134.646 1.71.959.312.168.632.327.946.488.407.213.811.429 1.225.636l.283.137.501.242c.641.306 1.287.607 1.94.897l.41.184a66.92 66.92 0 002.263.941l.551.217c.704.271 1.418.539 2.135.791l.268.093c.787.275 1.581.53 2.381.779l.575.172c.814.245 1.619.538 2.458.693 53.339 9.727 68.833-32.053 68.833-32.053-13.013 16.953-36.111 21.425-57.996 16.446-.829-.187-1.633-.446-2.442-.685l-.609-.185a72.498 72.498 0 01-2.352-.765l-.323-.117a72.245 72.245 0 01-2.074-.769l-.582-.229c-.752-.297-1.5-.607-2.239-.931l-.447-.198a92.857 92.857 0 01-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743-.324-.171-.654-.332-.975-.51a58.591 58.591 0 01-1.751-.982l-.591-.33a81.221 81.221 0 01-2.28-1.397l-.615-.41a59.283 59.283 0 01-1.623-1.079l-.522-.367a89.287 89.287 0 01-1.534-1.109l-.679-.514a64.473 64.473 0 01-1.384-1.082l-.617-.495a82.693 82.693 0 01-1.724-1.453l-.189-.159a83.466 83.466 0 01-1.812-1.647l-.511-.491c-.441-.42-.875-.843-1.302-1.277l-.51-.509a70.541 70.541 0 01-1.598-1.69l-.079-.084a67.39 67.39 0 01-1.621-1.844l-.424-.504a70.602 70.602 0 01-1.167-1.442l-.427-.532a78.406 78.406 0 01-1.347-1.794c-12.15-16.574-16.516-39.432-6.805-58.204m25.629-2.434c-7.977 11.478-7.543 26.844-1.321 38.983a50.581 50.581 0 003.528 5.889c1.195 1.713 2.52 3.751 4.106 5.127a48.111 48.111 0 001.79 1.858l.472.465a51.69 51.69 0 001.828 1.698l.074.064.018.018a55.268 55.268 0 002.135 1.767l.485.378a54.08 54.08 0 002.233 1.631l.065.049c.336.232.678.448 1.019.672l.483.319c.544.349 1.095.689 1.655 1.015l.235.136c.483.278.972.552 1.463.818l.521.271c.339.177.678.358 1.023.53l.155.07c.703.346 1.412.68 2.136.995l.472.194c.579.246 1.164.486 1.75.71l.75.275c.533.198 1.068.378 1.607.559l.727.233c.767.238 1.525.539 2.324.672 41.183 6.823 50.691-24.886 50.691-24.886-8.57 12.343-25.168 18.233-42.879 13.635a50.376 50.376 0 01-2.333-.674l-.701-.227a45.423 45.423 0 01-1.631-.562l-.736-.274a56.418 56.418 0 01-1.756-.708l-.473-.2a47.728 47.728 0 01-2.148-.999c-.363-.177-.72-.364-1.078-.548l-.622-.32a44.502 44.502 0 01-1.363-.77l-.326-.185a47.844 47.844 0 01-1.651-1.008l-.498-.332a61.759 61.759 0 01-1.069-.707 57.456 57.456 0 01-2.226-1.628l-.501-.395c-7.752-6.12-13.898-14.486-16.819-23.971-3.062-9.836-2.402-20.878 2.903-29.84m22.278-.775c-4.702 6.92-5.164 15.514-1.901 23.156 3.441 8.113 10.491 14.476 18.72 17.495.339.125.679.237 1.022.354l.451.143c.485.152.966.329 1.467.424 22.74 4.394 28.908-11.669 30.549-14.034-5.402 7.779-14.482 9.646-25.623 6.942-.88-.213-1.847-.531-2.695-.832a33.242 33.242 0 01-3.201-1.329 33.215 33.215 0 01-5.612-3.424c-9.969-7.565-16.162-21.994-9.657-33.745"
                    ></path>
                  </svg>
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">Jquery</h1>
                </figcaption>
              </figure>
            </article>

            {/* React */}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <svg viewBox="0 0 128 128">
                    <g fill="#61DAFB">
                      <circle cx="64" cy="64" r="11.4"></circle>
                      <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                    </g>
                  </svg>
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">React Js</h1>
                </figcaption>
              </figure>
            </article>

            {/* Redux */}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <svg viewBox="0 0 128 128">
                    <path fill="none" d="M0 0h128v128H0z"></path>
                    <path
                      d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 01-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0010 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0026.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 01-2.61-6A9.12 9.12 0 0187.37 70h.34a9.15 9.15 0 011 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 01-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0016 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 00-17.27-20.85 62 62 0 00-34.74-10.59h-2.93a9.21 9.21 0 01-8 5.54h-.31a9.13 9.13 0 01-.3-18.25h.33a9 9 0 018 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 011.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 00-9.64 25.25 59.61 59.61 0 008.47 36.16 2.75 2.75 0 011.14-.16h.32a9.12 9.12 0 01.33 18.24h-.33a9.16 9.16 0 01-9.12-8.79z"
                      fill="#764abc"
                    ></path>
                  </svg>
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">Redux</h1>
                </figcaption>
              </figure>
            </article>

            {/* Node js */}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <svg viewBox="0 0 128 128">
                    <path
                      fill="#83CD29"
                      d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
                    ></path>
                  </svg>
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">Node Js</h1>
                </figcaption>
              </figure>
            </article>

            {/* Express js */}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <svg viewBox="0 0 128 128">
                    <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"></path>
                  </svg>
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">Express Js</h1>
                </figcaption>
              </figure>
            </article>

            {/* python */}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <svg viewBox="0 0 128 128">
                    <linearGradient
                      id="python-original-a"
                      gradientUnits="userSpaceOnUse"
                      x1="70.252"
                      y1="1237.476"
                      x2="170.659"
                      y2="1151.089"
                      gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
                    >
                      <stop offset="0" stopColor="#5A9FD4"></stop>
                      <stop offset="1" stopColor="#306998"></stop>
                    </linearGradient>
                    <linearGradient
                      id="python-original-b"
                      gradientUnits="userSpaceOnUse"
                      x1="209.474"
                      y1="1098.811"
                      x2="173.62"
                      y2="1149.537"
                      gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
                    >
                      <stop offset="0" stopColor="#FFD43B"></stop>
                      <stop offset="1" stopColor="#FFE873"></stop>
                    </linearGradient>
                    <path
                      fill="url(#python-original-a)"
                      d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
                      transform="translate(0 10.26)"
                    ></path>
                    <path
                      fill="url(#python-original-b)"
                      d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
                      transform="translate(0 10.26)"
                    ></path>
                    <radialGradient
                      id="python-original-c"
                      cx="1825.678"
                      cy="444.45"
                      r="26.743"
                      gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0"
                        stopColor="#B8B8B8"
                        stopOpacity=".498"
                      ></stop>
                      <stop
                        offset="1"
                        stopColor="#7F7F7F"
                        stopOpacity="0"
                      ></stop>
                    </radialGradient>
                    <path
                      opacity=".444"
                      fill="url(#python-original-c)"
                      d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"
                    ></path>
                  </svg>
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">Python</h1>
                </figcaption>
              </figure>
            </article>

            {/* Mysql */}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <svg viewBox="0 0 128 128">
                    <path
                      fill="#00618A"
                      d="M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.07 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.577 2.751 5.465 3.902 3.358 2.047 7.107 3.217 10.34 5.268 1.906 1.21 3.799 2.733 5.658 4.097.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.8-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367 2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073-4.37-3.72-9.138-7.437-14.048-10.537-2.724-1.718-6.089-2.835-8.976-4.292-.971-.491-2.677-.746-3.318-1.562-1.517-1.932-2.342-4.382-3.511-6.633-2.449-4.717-4.854-9.868-7.024-14.831-1.48-3.384-2.447-6.72-4.293-9.756-8.86-14.567-18.396-23.358-33.169-32-3.144-1.838-6.929-2.563-10.929-3.513-2.145-.129-4.292-.26-6.438-.391-1.311-.546-2.673-2.149-3.902-2.927C17.811 4.565 5.257-2.16 1.633 6.682c-2.289 5.581 3.421 11.025 5.462 13.854 1.434 1.982 3.269 4.207 4.293 6.438.674 1.467.79 2.938 1.367 4.489 1.417 3.822 2.652 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.951 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.899 21.567 2.537 28.683 1.36 2.186 4.567 6.871 8.975 5.073 3.856-1.57 2.995-6.438 4.098-10.732.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514 2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755-1.527-1.497-3.225-3.358-4.487-5.073-3.556-4.827-6.698-10.11-9.561-15.609-1.368-2.627-2.557-5.523-3.709-8.196-.444-1.03-.438-2.589-1.364-3.122-1.263 1.958-3.122 3.542-4.098 5.854-1.561 3.696-1.762 8.204-2.341 12.878-.342.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.554-6.07-3.029-15.842-.781-22.829.582-1.809 3.21-7.501 2.146-9.172-.508-1.666-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.124-5.464-2.09-4.731-3.066-10.044-5.267-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.683-6.635-.446-.968-1.051-2.518-.391-3.513.21-.671.508-.951 1.171-1.17 1.132-.873 4.284.29 5.462.779 3.129 1.3 5.741 2.538 8.392 4.294 1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975 4.536 1.378 8.601 3.523 12.292 5.854 11.246 7.102 20.442 17.21 26.732 29.269 1.012 1.942 1.45 3.794 2.341 5.854 1.798 4.153 4.063 8.426 5.852 12.488 1.786 4.052 3.526 8.141 6.05 11.513 1.327 1.772 6.451 2.723 8.781 3.708 1.632.689 4.307 1.409 5.854 2.34 2.953 1.782 5.815 3.903 8.586 5.855 1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294-.484-.509-.555-1.147-.975-1.755-.556-.811-1.635-1.272-2.339-1.952z"
                    ></path>
                  </svg>
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">Mysql</h1>
                </figcaption>
              </figure>
            </article>

            {/* Mongo DB */}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <svg viewBox="0 0 128 128">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#439934"
                      d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051-.169-24.252 1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#45A538"
                      d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#46A037"
                      d="M88.038 42.812c-1.384.206-2.768.403-4.149.616-3.131.485-6.263.968-9.392 1.465-2.622.417-5.242.852-7.862 1.281l-1.602.275-.012-1.045c-.053-.859-.144-1.717-.154-2.576-.069-5.478-.112-10.956-.18-16.434-.042-3.429-.105-6.857-.175-10.285-.043-2.13-.089-4.261-.185-6.388-.052-1.143-.236-2.28-.311-3.423-.042-.657.016-1.319.029-1.979.817 1.583 1.616 3.178 2.456 4.749 1.327 2.484 3.441 4.314 5.344 6.311 7.523 7.892 12.864 17.068 16.193 27.433z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#409433"
                      d="M65.036 80.753c.081-.026.222-.034.235-.08.491-1.682 1.996-1.431 3.212-1.641 3.432-.594 6.875-1.13 10.313-1.687 3.326-.539 6.652-1.081 9.981-1.604.394-.062.805-.011 1.208-.012-.622 2.22-1.112 4.488-1.901 6.647-.896 2.449-1.98 4.839-3.131 7.182a49.142 49.142 0 01-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23-1.214-1.038-1.256-2.753a41.402 41.402 0 01-1.394-9.838l.023-.561.171-2.426c.057-.828.133-1.655.168-2.485.129-2.982.241-5.964.359-8.946z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#4FAA41"
                      d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913-2.75-8.209-5.467-16.431-8.213-24.642a4498.887 4498.887 0 00-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6167.476 6167.476 0 016.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198.116.349.308.671.491 1.062l.67-.78-.167 10.052z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#4AA73C"
                      d="M43.155 32.227c.21.274.511.516.617.826a4498.887 4498.887 0 016.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642 1.662 4.961 3.362 9.911 5.062 14.913l.765-.289-.171 2.426-.155.559c-.266 2.656-.49 5.318-.814 7.968-.163 1.328-.509 2.632-.772 3.947-.198-.287-.476-.548-.583-.866-5.467-16.297-10.918-32.6-16.376-48.9a3888.972 3888.972 0 00-5.242-15.551c-.089-.263-.34-.469-.516-.702l3.272-8.84z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#57AE47"
                      d="M65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062-2.913-8.731-5.812-17.468-8.728-26.198a6167.476 6167.476 0 00-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769 1.681 4.921 3.347 9.848 5.003 14.778 1.547 4.604 3.071 9.215 4.636 13.813.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#60B24F"
                      d="M65.021 45.404c-.244-.26-.609-.478-.714-.786-1.565-4.598-3.089-9.209-4.636-13.813-1.656-4.93-3.322-9.856-5.003-14.778-.099-.287-.371-.514-.562-.769 1.969-1.928 3.877-3.925 5.925-5.764 1.821-1.634 3.285-3.386 3.352-5.968.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979.075 1.143.259 2.28.311 3.423.096 2.127.142 4.258.185 6.388.069 3.428.132 6.856.175 10.285.067 5.478.111 10.956.18 16.434.008.861.098 1.718.152 2.577z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#A9AA88"
                      d="M62.598 107.085c.263-1.315.609-2.62.772-3.947.325-2.649.548-5.312.814-7.968l.066-.01.066.011a41.402 41.402 0 001.394 9.838c-.176.232-.425.439-.518.701-.727 2.05-1.412 4.116-2.143 6.166-.1.28-.378.498-.574.744l-.747-2.566.87-2.969z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#B6B598"
                      d="M62.476 112.621c.196-.246.475-.464.574-.744.731-2.05 1.417-4.115 2.143-6.166.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#C2C1A7"
                      d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624-.839 2.403-1.64 4.819-2.485 7.222-.107.305-.404.544-.614.812-.109-1.387-.22-2.771-.331-4.158z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#CECDB7"
                      d="M63.503 120.763c.209-.269.506-.508.614-.812.845-2.402 1.646-4.818 2.485-7.222.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477-.575 1.614-1.117 3.24-1.694 4.854-.119.333-.347.627-.525.938-.158-.207-.441-.407-.454-.623-.051-.841-.016-1.688-.013-2.533z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#DBDAC7"
                      d="M63.969 123.919c.178-.312.406-.606.525-.938.578-1.613 1.119-3.239 1.694-4.854.065-.183.263-.319.398-.477l.012 3.64-1.218 3.124-1.411-.495z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#EBE9DC"
                      d="M65.38 124.415l1.218-3.124.251 3.696-1.469-.572z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#CECDB7"
                      d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23-1.054 1.867z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#4FAA41"
                      d="M64.316 95.172l-.066-.011-.066.01.155-.559-.023.56z"
                    ></path>
                  </svg>
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">Mongo DB</h1>
                </figcaption>
              </figure>
            </article>

            {/* Html */}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <svg viewBox="0 0 128 128">
                    <path
                      fill="#E44D26"
                      d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
                    ></path>
                    <path
                      fill="#F16529"
                      d="M64 116.8l36.378-10.086 8.559-95.878H64z"
                    ></path>
                    <path
                      fill="#EBEBEB"
                      d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
                    ></path>
                  </svg>
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">Html</h1>
                </figcaption>
              </figure>
            </article>

            {/* Css */}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <svg viewBox="0 0 128 128">
                    <path
                      fill="#1572B6"
                      d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
                    ></path>
                    <path
                      fill="#33A9DC"
                      d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
                    ></path>
                    <path
                      fill="#EBEBEB"
                      d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
                    ></path>
                    <path
                      fill="#EBEBEB"
                      d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
                    ></path>
                  </svg>
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">Css</h1>
                </figcaption>
              </figure>
            </article>

            {/* bootstrap*/}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <svg viewBox="0 0 128 128">
                    <defs>
                      <linearGradient
                        id="bootstrap-original-a"
                        x1="76.079"
                        x2="523.48"
                        y1="10.798"
                        y2="365.95"
                        gradientTransform="translate(1.11 14.613) scale(.24566)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#9013fe" offset="0"></stop>
                        <stop stopColor="#6610f2" offset="1"></stop>
                      </linearGradient>
                      <linearGradient
                        id="bootstrap-original-b"
                        x1="193.51"
                        x2="293.51"
                        y1="109.74"
                        y2="278.87"
                        gradientTransform="translate(0 52)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" offset="0"></stop>
                        <stop stopColor="#f1e5fc" offset="1"></stop>
                      </linearGradient>
                      <filter
                        id="bootstrap-original-c"
                        x="161.9"
                        y="135.46"
                        width="197"
                        height="249"
                        color-interpolation-filters="sRGB"
                        filterUnits="userSpaceOnUse"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feColorMatrix
                          in="SourceAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        ></feColorMatrix>
                        <feOffset dy="4"></feOffset>
                        <feGaussianBlur stdDeviation="8"></feGaussianBlur>
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                        <feBlend
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow"
                        ></feBlend>
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow"
                          result="shape"
                        ></feBlend>
                      </filter>
                    </defs>
                    <path
                      d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099-.228 6.546.068 15.026 2.202 21.94 2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883-2.134 6.914-2.43 15.394-2.202 21.94.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098.228-6.546-.068-15.026-2.203-21.94-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883 2.135-6.914 2.43-15.394 2.203-21.94z"
                      fill="url(#bootstrap-original-a)"
                    ></path>
                    <path
                      transform="translate(1.494 2.203) scale(.24566)"
                      d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355 0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219 0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279 0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49 0 23.459-16.484 35.941-47.605 35.941z"
                      fill="url(#bootstrap-original-b)"
                      filter="url(#bootstrap-original-c)"
                      stroke="#fff"
                    ></path>
                  </svg>
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">Bootstrap</h1>
                </figcaption>
              </figure>
            </article>

            {/* Tailwind */}
            <article className="">
              <figure className="group relative w-24 transition-all duration-300 cursor-pointer">
                <a href="#">
                  <svg viewBox="0 0 128 128">
                    <path
                      d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                      fill="#38b2ac"
                    ></path>
                  </svg>
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <figcaption className="absolute px-4 text-white bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="font-bold text-xl mb-2">Tailwind</h1>
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
