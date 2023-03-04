import './header.css';
import lumiere from "../../assets/lalumiere.jpg";

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='headerTitlesSm'>React & Node</span>
        <span className='headerTitlesLg'>Blog</span>
      </div>
      <img className='headerImg' src={lumiere} alt="homeimage" />
    </div>
  )
}
