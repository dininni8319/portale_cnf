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
      <Footer />
    </>

  );
}

export default App;
