import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro";
import ProjectCard from "./components/ProjectCard";
import "./globals.css";
import Navbar from "./components/Navbar";

const projects = [
  {
    title: "Advocare",
    description:
      "Platform to connect patients with the best match medical bill advocate who can get their bills lowered. ",
    github: "/project1",
    picture: "advocare.png",
  },
  {
    title: "Netly",
    description:
      "Social media for college clubs. Schedule coffee chats, apply to clubs, share fun events.",
    link: "/project2",
    picture: "netlypic.png",
  },
  {
    title: "Memory Tiles",
    description: "Fun little memory game!",
    link: "/project3",
    picture: "memtiles.png",
  },
];

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-col items-center justify-center">
                <Intro />
                <div className="mx-6 mt-8">
                  <h1 className="text-3xl mb-8">Latest Projects</h1>
                  <div className="space-y-6">
                    {projects.map((project, index) => (
                      <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        picture={project.picture}
                      />
                    ))}
                  </div>
                </div>
              </div>
            }
          />

          {projects.map((project, index) => (
            <Route
              key={index}
              path={project.link}
              element={
                <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                  <h1 className="text-4xl font-bold">{project.title}</h1>
                  <p className="text-xl mt-4">{project.description}</p>
                </div>
              }
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
