import { baseUrl } from "../../../helpers/baseUrl";
import { getrecipes, getrecipesError, getrecipesSuccess } from "../../features/recipes/recipesSlice";

export const fetchRecipesByQuery = (query: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(getrecipes());
        try {
            const response = await fetch(`${baseUrl}/search.php?s=${query}`);
            const res = await response.json();

            dispatch(getrecipesSuccess([{ category: "Searched", recipes: res.meals}]));
        }
        catch (e: any) {
            dispatch(getrecipesError(e.message));
        }
    };
};