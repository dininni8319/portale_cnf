import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home, AdminArea, Sign } from "./components/Views";
import { Header, Navbar, FormEvents, Footer} from "./components/UI";
import { AuthProvider } from "./Contexts/Auth/index";
import { ConfigProvider } from "./Contexts/Config/index";

const App = () => {
  return (
    <>
      <ConfigProvider>
        <AuthProvider>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/adminarea" element={<AdminArea />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </ConfigProvider>
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
