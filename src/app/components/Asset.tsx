import React from "react"
import Image from "next/image"

interface ActionItem {
  name: string,
  icon: string, 
  price: number
}

interface AssetProps {
  action: ActionItem
}

const Asset: React.FC<AssetProps> = ({action}) => {
  return (
    <div className="m-3 ml-5 place-items-center border border-white-600 rounded-xl">
      <div className="p-2">
        {action.name}
      </div>
      <div className="mt-4 mb-4">
        <Image src={action.icon} alt="action image"
          width={75} height={75}
        />
      </div>
      <div className="text-lg">
         $ {action.price}
      </div>
    </div>
  )
}

export default Asset;