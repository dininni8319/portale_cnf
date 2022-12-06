import './App.css';
import { AuthProvider } from "./Contexts/Auth/index";
import { ConfigProvider } from "./Contexts/Config/index";
import Router from './components/Views/Router';

const App = () => {
  return (
    <>
      <ConfigProvider>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </ConfigProvider>
    </>
  );
}

export default App;
