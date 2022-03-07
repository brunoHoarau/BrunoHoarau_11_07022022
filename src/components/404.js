import { Link } from "react-router-dom";
import "../styles/pages/404.css"

function Components404() {
return (
  <div className="component404">
    <p className="number404">404</p> 
    <p className="text404">Oups! La page que vous avez demandé n'existe pas</p>
    <Link to="/" className="gobackhome">Retourner sur la page d'accueil</Link>
  </div>
)

}

export default Components404;