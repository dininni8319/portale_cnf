import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './components/UI/Footer';
import FormEvents from './components/UI/FormEvents';
import Header from './components/UI/Header';
import Navbar from './components/UI/Navbar';
import AdminArea from './components/Views/AdminArea';
import Home from './components/Views/Home';
import SignUp from './components/Views/SingUp';

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="sigup" element={<SignUp />} />
        <Route path="adminarea" element={<AdminArea />} />
      </Routes>
      <div className="custom-height-class">
        <FormEvents />
      </div>
      <Footer />
{/*       
    <iframe 
      src="https://calendar.google.com/calendar/embed?src=67cb10fc4ca65505e0149eb3b93e9fe1279f95ff12403a915c13a1c656381376%40group.calendar.google.com&ctz=Europe%2FZurich" 
      style={{border: '0'}} 
      width="800" height="600" frameBorder="0" scrolling="no">
    </iframe> */}
    </>

  );
}

export default App;
