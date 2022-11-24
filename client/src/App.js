import './App.css'
import { Routes, Route } from "react-router-dom";
import { Home, AdminArea, Sign } from "./components/Views";
import { Header, Navbar, FormEvents, Footer} from "./components/UI";
import { AuthProvider } from "./Contexts/Auth/index";
import { ConfigProvider } from "./Contexts/Config/index";
import Protected from "./components/utils/ProtectedRoute";
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
