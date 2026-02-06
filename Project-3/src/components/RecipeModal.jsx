export default function RecipeModal({ options, setoptions }) {
  const recipeData = options.isIngredient
    ? options.recipe.ingredients
    : options.recipe.instructions;

  return (
    <div className={`recipe-modal ${options.isOpen ? "open" : ""}`}>
      <div className="modal_backdrop"></div>
      <div className="modal_dialog">
        <button
          className="modal_close"
          onClick={() => {
            setoptions({
              isIngredient: options.isIngredient,
              recipe: options.recipe,
              isOpen: !options.isOpen,
            });
          }}
        >
          &times;
        </button>
        <div className="modal_media">
          <img
            id="modal-image"
            src={options.recipe.image}
            alt={options.recipe.name}
            loading="lazy"
          />
        </div>
        <div className="modal_body">
          <h3 id="modal-title">{`${options.recipe.name} ${options.isIngredient ? "Ingredients" : "Instructions"}`}</h3>
          <ol id="modal-text">
            {recipeData.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
