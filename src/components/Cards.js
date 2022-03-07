import { Link } from "react-router-dom";
import "../styles/components/Card.css"

function Cards({id, title, cover}) {
  return(
    <Link to={id} className="card" style={{backgroundImage : `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${cover})`}} >
      <section  >
        <h2>{title}</h2>
      </section>
    </Link>
  )
}

export default Cards;