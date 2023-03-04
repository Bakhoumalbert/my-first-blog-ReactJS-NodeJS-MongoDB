import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"
import myProfil from "../../assets/moi7.jpg";

export default function Settings() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your Account</span>
          <span className="settingsUpdateTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img className="settingsImg" src={myProfil} alt="pyprofil" />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display: 'none'}} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Alou" />
          <label>Email</label>
          <input type="text" placeholder="alou@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="..." />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
