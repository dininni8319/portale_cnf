import './App.css'
import { Routes, Route } from "react-router-dom";
import { Home, AdminArea, Sign } from "./components/Views";
import { Header, Navbar, FormEvents, Footer} from "./components/UI";
import { AuthProvider } from "./Contexts/Auth/index";
import { ConfigProvider } from "./Contexts/Config/index";
import Protected from "./components/utils/ProtectedRoute";
import NotFound from './components/Views/NotFound';
const App = () => {
  return (
    <>
      <ConfigProvider>
        <AuthProvider>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<NotFound />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/adminarea" element={
              <Protected>
                <AdminArea />
              </Protected>
            } />
          </Routes>
          <Footer />
        </AuthProvider>
      </ConfigProvider>
    </>
  );
}

export default App;
