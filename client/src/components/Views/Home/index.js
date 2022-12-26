// import { useState } from 'react';

const Home = () => {
  // const [ count, setCount ] = useState(12)

  const obj = [
    {id: 0, title: 'Mario Rossi', description: 'Il Sindaco della città'},
    {id: 1, title: 'Giunta Comunale', description: 'La giunta, nominata dal sindaco, esercita collegialmente le funzioni ad essa attribuite dalla legge.'},
    {id: 2, title: 'Giunta Comunale', description: 'Il Consiglio è un organo collegiale ed elettivo che rimane in carica per 5 anni.'},
  ];

  return ( 
    <>
    <div className="container custom-height-class">
      <div className="row">
        <div className='col-12 col-md-6'>
          <h1 className='fw-bolder text-success text-center py-5'>Parte l'estate con oltre 300 eventi in centro e nei quartieri</h1>
          <p className='fs-4'>
            <strong>Inaugurazione lunedì 2 luglio</strong> con il concerto gratuito in piazza XX Settembre degli Sweet Soul Music Revue. Sul palco 20 musicisti dal tutto il mondo
          </p>
          <a href="/" className='text-success'>Tutte le novità</a>
        </div>
        <div className='col-12 col-md-6 px-2'>
          <img src="http://picsum.photos/800" width='700px' height='600px' alt="Immagine del comune" />
        </div>
         
      </div>
      <div className="row justify-content-around mb-5 offset-class">
        {obj.map(elem => {
           return (
            <div className="card col-11 col-md-3 shadow py-4 px-5" key={elem.id}>  
              <h3 className='text-dark text-capitalize fw-bold fs-4'>{elem.title}</h3>
              <p>{elem.description}</p>
              <a href="/" className='text-success'>Vai alla pagina</a>
            </div>
           )
        })}
      </div>
    </div>
    <div className="row custom-height-class bg-light-teal w-100">
      <div className='d-flex align-items-center justify-content-center flex-column mt-5 py-5'>
        <div className='event-header-class'></div>
        <div className='event-header-class'></div>
        <h2 className='fw-bolder fs-1 mt-5 mb-4'>Eventi</h2>
        <div className='bg-success col-11 col-md-8 event-header-class'>
            <h3 className='text-center text-white text-capitalize fw-bolder fs-3 py-2'>Settembre 2022</h3>
        </div>
        <div className='d-flex col-11 col-md-8'>
          {obj.map((elem, num) => {
              return (
                <div className="card col-11 col-md-4 shadow p-2" key={elem.id}>
                  <h2>{12 + num}</h2> 
                  {num === 1 && <span>lun</span>}
                  {num === 2 && <span>mar</span>}
                  {num === 3 && <span>mer</span>}
                  <h3 className='text-dark text-capitalize fw-bold fs-4'>{elem.title}</h3>
                  <p>{elem.description}</p>
                  <a href="/" className='text-success'>Vai alla pagina</a>
                  <div className='event-header-class'></div>
                  <div className='event-header-class'></div>
                  <div className='event-header-class'></div>
                </div>
              )
          })}
  
        </div>
      </div>
      </div>
    </>
   );
}
 
export default Home;