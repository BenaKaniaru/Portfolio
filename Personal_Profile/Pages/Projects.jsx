import Header from "../src/components/Header"
import Footer from "../src/components/Footer.jsx";
import projectsData from "../src/data/Projects.js"
import {useState} from "react"
export default function Projects () {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({...prev, [id]: !prev[id],
    }) );
  }

  return (
    <div>
      <Header />
      <main className="flex flex-col mt-16">
        <section className="bg-[url('/images.jpeg')] bg-cover bg-center bg-fixed w-full h-[40vh] md:h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-4xl font-black self-center">
              My Projects
            </h1>
          </div>
        </section>
        <section className="bg-gray-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col bg-gray-100 p-2 gap-2 mt-6 mb-6 md:-mt-20 text-black mx-8 shadow-lg"
            >
              <h1 className="font-black text-2xl text-center">
                {" "}
                {project.title}
              </h1>
              <div className="relative group">
                <img
                  src={project.image}
                  className="group-hover:opacity-95"
                  alt="Project screenshot"
                />
                <div className="flex flex-col sm:flex-row gap-2 items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-700 transition">
                      Live Demo
                    </button>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-700 transition">
                      Source Code
                    </button>
                  </a>
                </div>
              </div>

              {!expanded[project.id] && (
                <div>
                  <p>{project.shortDescription}</p>{" "}
                  <span
                    className="text-blue-600 cursor-pointer hover:text-blue-800"
                    onClick={() => toggleExpand(project.id)}
                  >
                    See more
                  </span>
                </div>
              )}

              {expanded[project.id] && (
                <div>
                  <p>{project.fullDescription}</p>
                  <span
                    span
                    className="text-blue-600 cursor-pointer hover:text-blue-800"
                    onClick={() => toggleExpand(project.id)}
                  >
                    See Less
                  </span>
                </div>
              )}
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}