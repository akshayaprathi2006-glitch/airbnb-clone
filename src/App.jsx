import {Routes,Route} from "react-router-dom"
import Homepage from './pages/Homepage'
import PropertyDetails from "./pages/PropertyDetails";

const App = () => {
  return (
     <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
    </Routes>
  )
}

export default App
