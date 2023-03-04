import './login.css'

export default function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Connexion</span>
        <form className="loginForm">
            <label>Email</label>
            <input className='loginInput' type="email" placeholder='votre email ...' />
            <label>Password</label>
            <input className='loginInput' type="password" placeholder='votre mot de pass ...' />
            <button className='loginButton'>Connexion</button>
        </form>
        <button className="loginRegisterButton">Enregistrer</button>
    </div>
  )
}
