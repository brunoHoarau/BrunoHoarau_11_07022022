import Cards from '../components/Cards';
import '../styles/pages/Home.css'
import { datas } from '../__mock__/Datas';


function Home() {

  return(
    <section className="main">
      <article className="main-header" role="banner">
         <h1>Chez vous,

            partout et ailleurs</h1>
      </article>
      <article className='cards'>
        { datas.map( ({id, title, cover}) => {
          return (
            <Cards 
              key={id} 
              id={id}
              title={title}
              cover={cover}
            />
          )
        })}
      </article>
    </section>
  )
}

export default Home;