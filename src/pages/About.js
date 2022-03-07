import '../styles/pages/About.css'
import { texts }  from "../__mock__/Texts.js";
import Collapses from "../components/Collapses";

function About() {
  return (
    <section className="main-about">
      <article className="banner-about">
        <img className="img-desk" src={require("../public/Apropos.png")} alt="img banner"/>
        <img className="img-mob" src={require("../public/AproposM.png")} alt="img banner"/>
      </article>
      { texts.map( (item, key) => <Collapses title={item.section} txt={item.text} key={item.section + key} /> ) }
    </section>
     )
}

export default About;