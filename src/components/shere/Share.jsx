import { EmojiEmotions, Label, PermMedia, Room } from "@material-ui/icons";
import "./share.css";
export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/1.jpeg" alt="Share" className="shareImg" />
          <input
            type="text"
            className="shareInput"
            placeholder="¿Qué tienes en mente?"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Foto o video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Etiqueta</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Localización</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Sentimientos</span>
            </div>
          </div>
          <button className="shareButton">compartir</button>
        </div>
      </div>
    </div>
  );
}
