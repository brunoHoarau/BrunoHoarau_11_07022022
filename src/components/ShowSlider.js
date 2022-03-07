import { useState } from "react";
import arrowGallery from "../public/Vectorgallery.svg"


const ShowSlider = (props) => {
  const [index, setIndex] = useState(0);

  const propsSize = props.img.length -1;
  
  const handleClickPrev = () => {
    if(index === 0 ){
      setIndex(propsSize)
    } else {
      setIndex( index - 1)
    }
  }

  const handleClickNext = () => {
    if( index === propsSize ){
      setIndex(0)
    } else {
      setIndex( index + 1)
    }
  }

  const Controller = () => {

    return(
      <div className="slideController">
        <img src={arrowGallery} id="less" onClick={ () => handleClickPrev() } alt="arrow-less"/>
        <img src={arrowGallery} id="more" onClick={ () => handleClickNext() } alt="arrow-more"/>
      </div>
    )
  }

  return(
    <div className="showSlide">
      <div className="slideShow-container">
      {props.img.map((picture, key) => {
        if( key === index ) {
          console.log(key)
          return(
          <img className="slideShow-img" src={picture} key={picture} alt={"img-"+ key} />
        )
        }
      })}
      </div>
      { propsSize > 0 ? < Controller /> : console.log('nop')}
      
    </div>
  )
}

export default ShowSlider;