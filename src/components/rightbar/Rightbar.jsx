import ProfileRightbar from "./profileRightbar/ProfileRightbar";
import HomeRightbar from "./homeRightbar/HomeRightbar";
import "./rightbar.css";
export default function Rightbar({ profile }) {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
