import { baseUrl } from "../../../helpers/baseUrl";
import { getrecipes, getrecipesError, getrecipesSuccess } from "../../features/recipes/recipesSlice";

export const fetchAllRecipes = (categories: CategoryI[]) => {
    const categoriesList = categories.map(category => category.strCategory);

    return async (dispatch: AppDispatch) => {
        dispatch(getrecipes());
        try {
            const fetchPromises = categoriesList.map((category: string) =>
                fetch(`${baseUrl}/filter.php?c=${category}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Помилка при отриманні рецептів для категорії ${category}`);
                        }
                        return response.json();
                    })
                    .then(res => ({ category, recipes: res.meals } as { category: string, recipes: RecipesI[] }))
            );

            const results = await Promise.all(fetchPromises);
            dispatch(getrecipesSuccess(results));
        }
        catch (e: any) {
            dispatch(getrecipesError(e.message));
        }
    };
};