export default function Intro() {
  return (
    <div className="bg-gray-100 p-8 flex items-center justify-center">
      {/* Left Section: Image */}
      <div className="mr-8">
        <img src="/circle_headshot.png" alt="Min Kim" className="h-80 w-80 rounded-full" />
      </div>

      {/* Right Section: Text */}
      <div className="flex flex-col">
        <p className="text-4xl mb-4">Hey! I'm Min, an engineer.</p>
        <p className="text-lg ">
          🛠️ Mechanical Engineering Student
        </p>
        <p className="text-lg"> ☀️ University of Southern California</p>
        <p className="text-lg">📍 Los Angeles, CA</p>
      </div>
    </div>
  );
}
