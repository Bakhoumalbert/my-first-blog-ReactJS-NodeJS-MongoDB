import './post.css'
import poster_la_mer from "../../assets/lamer.jpg";

export default function Post() {
  return (
    <div className='post'>
      <img className='postImg' src={poster_la_mer} alt="my_post" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Life</span>
            <span className="postCat">Music</span>
        </div>
        <span className="postTitle">
            mon premier post
        </span>
        <hr />
        <div className="postDate">Il y a une heure</div>
        <p className='postDesc'>J'aime la music, et le sport. Se sont deux choses très importants dans ma vie.
        En faisant du sport j'ai h'abitude d'écouter de la music. Surtout la music qui glorie Dieu; car si je suis
        ic sur Terre c'est grâce Jesus.
        J'aime la music, et le sport. Se sont deux choses très importants dans ma vie.
        En faisant du sport j'ai h'abitude d'écouter de la music. Surtout la music qui glorie Dieu; car si je suis
        ic sur Terre c'est grâce Jesus
        </p>
      </div>
    </div>
  )
}
