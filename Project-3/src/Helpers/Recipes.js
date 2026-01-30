import data from "./Data.json";

export function getPartialData() {
  let random_recipes = data.sort(() => 0.5 - Math.random()).slice(0, 4);
  return random_recipes;
}
