import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Reserva from "./pages/Reserva";

export default function App() {
  return (
  

    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />  
          <Route path="reserva" element={<Reserva />} /> 
        </Route>
      </Routes>
    </Router>
   
  );
}
