import Header from "../components/Header";
import Footer from "../components/Footer";
import "../../assets/CSS/Home.css";
import Logo from "../../assets/Images/logo.png";
import { getPartialData } from "../Helpers/Recipes.js";

export default function Home() {
  const [recipe1, recipe2, recipe3, recipe4] = getPartialData();

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
        <a href="recipe-book" className="btn">
          Read Recipes
        </a>
      </section>

      <section className="featured">
        <h2>Featured Recipes</h2>
        <div className="recipes">
          <div className="recipe-card">
            <h3>{recipe1.name}</h3>
            <p>
              {`Meal Type: ${recipe1.mealType.join(", ")} | Difficulty: ${recipe1.difficulty}`}
            </p>
          </div>
          <div className="recipe-card red">
            <h3>{recipe2.name}</h3>
            <p>
              {`Meal Type: ${recipe2.mealType.join(", ")} | Difficulty: ${recipe2.difficulty}`}
            </p>
          </div>
          <div className="recipe-card orange">
            <h3>{recipe3.name}</h3>
            <p>
              {`Meal Type: ${recipe3.mealType.join(", ")} | Difficulty: ${recipe3.difficulty}`}
            </p>
          </div>
          <div className="recipe-card brown">
            <h3>{recipe4.name}</h3>
            <p>
              {`Meal Type: ${recipe4.mealType.join(", ")} | Difficulty: ${recipe4.difficulty}`}
            </p>
          </div>
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
          <a href="/CookLab/Partials/About.html" className="btn">
            Read More
          </a>
        </div>
        <img src={Logo} alt="Logo" className="about-img" />
      </section>
      <Footer />
    </>
  );
}
