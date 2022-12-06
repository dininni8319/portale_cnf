import { Header, Navbar, Footer} from "../UI/index";

const MainLayout = ({ children }) => {
  return ( 
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
   );
}
 
export default MainLayout;