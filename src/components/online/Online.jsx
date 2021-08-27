import "./online.css";
export default function Online({ user }) {
  return (
    <li className="rightbarFriends">
      <div className="rightbarProfileImgContainer">
        <img
          className="rightbarProfileImg"
          src={user.profilePicture}
          alt="kk"
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
}
