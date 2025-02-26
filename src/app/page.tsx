import LeftNav from "./components/LeftNav";
import Classroom from "./components/Classroom";
import Leaderboard from "./components/Leaderboard";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-10 py-20 pl-10 pr-20">
        <LeftNav />
        <Classroom />
        <Leaderboard />
    </div>
  );
}
