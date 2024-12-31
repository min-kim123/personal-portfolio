import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-gray-50 p-4 rounded-lg mx-4 my-2 shadow-md ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className=" text-xl font-bold">Min Kim</h1>
        <div className="flex space-x-4">
          <a
            href="https://github.com/min-kim123"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-gray-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/153minkim/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
