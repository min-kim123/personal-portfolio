export default function ProjectCard({ title, description, link }) {
  return (
    <a
      href={link}
      className=" p-6 mb-6 block border rounded-lg shadow-md transition bg-white hover:bg-gray-300"
    >
      <h2 className="text-xl  mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </a>
  );
}
