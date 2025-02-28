import Image from "next/image"
import React from "react"
import { IconsContext } from "../context/iconsContext"
import { useContext } from "react"

const ClassRoom = () => {
  let {icons} = useContext(IconsContext)

  return (
    <div className="col-span-2 content-center pl-10 ml-10">
      <div className="jenkins-container">
        <div className="">
          <Image 
              src="/baturro.png"
              width={350}
              height={350}
              alt="jenkins"
            />
        </div>
        <div className="rotating-object">
          {icons.map(() => (
            <Image 
             src="/iphone.png"
             width={75}
             height={75}
             alt="iphone"
           />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClassRoom;