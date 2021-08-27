import "./profileRightbar.css";
export default function ProfileRightbar() {
  return (
    <>
      <h4 className="rightbarTitle"> Informacion del Usuario</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Ciudad:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">De Donde eres:</span>
          <span className="rightbarInfoValue">Colombia</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relación:</span>
          <span className="rightbarInfoValue">Soltero</span>
        </div>
      </div>
      <h4 className="rightbarTitle">Amigos del usuario</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollow">
          <img
            src="assets/person/1.jpeg"
            alt="phot"
            className="rightbarFollowingsImg"
          />
          <span className="rightbarFollowingsName">Harry Potter</span>
        </div>
        <div className="rightbarFollow">
          <img
            src="assets/person/2.jpeg"
            alt="phot"
            className="rightbarFollowingsImg"
          />
          <span className="rightbarFollowingsName">Harry Potter</span>
        </div>
        <div className="rightbarFollow">
          <img
            src="assets/person/3.jpeg"
            alt="phot"
            className="rightbarFollowingsImg"
          />
          <span className="rightbarFollowingsName">Harry Potter</span>
        </div>
        <div className="rightbarFollow">
          <img
            src="assets/person/4.jpeg"
            alt="phot"
            className="rightbarFollowingsImg"
          />
          <span className="rightbarFollowingsName">Harry Potter</span>
        </div>
        <div className="rightbarFollow">
          <img
            src="assets/person/5.jpeg"
            alt="phot"
            className="rightbarFollowingsImg"
          />
          <span className="rightbarFollowingsName">Harry Potter</span>
        </div>
        <div className="rightbarFollow">
          <img
            src="assets/person/5.jpeg"
            alt="phot"
            className="rightbarFollowingsImg"
          />
          <span className="rightbarFollowingsName">Harry Potter</span>
        </div>
      </div>
    </>
  );
}
