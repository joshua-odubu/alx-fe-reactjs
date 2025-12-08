import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Recipe Sharing Platform
      </h1>

      <div className="flex justify-center mb-6">
        <Link
          to="/add-recipe"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Add New Recipe
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 mb-3">{recipe.summary}</p>

              <Link
                to={`/recipe/${recipe.id}`}
                className="text-blue-600 font-medium hover:underline"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;