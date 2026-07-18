import {Routes,Route} from "react-router-dom"
import Homepage from './pages/Homepage'
import PropertyDetails from "./pages/PropertyDetails";
import Login from "./pages/Login";

const App = () => {
  return (
     <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
