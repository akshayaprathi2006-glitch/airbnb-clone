import {Routes,Route} from "react-router-dom"
import Homepage from './pages/Homepage'
import PropertyDetails from "./pages/PropertyDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Wishlist from "./pages/Wishlist";
import NotFound from "./pages/Notfound";
import BookingSuccess from "./pages/Bookingsuccess";
import MyBookings from "./pages/MyBookings";
import HostBookings from "./pages/HostBookings";
import HostDashboard from "./pages/HostDashboard";
import AddProperty from "./pages/AddProperty";
import EditProperty from "./pages/EditProperty";
import Experiences from "./pages/Experiences";
import Services from "./pages/Services";

const App = () => {
  return (
     <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route
        path="/booking-success"
        element={<BookingSuccess />}/>
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/host-bookings" element={<HostBookings />} />
        <Route path="/host-dashboard" element={<HostDashboard />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/edit-property/:id"element={<EditProperty />}/>
    </Routes>
  )
}

export default App
