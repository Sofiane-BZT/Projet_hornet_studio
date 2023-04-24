import "./css/app.css";

import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Navbar from "./components/Navbar";
import Piercing from "./pages/Piercing";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Accueil />} />
        <Route path="/piercing" exact element={<Piercing />} />
      </Routes>
    </>
  );
}

export default App;
