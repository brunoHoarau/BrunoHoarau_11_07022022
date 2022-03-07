import { datas } from "../__mock__/Datas";
import "../styles/pages/Fiche.css"
import "../styles/components/Gallery.css"
import FicheContain from "../components/FicheContain";
import ShowSlider from "../components/ShowSlider";


function Fiches({id}) {

// Recupération de l'id en params dans l'URL
  let collectId = window.location.pathname;
  collectId = collectId.substring(1, collectId.length)

  let ficheDatas = {};

  datas.map( (data) => {
    return( 
      data.id.includes(collectId) ? ficheDatas = Object.assign(data) : ""
    )
  })

  let pictures = ficheDatas.pictures;
  pictures = Array.from(pictures)

  return(
    <div className="fiche">
        <div className="fiche-gallery" >
          < ShowSlider img={pictures}/>
        </div>
        <FicheContain props={ficheDatas} />
    </div>
  )
}

export default Fiches;