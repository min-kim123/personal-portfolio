import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro";
import ProjectCard from "./components/ProjectCard";
import "./globals.css";

const projects = [
  {
    title: "Advocare",
    description: "Platform to connect patients with the best match medical bill advocate who can get their bills lowered. ",
    link: "/project1",
  },
  {
    title: "Netly",
    description:
      "Social media for college clubs. Schedule coffee chats, apply to clubs, share fun events.",
    link: "/project2",
  },
  {
    title: "Memory Tiles",
    description:
      "Fun little memory game!",
    link: "/project3",
  },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-gray-100">
              <Intro />
              <div className="mx-6">
                <h1 className="text-3xl mb-8">Latest Projects</h1>
                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <ProjectCard
                      key={index}
                      title={project.title}
                      description={project.description}
                      link={project.link}
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
    </Router>
  );
}

export default App;
