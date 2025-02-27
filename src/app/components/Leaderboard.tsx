import { leaderBoard } from "../../../data/leaderboard"
import Image from "next/image"

export default function Leaderboard() {
  return(
    <div className="border border-white-600 h-2/4 overflow-y-scrol">
      <div>
        {leaderBoard.map((leader, index) => (
          <div key={index} className="grid grid-cols-3 items-center text-lg">
              <div className="">
                <Image src={leader.icon} alt="action image"
                  width={150} height={150} />
              </div>
              <div className="text-center">
                {leader.name}
              </div>
              <div className="text-center">
                {leader.score}
              </div>
            </div>

        ))}
      </div>
    </div>
  )
}