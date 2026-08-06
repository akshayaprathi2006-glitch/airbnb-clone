import {Routes,Route} from "react-router-dom"
import Homepage from './pages/Homepage'
import PropertyDetails from "./pages/PropertyDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Wishlist from "./pages/Wishlist";
import NotFound from "./pages/NotFound";
import BookingSuccess from "./pages/BookingSuccess";
import MyBookings from "./pages/MyBookings";
import HostBookings from "./pages/HostBookings";

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
        <Route path="*" element={<NotFound />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/host-bookings" element={<HostBookings />} />
    </Routes>
  )
}

export default App
