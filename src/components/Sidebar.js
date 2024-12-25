// import Image from 'next/image'

export default function Sidebar() {
  return (
    <div className="fixed w-1/4 h-screen bg-gray-100 p-8 flex flex-col items-center justify-start">
      <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6">
        {/* <Image
          src="/placeholder.svg?height=192&width=192"
          alt="Your Name"
          layout="fill"
          objectFit="cover"
        /> */}
      </div>
      <p className="text-center text-lg">
        Hi! I'm
      </p>
      <div className="text-7xl">
        Min Kim
      </div>
      <p className="text-center text-lg">
        Mechanical Engineering @ University of Southern California
      </p>
      <p className="text-center text-lg">
        Los Angeles
      </p>
    </div>
  )
}

