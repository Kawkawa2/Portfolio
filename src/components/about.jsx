import Gotolink from "./gotolink";

function About() {
  return (
    <section className=" min-h-[calc(100vh - 40vh)] flex items-center  justify-center">
      <div className="max-w-4xl">
        <a href="/">
          <h1 className="relative my-8 mx-0 uppercase tracking-[9.9px] text-gray-900 text-4xl font-bold">
            About
          </h1>
        </a>
        {/* Education section */}
        <article className="my-10">
          <h4 className="text-2xl capitalize font-normal text-blue-700 hover:text-gray-500">
            My education.
          </h4>
          <ul className="timeline">
            <li>
              <a
                target="_blank"
                rel=""
                id="cardHover"
                aria-label="Open my education"
                href=""
                className=" hover:underline"
              >
                Specialized Technician In Digital Development.{" "}
                <small>ISGI-OFPPT</small>
              </a>
              <a className="float-right" tabIndex={-1}>
                <b className="underline">2021 - 2023</b>
              </a>
              <p>
                Graduated from ISGI-OFPPT as a Full Stack Developer (2021-2023)
                with expertise in web development.
              </p>
            </li>
            <li>
              <a
                target="_blank"
                rel=""
                id="cardHover"
                aria-label="Open my education"
                href=""
                className=" hover:underline"
              >
                International Bacalaureate In Physical Science.
                <small> El Baroudi High School</small>
              </a>
              <a className="float-right" tabIndex={-1}>
                <b className="underline">2020 - 2021</b>
              </a>
              <p>
                Attained an International Baccalaureate in Physical Science with
                distinction at El Baroudi High School. Gained fundamental
                knowledge.
              </p>
            </li>
          </ul>
        </article>

        {/* Experience section */}

        <article className="my-20">
          <h4 className="text-2xl capitalize font-normal text-blue-700 hover:text-gray-500">
            My experience.
          </h4>
          <ul className="timeline">
            <li>
              <a
                target="_blank"
                rel=""
                id="cardHover"
                aria-label="Open my education"
                href=""
                className=" hover:underline"
              >
                Internship - Mern Stack Developer. <small>Ark-x Academy</small>
              </a>
              <a className="float-right" tabIndex={-1}>
                <b className="underline">August 2023 - December 2023</b>
              </a>
              <p>
                In-depth training in MongoDB, Express.js, React, and Node.js.
                Building scalable web applications using the MERN stack.
                Hands-on projects to gain practical experience. Certification:
                Full Stack MERN Developer
              </p>
            </li>
            <li className="reverse">
              <a
                target="_blank"
                rel=""
                id="cardHover"
                aria-label="Open my education"
                href=""
                className=" hover:underline"
              >
                End of Studies Internship (PFE) - Junior Full Stack.{" "}
                <small>Technologies 4You</small>
              </a>
              <a className="float-right" tabIndex={-1}>
                <b className="underline">April 2023 - May 2023</b>
              </a>
              <p>
                Design and development of a website connecting clients with
                artisans, facilitating the search for professional services for
                users. This project was carried out for the Moroccan subsidiary
                of Technologies 4You, a company based in France..
              </p>
            </li>
          </ul>
        </article>

        {/* Certification section */}
        <article className="my-20">
          <h4 className="text-2xl capitalize font-normal text-blue-700 hover:text-gray-500">
            My certifications.
          </h4>
          <ul className="timeline">
            <li>
              <a
                target="_blank"
                rel=""
                id="cardHover"
                aria-label="Open my education"
                href=""
                className=" hover:underline"
              >
                Defending Node Applications from SQL Injection, XSS, & CSRF
                Attacks Course. <small>CodeCademy</small>
              </a>
              <a className="float-right" tabIndex={-1}>
                <b className="underline">October 2023</b>
              </a>
              <p>
                Acquiring critical skills to protect Node.js applications
                against SQL Injection, XSS, and CSRF threats reflects my
                commitment to becoming a proficient MERN Stack Developer in the
                future.
              </p>
            </li>
            <li>
              <a
                target="_blank"
                rel=""
                id="cardHover"
                aria-label="Open my education"
                href=""
                className=" hover:underline"
              >
                Learn MongoDB Course. <small>CodeCademy</small>
              </a>
              <a className="float-right" tabIndex={-1}>
                <b className="underline">October 2023</b>
              </a>
              <p>
                Obtaining a MongoDB certification involved honing essential
                skills in database management, ensuring secure and optimized
                operations for various applications.
              </p>
            </li>
          </ul>
        </article>

        <Gotolink
          content={"Lets Continue To Projects."}
          linkpath={"/projects"}
        />
      </div>
    </section>
  );
}

export default About;
