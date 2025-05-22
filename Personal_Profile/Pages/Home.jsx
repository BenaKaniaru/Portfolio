import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <main className="flex flex-col mt-18">
        <section className='relative bg-[url("/software.jpg")] bg-cover bg-center bg-fixed min-h-screen '>
          {/*Overlay to add opacity to the backgroud image for enhanced visibility of the foreground text*/}
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          {/*Foreground text*/}
          <div className=" relative z-20 md:w-120 w-80 mx-auto md:mx-16 my-15 md:mt-30 flex items-center flex-col text-center md:text-left gap-4 text-white">
            <h1 className="text-2xl md:text-4xl  mb-6 font-bold">
              Benard Kaniaru: <span className="text-red-500">Front-end Web Developer </span>
            </h1>
            <p className="text-md/4 md:text-lg/7">
              <Typewriter
                words={[
                  `I specialize in developing user interfaces for custom websites and web-based applications. I focus on delivering high-quality, bespoke solutions that are both visually appealing and functional to ensure your target users and audience have a seamless experience. My mission is to help bring your ideas to life and help you thrive in the digital world.`,
                ]}
                loop={1}
                cursor={false} //set to false to remove the cursor for this text
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </p>

            <button className="text-white hover:cursor-pointer self-center mt-10 px-4 py-1 font-semibold rounded-lg bg-red-500 z-10" onClick={()=>navigate("/Contact")}>
              Get in Touch
            </button>
          </div>
        </section>

        <section className="flex flex-col bg-white z-20 gap-4 my-10 relative w-full">
          <h1 className="text-2xl font-bold self-center">My Skills</h1>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-16">
            <div className="flex flex-col gap-2 bg-blue-100 items-center text-center rounded-lg shadow-lg p-4 md:p-6">
              <img className="w-20" src="/html.png" alt="html Icon" />
              <span className="font-semibold">HTML5 and Semantic Markup</span>
              <p className="font-light">
                Skilled in writing clean, semantic HTML to build accessible and
                SEO-friendly web pages.
              </p>
            </div>

            <div className="flex flex-col gap-2 bg-blue-100 items-center text-center rounded-lg shadow-lg p-4 md:p-6">
              <img className="w-20" src="/css-3.png" alt="CSS-3 Icon" />
              <span className="font-semibold">
                CSS3 and Responsive web Design
              </span>
              <p className="font-light">
                Proficient in CSS, including Flexbox, Grid, and Media queries to
                create responsive, mobilie-first designs.
              </p>
            </div>

            <div className="flex flex-col gap-2 bg-blue-100 items-center text-center rounded-lg shadow-lg p-4 md:p-6">
              <img className="w-20" src="/js.png" alt="Javascript Icon" />
              <span className="font-semibold">JavaScript (ES6+)</span>
              <p className="font-light">
                Experienced in using modern javascript fot dynamic client-side
                interactions and logic.
              </p>
            </div>

            <div className="flex flex-col gap-2 bg-blue-100 items-center text-center rounded-lg shadow-lg p-4 md:p-6">
              <img className="w-20" src="/atom.png" alt="React Icon" />
              <span className="font-semibold">React</span>
              <p className="font-light">
                Hands-on experience in building scalable and single page
                applications using React.js, including hooks and state
                management.
              </p>
            </div>

            <div className="flex flex-col bg-blue-100 items-center text-center rounded-lg shadow-lg p-4 md:p-6">
              <img className="w-20" src="/wind.png" alt="Tailwind rep" />
              <span className="font-semibold">Tailwind CSS</span>
              <p className="font-light">
                Proficient in using Tailwind CSS to rapidly build and style
                modern, utility-first user interfaces.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
