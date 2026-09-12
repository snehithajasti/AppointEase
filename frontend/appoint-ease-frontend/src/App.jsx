import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import BookAppointment from "./pages/BookAppointment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/services/:id/book" element={<BookAppointment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;