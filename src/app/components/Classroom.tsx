import Image from "next/image"

export default function Classroom() {
  return (
    <div className="col-span-2 content-center pl-20 ml-20">
      <div className="pl-20">
        <Image 
          src="/baturro.png"
          width={350}
          height={350}
          alt="jenkins"
        />
      </div>
    </div>
  )
}