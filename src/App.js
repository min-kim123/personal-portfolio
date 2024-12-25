import Intro from "./components/Intro";
import ProjectCard from "./components/ProjectCard";
import "./globals.css";

const projects = [
  { title: "Advocare", description: "This is a description of project 1." },
  { title: "Netly", description: "Project 2 was challenging but rewarding." },
  {
    title: "Project 3",
    description: "Collaborated with a team to design an innovative solution.",
  },
];

function App() {
  return (
    <div className=" bg-gray-100 ">
      <Intro />
<div className="mx-6">


<h1 className="text-3xl mb-8">Latest Projects</h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
</div>
      
    </div>
  );
}

export default App;
