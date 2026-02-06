import Header from "../components/Header";
import Footer from "../components/Footer";
import RecipeModal from "../components/RecipeModal";
import { recipes } from "../Helpers/Recipes";
import { useState } from "react";
import ArrowLeftHover from "../../assets/Images/recipebook/ArrowLeftHover.png";
import ArrowRightHover from "../../assets/Images/recipebook/ArrowRightHover.png";
import "../../assets/CSS/RecipeBook.css";

export default function RecipeBook() {
  const [DisplayedRecipes, setDisplayedRecipes] = useState(recipes);
  const [Pages, setPages] = useState([{ left: 0 }, { right: 1 }]);
  const [Favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || [],
  );
  const [IsFilterActive, setIsFilterActive] = useState(false);
  const [ModalOptions, setModalOptions] = useState({
    isIngredient: false,
    recipe: { instructions: [], ingredients: [] },
    isOpen: false,
  });

  function getRecipe(event) {
    const half = event.target.id.split("-")[2];
    // console.log("Half: ", half);
    const pages_index = half === "left" ? 0 : 1;
    // console.log("Pages Index: ", pages_index);
    const recipes_index = Pages[pages_index][half];
    // console.log("Recipes Index: ", recipes_index);
    const recipe = DisplayedRecipes[recipes_index];
    // console.log("Recipe: ", recipe);
    return recipe;
  }

  function getIngredients(event) {
    const recipe = getRecipe(event);
    setModalOptions({
      isIngredient: true,
      recipe: recipe,
      isOpen: true,
    });
  }

  function getInstructions(event) {
    const recipe = getRecipe(event);
    setModalOptions({
      isIngredient: false,
      recipe: recipe,
      isOpen: true,
    });
  }

  function displayNext() {
    const left_index = Pages[0].left;
    const right_index = Pages[1].right;

    if (Pages[1].right < DisplayedRecipes.length - 1)
      setPages([{ left: left_index + 2 }, { right: right_index + 2 }]);
  }

  function displayPrevious() {
    const left_index = Pages[0].left;
    const right_index = Pages[1].right;

    if (Pages[0].left > 0)
      setPages([{ left: left_index - 2 }, { right: right_index - 2 }]);
  }

  function displayPage(page) {
    const half = Object.keys(page);
    const index = Object.values(page);
    const selectedData = DisplayedRecipes[index];
    const DataDisplay = (
      <div className={`book ${half}`} key={half}>
        <div className="book-text">
          <img src={selectedData.image} alt={selectedData.name} />
          <p>{selectedData.name}</p>
          <div className="ingredients">
            Ingredients:
            <ol id={`ingredients-list-${half}`}>
              {selectedData.ingredients.slice(0, 2).map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ol>
            <button
              type="button"
              id={`ingredients-btn-${half}`}
              onClick={getIngredients}
            >
              click to show more
            </button>
          </div>
          <div className="instructions">
            Instructions:
            <ol id={`instructions-list-${half}`}>
              {selectedData.instructions
                .slice(0, 3)
                .map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
            </ol>
            <button
              type="button"
              id={`instructions-btn-${half}`}
              onClick={getInstructions}
            >
              click to show more
            </button>
          </div>
          <p>Prep Time in Minutes: {selectedData.prepTimeMinutes}</p>
          <p>Cook Time in Minutes: {selectedData.cookTimeMinutes}</p>
          <p>Cuisine: {selectedData.cuisine}</p>
          <p>Rating: {selectedData.rating}</p>
          <p>Meal Type: {selectedData.mealType}</p>
          <button type="button" id={`favorite-btn-${half}`}>
            {Favorites.includes(selectedData.id) ? "Unfavorite" : "Favorite"}
          </button>
        </div>
        <img
          src={half == "left" ? ArrowLeftHover : ArrowRightHover}
          id={`${half}-arrow`}
          alt={`arrow ${half}`}
          onClick={half == "left" ? displayPrevious : displayNext}
        />
      </div>
    );
    return DataDisplay;
  }

  return (
    <>
      <Header />
      <main>
        <div className="hero-text">
          <h1>Welcome to our Recipe Book</h1>
          <p>
            Discover a hand-picked collection of tested, easy-to-follow recipes
            for every occasion. Each entry includes ingredients, clear
            step-by-step instructions, prep and cook times, and meal type.
            Browse by name, meal type, prep time.
          </p>
        </div>
        <div className="Filter-Controls">
          <label htmlFor="nameInput">Filter By Name: </label>
          <input
            type="text"
            name="name-input"
            id="nameInput"
            placeholder="eg: pizza"
          />
          <label htmlFor="mealType">Meal Type:</label>
          <select name="meal-type" id="mealType" defaultValue="All">
            <option>All</option>
            <option value="Dinner">Dinner</option>
            <option value="Lunch">Lunch</option>
            <option value="Snack">Snack</option>
            <option value="Dessert">Dessert</option>
            <option value="Side Dish">Side Dish</option>
            <option value="Appetizer">Appetizer</option>
            <option value="Snacks">Snacks</option>
            <option value="Breakfast">Breakfast</option>
            <option>Beverage</option>
          </select>
          <label htmlFor="prepTimeInput">
            Filter by Prep Time(in minutes):
          </label>
          <input
            type="number"
            name="prep-time-input"
            id="prepTimeInput"
            placeholder="eg: 10"
          />
          <input type="checkbox" name="favorite-input" id="favoritesInput" />
          <label htmlFor="favoritesInput">Show Favorites</label>
        </div>
        <div className="recipe-book">
          {Pages.map((page) => displayPage(page))}
        </div>
      </main>
      <Footer />
      <RecipeModal options={ModalOptions} setoptions={setModalOptions} />
    </>
  );
}
