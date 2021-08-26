import { Chat, Notifications, Person, Search } from "@material-ui/icons";
import "./topbar.css";
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Lamasocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input
            className="searchInput"
            type="text"
            placeholder="Search for friend, post or video"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLikes">
          <div className="tobarLink">Homepages</div>
          <div className="tobarLink">Timeline</div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="person" className="topbarImg" />
      </div>
    </div>
  );
}
