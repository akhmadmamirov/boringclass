import React from "react";
import { actions } from "../../../data/actions"
import Asset from "./Asset"

const LeftNav : React.FC = () => {
  return (
    <div className="border border-white-600 p-3 gap-x-6 gap-y-10 overflow-scroll">
      <div className="grid grid-cols-2">
        {actions.map((action, index) => (
          <div key={index}>
            <Asset action={action}/>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default LeftNav;

