import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="/assets/post/3.jpeg"
                alt="post"
                className="profileCoverImge"
              />
              <img
                src="/assets/person/7.jpeg"
                alt="post"
                className="profileUserImge"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Josimar Victoria</h4>
              <span className="profileInfoDesc">Frontend Developer</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
