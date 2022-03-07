import ArrowSvg from "../public/vectorArrow.svg";
import { useCallback, useState } from "react";

const Collapses = (props) => {
  const title = props.title;
  const txt = props.txt;

  const [ expanded, setExpanded] = useState(false);
  const toggle = useCallback( () => setExpanded(!expanded), [expanded])

  return (
    <article className={ props.class ? props.class : "article-about"} >
      <div className="article-head" 
        onClick={ () => toggle() }
      >
        <h2 className="h2-about" >{title}</h2>
        <span className={expanded ? "arrow-reverse" : "arrow"}>
        <img src={ArrowSvg} alt="arrow"/></span>
      </div>
      { 
      <div className={expanded ? "article-text" : "article-text-hidden"}>
        { typeof(txt) === "object" ? txt.map( (txt, key) => {return <p key={key}>{txt}</p>}) : <p>{txt}</p> } 
      </div>
      }
    </article>
  )
}

export default Collapses;