import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/singlePost";

export default function Single() {
  return (
    <div className="single">
      {/* Our post */}
      <SinglePost />
      <Sidebar />
    </div>
  )
}
