import { HashRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import Appointment from "./pages/Appointment";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/booking" element={<Appointment />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
