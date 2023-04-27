import "./css/app.css";

import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Navbar from "./components/Navbar";
import Piercing from "./pages/Piercing";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Accueil />} />
        <Route path="/piercing" exact element={<Piercing />} />
        <Route path="/shop" exact element={<Shop />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
