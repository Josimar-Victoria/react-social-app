import { User } from "../../dummyData";
import Online from "../online/Online";
import "./rightbar.css";
export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="bithdayConatiner">
          <img className="bithdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            <b> Pola Foster </b> y <b>otros 3 amigos </b>tienen un cumpleaños
            hoy
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.png" alt="kk" />
        <h4 className="rightbarTitle">Amigos en línea</h4>
        <ul className="rightbarFriendList">
           {User.map((online) => (
             <Online key={online.id} user={online}/>
           ))}
        </ul>
      </div>
    </div>
  );
}
