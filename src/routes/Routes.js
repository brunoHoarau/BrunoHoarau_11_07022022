import { datas } from '../__mock__/Datas'
import Home from '../pages/Home'
import { Routes, Route } from 'react-router-dom'
import About from '../pages/About';
import Fiches from '../pages/Fiches';
import Error404 from '../pages/404'

export let arrId = [] ;

const createRoutes = () => {
  datas.map( ({id}) => {
    (arrId.push(id))
  })
}
createRoutes()

const RouteCreated = () => {
  return(
<Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          { arrId.map( elmt => {
            return (<Route exact path={elmt} element={<Fiches id={elmt}/>} key={elmt}/> 
          )})}
          <Route path='*' element={<Error404 />} />
        </Routes>
  )
}

export default RouteCreated;
