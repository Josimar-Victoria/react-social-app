import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Conéctese con amigos y el mundo que nos rodea en Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
          <input type="text" className="loginInput" placeholder="Nombre de Usuario" />
            <input type="text" className="loginInput" placeholder="Correo Eletronico" />
            <input type="text" className="loginInput" placeholder="Contraseña" />
            <input type="text" className="loginInput" placeholder="Contraseña de nuevo" />
            <button className="loginButton">Inscribirse</button>
            <button className="loginRegisterButton">Iniciar sesión en la cuenta</button>
          </div>
        </div>
      </div>
    </div>
  );
}
