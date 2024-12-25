// import Image from 'next/image'

export default function Intro() {
  return (
    <div className=" bg-gray-100 p-8 flex flex-col items-center justify-start">
      <div >
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

