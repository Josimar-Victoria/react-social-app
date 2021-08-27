import React from "react";
import { User } from "../../../dummyData";
import Online from "../../online/Online";
import "./homeRightbar.css";

export default function HomeRightbar() {
  return (
    <>
      <div className="bithdayConatiner">
        <img className="bithdayImg" src="/assets/gift.png" alt="" />
        <span className="birthdayText">
          <b> Pola Foster </b> y <b>otros 3 amigos </b>tienen un cumpleaños hoy
        </span>
      </div>
      <img className="rightbarAd" src="/assets/ad.png" alt="kk" />
      <h4 className="rightbarTitle">Amigos en línea</h4>
      <ul className="rightbarFriendList">
        {User.map((online) => (
          <Online key={online.id} user={online} />
        ))}
      </ul>
    </>
  );
}
