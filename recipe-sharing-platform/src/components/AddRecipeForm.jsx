import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // validate form inputs
    const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Recipe title is required.";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    }

    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
    }

    // Check that ingredients list includes at least two items
    const ingredientList = ingredients
      .split("\n")
      .join(",")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    if (ingredientList.length < 2) {
      newErrors.ingredients = "Please include at least two ingredients.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccess("");
      return;
    }

    setErrors({});

    const recipeData = {
      title: title.trim(),
      ingredients: ingredientList,
      steps: steps
        .split("\n")
        .map((step) => step.trim())
        .filter(Boolean),
    };

    console.log("New recipe submitted:", recipeData);

    setSuccess("Recipe submitted successfully!");
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="px-4 py-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Add New Recipe
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        {/* Recipe Title */}
        <div>
          <label
            className="block font-medium mb-1"
            htmlFor="title"
          >
            Recipe Title
          </label>
          <input
            id="title"
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">
              {errors.title}
            </p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label
            className="block font-medium mb-1"
            htmlFor="ingredients"
          >
            Ingredients
          </label>
          <textarea
            id="ingredients"
            rows="4"
            placeholder="List each ingredient on a new line"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">
              {errors.ingredients}
            </p>
          )}
        </div>

        {/* Preparation Steps */}
        <div>
          <label
            className="block font-medium mb-1"
            htmlFor="steps"
          >
            Preparation Steps
          </label>
          <textarea
            id="steps"
            rows="5"
            placeholder="Write each preparation step on a new line"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">
              {errors.steps}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
        >
          Submit Recipe
        </button>

        {success && (
          <p className="text-green-600 text-sm mt-3">
            {success}
          </p>
        )}
      </form>
    </div>
  );
}

export default AddRecipeForm;