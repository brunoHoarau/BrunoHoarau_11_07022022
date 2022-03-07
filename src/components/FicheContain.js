import "../styles/components/FicheContain.css"
import Stars from "./Stars";
import Collapses from "./Collapses";


function FicheContain({props}) {
  const id = props.id ;
  const titre = props.title;
  const location = props.location;
  const fullName = props.host.name.split(' ');
  const profilePic = props.host.picture;
  const allTags = Array.from(props.tags);
  const rating = Number(props.rating);
  const description = props.description
  const equipments = props.equipments;

  return(
    <main className="main-fiche">
      <section className="fiche-header">
        <article className="infos">
          <div className="h1-location">
            <h1>{titre}</h1>
            <p>{location}</p>
          </div>
          <div className="tags">
            {allTags.map( (tag, key) => {
              return ( <span key={key}>{tag}</span>)})}
          </div>
        </article>
        <article className="more-about">
        <div className="host">
              { 
                <p className="host-identity">{fullName[0]}<br/>{fullName[1]}</p>
              }
            <img className="host-img" src={profilePic} alt="profile" />
          </div>
          
          <div className="rate">
            <Stars rating={rating}/>
          </div>
        </article>
      </section>
      <section className="main-content">
        { <Collapses title="Description" txt={description} class={"description"}  id={id} /> }
        { <Collapses title="Equipements" txt={equipments} class={"equipements"} id={id}/> }
      </section>
    </main>
  )
}

export default FicheContain;
