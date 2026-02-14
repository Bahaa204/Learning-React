import Header from "../components/Header";
import Footer from "../components/Footer";
import "../../assets/CSS/Home.css";
import Logo from "../../assets/Images/logo.png";
import { getPartialData } from "../Helpers/Recipes.js";
import { Link } from "react-router-dom";

export default function Home() {
  const recipes = getPartialData();

  return (
    <>
      <Header />
      <section className="hero">
        <img src={Logo} alt="Logo" className="hero-img" />
        <h1>
          Welcome to our <br />
          CookLab
        </h1>
        <p>
          Life gets a lot easier when you’ve got good food — and a bear who can
          actually cook. CookLab started as a small idea during exams, after
          instant noodles failed us one time too many.
        </p>
        <Link to="/recipe-book" className="btn">
          Read Recipes
        </Link>
      </section>

      <section className="featured">
        <h2>Featured Recipes</h2>
        <div className="recipes">
          {recipes.map((recipe, index) => {
            const colors = ["", "red", "orange", "brown"];
            return (
              <div key={recipe.id} className={`recipe-card ${colors[index]}`}>
                <h3>{recipe.name}</h3>
                <p>{`Meal Type: ${recipe.mealType.join(", ")} | Difficulty: ${recipe.difficulty}`}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            We’re a group of three students who realized life gets a whole lot
            easier when you have good food — and a bear who knows how to cook.
            CookLab started as a small idea during exams when instant noodles
            betrayed us one too many times.
          </p>
          <Link to="/about" className="btn">
            Read More
          </Link>
        </div>
        <img src={Logo} alt="Logo" className="about-img" />
      </section>
      <Footer />
    </>
  );
}
