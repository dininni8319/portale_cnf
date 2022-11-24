import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home, AdminArea, SignUp } from "./components/Views";
import { Header, Navbar, FormEvents, Footer, } from "./components/UI";

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
