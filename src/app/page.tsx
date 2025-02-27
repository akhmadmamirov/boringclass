import LeftNav from "./components/LeftNav";
import Classroom from "./components/Classroom";
import Leaderboard from "./components/Leaderboard";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-10 py-10 pl-5">
        <LeftNav />
        <Classroom />
        <div className="p-10">
        <Leaderboard />
        </div>
    </div>
  );
}
