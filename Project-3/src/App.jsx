import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Request from "./Pages/Request";
import RecipeBook from "./Pages/RecipeBook";
import Daaboolos from "./Pages/Daaboolos";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="request" element={<Request />} />
        <Route path="recipe-book" element={<RecipeBook />} />
        <Route path="daaboolos" element={<Daaboolos />} />
      </Routes>
    </>
  );
}

export default App;
