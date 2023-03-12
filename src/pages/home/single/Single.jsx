import Sidebar from "../../../components/sidebar/Sidebar";
import SinglePost from "../../../components/singePost/SinglePost";
import "./Single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}
