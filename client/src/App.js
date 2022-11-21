import './App.css';
import Footer from './components/UI/Footer';
import FormEvents from './components/UI/FormEvents';
import Header from './components/UI/Header';
import Navbar from './components/UI/Navbar';

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="custom-height-class">
         <FormEvents />
      </div>
      
    <iframe 
      src="https://calendar.google.com/calendar/embed?src=67cb10fc4ca65505e0149eb3b93e9fe1279f95ff12403a915c13a1c656381376%40group.calendar.google.com&ctz=Europe%2FZurich" 
      style={{border: '0'}} 
      width="800" height="600" frameBorder="0" scrolling="no"></iframe>
      <Footer />
    </>

  );
}

export default App;
