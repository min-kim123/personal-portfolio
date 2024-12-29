export default function ProjectCard({ title, description, link, picture }) {
  return (
    
    <div
      className=" p-6 mb-6 block border rounded-lg shadow-md transition bg-white"
    >
            <h2 className="text-xl  mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
      <img
        src={process.env.PUBLIC_URL + `/${picture}`}
        alt={title}
        className="h-80 object-cover rounded-md mb-4"
      />

    </div>
  );
}
