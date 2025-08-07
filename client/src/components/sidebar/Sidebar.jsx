import "./sidebar.css";
import aboutme from "../../assets/moiblack.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      const res = await axios.get("/categories");
      console.log("cat : " + res);
      setCats(res.data);
    };
    fetchCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src={aboutme} alt="My_picture" />
        <p>
          Etudiant en licence 2 à l’Université Amadou Mahtar Mbow (UAM), à
          l’Ecole des Science et Technique de l’Ingénierie (ESTI) et passionné
          par l'informatique et les nouvelles technologies, je serai honoré de
          suivre cette formation, persuadé que votre formation m'apportera les
          connaissances et compétences nécessaires pour atteindre mes objectifs
          professionnel.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((cat, index) => (
            <Link key={index} to={`/?cat=${cat.name}`} className="link">
              <li className="sidebarListItem">{cat.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}
