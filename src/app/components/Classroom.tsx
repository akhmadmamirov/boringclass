import Image from "next/image"

export default function Classroom() {
  return (
    <div className="content-center col-span-2">
      <div className="">
        <Image 
          src="/jenkins.png"
          width={500}
          height={500}
          alt="jenkins"
        />
      </div>
    </div>
  )
}