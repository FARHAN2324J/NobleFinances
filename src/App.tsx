import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import Appointment from "./pages/Appointment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/booking" element={<Appointment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
