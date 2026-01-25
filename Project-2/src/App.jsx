import "../assets/CSS/App.css";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MoviesContext";

function App() {
  return (
    <>
      <MovieProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
        </Routes>
      </MovieProvider>
    </>
  );
}

export default App;
