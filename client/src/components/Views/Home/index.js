const Home = () => {
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
      <div className="row justify-content-between mb-5 offset-class">
        {obj.map(elem => {
           return (
            <div className="card col-11 col-md-3 shadow py-4" key={elem.id}>  
              <h3 className='text-dark text-capitalize fw-bold fs-4'>{elem.title}</h3>
              <p>{elem.description}</p>
              <a href="/" className='text-success'>Vai alla pagina</a>
            </div>
           )
        })}
      </div>
    </div>
    <div className="row custom-height-class bg-light-teal w-100">

    </div>
    </>
   );
}
 
export default Home;