// import { ReactComponent as Star } from '../public/star.svg'
import starSVG from '../public/star.svg'
import redStar from '../public/redStar.svg'

function Stars({rating}) {

  return(
    <div>
      { [...Array(5)].map( (star,index) => {
        index++;
        return(
          // <Star key={index} className={index <= rating ? "star-red" : "off" } />
          <img key={index} src={index <= rating ? redStar : starSVG} alt="" />
        )
      })}
    </div>
  )
}

export default Stars;