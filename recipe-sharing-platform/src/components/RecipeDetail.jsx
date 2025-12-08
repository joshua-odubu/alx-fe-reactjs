import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.find((item) => item.id === Number(id));
        setRecipe(foundRecipe);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center py-20 text-gray-600 text-xl">
        Loading recipe…
      </div>
    );
  }

  return (
    <div className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">{recipe.title}</h1>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg shadow-md mb-8"
      />

      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {(recipe.ingredients || ["Ingredient 1", "Ingredient 2", "Ingredient 3"]).map(
            (item, index) => (
              <li key={index}>{item}</li>
            )
          )}
        </ul>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
        <ol className="list-decimal pl-6 text-gray-700 space-y-3">
          {(recipe.steps || [
            "Step one goes here.",
            "Step two goes here.",
            "Step three goes here.",
          ]).map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export default RecipeDetail;