

export default function Intro() {
  return (
    <div className="bg-gray-100 p-8 flex items-center justify-center">

      <div className="mr-8">
        <img src="/headshot.png" alt="Min Kim" className="h-80 w-80 rounded-full" />
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


      </div>
    </div>
  );
}
