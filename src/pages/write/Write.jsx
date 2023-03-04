import './write.css'
import me from "../../assets/moi1.jpg";

export default function Write() {
  return (
    <div className='write'>
        <img className='writeImg' src={me} alt="/" />
      <form className='writeForm'>
        <div className='writeFormGroup'>
            <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id='fileInput' style={{display: "none"}} />
            <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
        </div>
        <div className="writeFormGroup">
            <textarea placeholder='Ecris ton histoire...' className='writeInput writeText' id="text"></textarea>
        </div>
        <button className="writeSubmit">Publier</button>
      </form>
    </div>
  )
}
