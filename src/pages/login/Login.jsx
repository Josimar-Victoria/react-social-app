import './login.css'

export default function Login() {
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
                   <input type="text" className="loginInput" placeholder="Email"/>
                   <input type="text" className="loginInput" placeholder="Password"/>
                    <button className='loginButton'>Iniciar sesión</button>
                    <span className="loginForgot">Has olvidado tu contraseña</span>
                    <button className='loginRegisterButton'>Crear sesión</button>
                   </div>
                </div>
            </div>
        </div>
    )
}
