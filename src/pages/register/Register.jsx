import './register.css'

export default function Register() {
  return (
    <div className='register'>
        <span className="registerTitle">Enregistrer</span>
        <form className="registerForm">
        <label>Nom</label>
            <input className='registerInput' type="text" placeholder="nom d'utilsateur..." />
            <label>Email</label>
            <input className='registerInput' type="email" placeholder='votre email ...' />
            <label>Password</label>
            <input className='registerInput' type="password" placeholder='votre mot de pass...' />
            <button className='registerButton'>Enregistrer</button>
        </form>
        <button className="registerLoginButton">Connexion</button>
    </div>
  )
}
