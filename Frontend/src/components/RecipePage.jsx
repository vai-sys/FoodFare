import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/items/${id}`);
        setRecipe(response.data);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={recipe.thumbnail_image} alt={recipe.name} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">{recipe.name}</h1>
          
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-700">Ingredients</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.name}: {ingredient.quantity}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-700">Instructions</h2>
            <p className="text-gray-600 whitespace-pre-line">{recipe.instructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;