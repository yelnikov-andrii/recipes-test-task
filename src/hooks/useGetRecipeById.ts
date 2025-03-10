import { useEffect, useState } from "react";
import { baseUrl } from "../helpers/baseUrl";

export const useGetRecipeById = (recipeId: string) => {
    const [recipe, setRecipe] = useState<RecipeLocalStateI>({ data: null, loading: false, error: "" });

    async function fetchRecipeById(recipeId: string) {
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
    }, [recipeId]);

    return recipe;
}