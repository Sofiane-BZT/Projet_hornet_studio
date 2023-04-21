import "./css/app.css";

import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Accueil />} />
      </Routes>
    </>
  );
}

export default App;
