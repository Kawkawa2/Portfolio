import Gotolink from "./gotolink";

function About() {
  return (
    <section className="min-h-[calc(100vh - 40vh)] flex items-center justify-center">
      <div className="max-w-4xl">
        <a href="/">
          <h1 className="relative my-8 mx-0 uppercase tracking-[9.9px] text-gray-900 text-4xl font-bold">
            About
          </h1>
        </a>

        {/* Experience section */}
        <article className="my-20">
          <h4 className="text-2xl capitalize font-normal text-blue-700 hover:text-gray-500">
            My experience.
          </h4>
          <ul className="timeline">
            <li>
              <div className="flex flex-wrap justify-between items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open my experience"
                  href=""
                  className="hover:underline"
                >
                  Full Stack Developer. <small>Soorcin</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <b className="underline">January 2024 - Present</b>
                </a>
              </div>
              <p>
                As a Full Stack Developer at Soorcin, I lead MERN stack
                (MongoDB, Express.js, React.js, Node.js) and Laravel web
                application development, manage version control with GitHub, and
                oversee project deployment in an agile team. I ensure top
                project quality by implementing best practices and using tools
                like SonarQube.
              </p>
            </li>

            <li>
              <div className="flex flex-wrap justify-between items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open my experience"
                  href=""
                  className="hover:underline"
                >
                  MERN Stack Developer. <small>Ark-x Talent Factory</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <b className="underline">August 2023 - December 2023</b>
                </a>
              </div>
              <p>
                During my Position at Ark-x Talent Factory, I developed and
                implemented applications using the MERN stack (MongoDB,
                Express.js, React.js, Node.js). I worked effectively within
                cross-functional teams, adhering to Agile methodologies like
                Scrum to plan and execute project tasks. Additionally, I pursued
                Codecademy certificates to expand my knowledge of programming
                languages and technologies.
              </p>
            </li>
            <li>
              <div className="flex flex-wrap justify-between items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open my experience"
                  href=""
                  className="hover:underline"
                >
                  Junior Full Stack developer. <small>Technologies 4You</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <b className="underline">April 2023 - May 2023</b>
                </a>
              </div>

              <p>
                During End of studies internship at Technologies 4YOU, I led the
                development of a dynamic website using Laravel, enabling
                seamless connections between clients and artisans. Additionally,
                I gained valuable SEO experience by implementing backlink
                strategies on external websites, enhancing visibility and search
                engine rankings to drive business outcomes.
              </p>
            </li>
          </ul>
        </article>

        {/* Education section */}
        <article className="my-10">
          <h4 className="text-2xl capitalize font-normal text-blue-700 hover:text-gray-500">
            My education.
          </h4>
          <ul className="timeline">
            <li>
              <div className="flex flex-wrap justify-between items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open my education"
                  href=""
                  className="hover:underline"
                >
                  Specialized Technician In Digital Development.{" "}
                  <small>ISGI-OFPPT</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <b className="underline">2021 - 2023</b>
                </a>
              </div>

              <p>
                Graduated from ISGI-OFPPT as a Full Stack Developer (2021-2023)
                with expertise in web development.
              </p>
            </li>
            <li>
              <div className="flex flex-wrap justify-between items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open my education"
                  href=""
                  className="hover:underline"
                >
                  International Baccalaureate In Physical Science.{" "}
                  <small>El Baroudi High School</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <b className="underline">2020 - 2021</b>
                </a>
              </div>

              <p>
                Attained an International Baccalaureate in Physical Science with
                distinction at El Baroudi High School. Gained fundamental
                knowledge.
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
              <div className="flex flex-wrap justify-between items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open my certification"
                  href="#"
                  className="hover:underline"
                >
                  Defending Node Applications from SQL Injection, XSS, & CSRF
                  Attacks Course. <small>CodeCademy</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <b className="underline">October 2023</b>
                </a>
              </div>

              <p>
                Acquired critical skills to protect Node.js applications against
                SQL Injection, XSS, and CSRF threats, reflecting my commitment
                to becoming a proficient MERN Stack Developer.
              </p>
            </li>
            <li>
              <div className="flex flex-wrap justify-between items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open my certification"
                  href="#"
                  className="hover:underline"
                >
                  Learn MongoDB Course. <small>CodeCademy</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <b className="underline">October 2023</b>
                </a>
              </div>

              <p>
                Obtained a MongoDB certification, honing essential skills in
                database management to ensure secure and optimized operations
                for various applications.
              </p>
            </li>
            <li>
              <div className="flex flex-wrap justify-between items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open my certification"
                  href="#"
                  className="hover:underline"
                >
                  User Authentication & Authorization in Express (OAuth 2.0).{" "}
                  <small>CodeCademy</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <b className="underline">October 2023</b>
                </a>
              </div>

              <p>
                Mastered techniques for implementing OAuth 2.0 protocols in
                Express.js, enabling secure user authentication and
                authorization mechanisms in web applications.
              </p>
            </li>
          </ul>
        </article>

        {/* Volunteer section */}
        <article className="my-20">
          <h4 className="text-2xl capitalize font-normal text-blue-700 hover:text-gray-500">
            My volunteer experience.
          </h4>
          <ul className="timeline">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                id="cardHover"
                aria-label="Open my volunteer experience"
                href=""
                className="hover:underline"
              >
                Volunteer. <small>Dar Al Inmaa Foundation</small>
              </a>
              <a className="float-right" tabIndex={-1}>
                <b className="underline">September 2023 - Present</b>
              </a>
              <p>
                Actively volunteering at the Dar Al Inmaa Foundation,
                contributing to community service projects and leveraging my
                technical skills to support various initiatives.
              </p>
            </li>
          </ul>
        </article>

        <Gotolink
          content={"Let's Continue To Projects."}
          linkpath={"/projects"}
        />
      </div>
    </section>
  );
}

export default About;
