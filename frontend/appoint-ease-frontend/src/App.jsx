import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import BookAppointment from "./pages/BookAppointment";
import MyAppointments from "./pages/MyAppointments";
import ProviderServices from "./pages/ProviderServices";
import ProviderAvailability from "./pages/ProviderAvailability";
import ProviderAppointments from "./pages/ProviderAppointments";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/services/:id/book" element={<BookAppointment />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/provider/services" element={<ProviderServices />} />
        <Route path="/provider/availability" element={<ProviderAvailability />} />
        <Route path="/provider/appointments" element={<ProviderAppointments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;