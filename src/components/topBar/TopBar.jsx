import "./topBar.css";
import monprofil from "../../assets/profil.jpg";
const TopBar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
      <ul className="topList">
      <li className="topListItem">HOME</li>
      <li className="topListItem">ABOUT</li>
      <li className="topListItem">CONTACT</li>
      <li className="topListItem">WRITE</li>
      <li className="topListItem">LOGOUT</li>
      </ul>
      </div>
      <div className="topRight">
      <img className="topImg" src={monprofil} alt="my profil" />
      <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default TopBar