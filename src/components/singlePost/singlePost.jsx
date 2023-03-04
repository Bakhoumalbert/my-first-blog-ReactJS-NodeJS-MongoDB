import './singlePost.css'
import lamer from "../../assets/lamer.jpg";

export default function singlePost() {
  return (
    <div className='singlePostWrapper'>
      <img src={lamer} alt="singlepost" className="singlePostImg" />
        <h1 className='singlePostTitle'>
            Motivation 
            <div className='singlePostEdit'>
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
        </div>    
        </h1>
        <div className="singlePostInfo">
            <span className='singlePostAutor'>
                Autor : <b>Albert</b>
            </span>
            <span className='singlePostDate'>1 hour ago </span>
        </div>
        <p className='singlePostDesc'>
            Etudiant en licence 2 à l’Université Amadou Mahtar Mbow (UAM), à l’Ecole des Science et 
            Technique de l’Ingénierie (ESTI) et passionné par l'informatique et les nouvelles technologies, 
            je serai honoré de suivre cette formation, persuadé que votre formation m'apportera les 
            connaissances et compétences nécessaires pour atteindre mes objectifs professionnel.
            Etudiant sérieux et investi dans mon école, j'estime avoir acquis les connaissances nécessaires 
            pour intégrer votre formation et décrocher ce certificat qui me permettra d’avancé dans mon 
            parcours. En effet je possède de solides connaissances scientifiques ainsi qu'un fort intérêt 
            pour l'informatique qui m'a permis d'acquérir des compétences informatiques de façon 
            autodidacte.
            Je me tiens bien entendu à votre entière disposition pour vous parler de ma candidature en
            personne, conscient qu'une lettre ne puisse suffire pour vous révéler mes vives motivations.
            Etudiant en licence 2 à l’Université Amadou Mahtar Mbow (UAM), à l’Ecole des Science et 
            Technique de l’Ingénierie (ESTI) et passionné par l'informatique et les nouvelles technologies, 
            je serai honoré de suivre cette formation, persuadé que votre formation m'apportera les 
            connaissances et compétences nécessaires pour atteindre mes objectifs professionnel.
            Etudiant sérieux et investi dans mon école, j'estime avoir acquis les connaissances nécessaires 
            pour intégrer votre formation et décrocher ce certificat qui me permettra d’avancé dans mon 
            parcours. En effet je possède de solides connaissances scientifiques ainsi qu'un fort intérêt 
            pour l'informatique qui m'a permis d'acquérir des compétences informatiques de façon 
            autodidacte.
            Je me tiens bien entendu à votre entière disposition pour vous parler de ma candidature en
            personne, conscient qu'une lettre ne puisse suffire pour vous révéler mes vives motivations.
        </p>
    </div>
  )
}
