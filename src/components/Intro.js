import { FaGithub, FaLinkedin } from "react-icons/fa"; 

export default function Intro() {
  return (
    <div className="bg-gray-100 p-8 flex items-center justify-center">

      <div className="mr-8">
        <img src="/circle_headshot.png" alt="Min Kim" className="h-80 w-80 rounded-full" />
      </div>

      <div className="flex flex-col">
        <p className="text-xl mb-1">👋 Hey! I am </p>
        <p className="text-4xl mb-1 font-bold">Min Kim</p>

        <p className="text-xl mb-3">
          I am an engineer passionate about product, engineering, and sustainability.
        </p>
        <p className="text-lg">🛠️ Mechanical Engineering Student</p>
        <p className="text-lg">☀️ University of Southern California</p>
        <p className="text-lg">📍 Los Angeles, CA</p>

        <div className="flex mt-4 space-x-4">
          <a
            href="https://github.com/min-kim123"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-gray-400 text-3xl transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/153minkim/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800 text-3xl transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
