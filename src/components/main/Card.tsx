import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../helpers/baseUrl';

interface RecipeLocalStateI {
    data: RecipesI | null;
    loading: boolean;
    error: string;
}

const Card = ({ recipeId }: { recipeId: number }) => {
    const [recipe, setRecipe] = useState<RecipeLocalStateI>({ data: null, loading: false, error: "" });

    async function fetchRecipeById(recipeId: number) {
        try {
            setRecipe(rec => ({ ...rec, loading: true }));
            const response = await fetch(`${baseUrl}/lookup.php?i=${recipeId}`);

            if (!response.ok) {
                setRecipe(rec => ({ ...rec, error: "Помилка при отриманні рецепту", loading: false, data: null }));
                return;
            }

            const res = await response.json();
            setRecipe(rec => ({ ...rec, error: "", loading: false, data: res.meals[0] }));

        }
        catch (e: any) {
            setRecipe(rec => ({ ...rec, error: e.message, loading: false, data: null }));
        }
    }

    useEffect(() => {
        fetchRecipeById(recipeId);
    }, []);

    console.log(recipe)

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', maxWidth: '250px', margin: '10px' }}>
            <img src={recipe?.data?.strMealThumb} alt={recipe?.data?.strMeal} style={{ width: '100%', borderRadius: '8px' }} />
            <h3>{recipe.data?.strMeal}</h3>
            <p>{recipe.data?.strCategory}</p>
            <p>{recipe.data?.strArea}</p>
        </div>
    )
}

export default Card