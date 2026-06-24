import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  );
}

export default App;
