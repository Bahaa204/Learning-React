import "../assets/CSS/App.css";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
