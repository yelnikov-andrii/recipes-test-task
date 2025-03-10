
import { store } from "../app/store";
export { };


declare global {
    // store Root etc

    type RootState = ReturnType<typeof store.getState>;
    type AppDispatch = typeof store.dispatch;

    // Catgories

    interface CategoryI {
        idCategory: number;
        strCategory: string;
        strCategoryThumb: string;
        strCategoryDescription: string;
    }

    interface CategoryStateI {
        categories: CategoryI[],
        categoriesLoading: boolean,
        categoriesError: string,
        selectedCategory: null | CategoryI;
    }

    // Recipes

    interface RecipesI {
        strMeal: string;
        idMeal: string;
        strMealThumb: string;
        strCategory: string;
        strArea: string;
        [key: string]: string | null;
    }

    interface MealWithCategoryI {
        category: string;
        recipes: RecipesI[];
    }

    interface RecipesStateI {
        recipes: MealWithCategoryI[],
        recipesLoading: boolean,
        recipesError: string,
        filteredRecipes: MealWithCategoryI[];
    }

    // Recipe single local state

    interface RecipeLocalStateI {
        data: RecipesI | null;
        loading: boolean;
        error: string;
    }

}