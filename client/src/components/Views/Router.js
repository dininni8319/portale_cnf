import { Routes, Route } from "react-router-dom";
import Protected from "../utils/ProtectedRoute";
import NotFound from './NotFound';
import MainLayout from "../Layout/MainLayout";
import { Home, Appointment, AdminArea, Sign } from "./index";

const Router = () => {
  return ( 
    <Routes>
    <Route path="/" element={
     <MainLayout>
       <Home/>
     </MainLayout>
    } />
    <Route path="/reserve" element={
      <MainLayout>
        <Appointment/>
      </MainLayout>
    } />
    <Route path="*" element={
      <MainLayout>
        <NotFound />
      </MainLayout>
    } />
    <Route path="/sign" element={<Sign />} />
    <Route path="/adminarea" element={
      <Protected>
        <MainLayout>
          <AdminArea />
        </MainLayout>
      </Protected>
    } />
  </Routes>
   );
}
 
export default Router;