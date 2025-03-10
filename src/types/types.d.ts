
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
        idMeal: number;
        strMealThumb: string;
        strCategory: string;
        strArea: string;
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

}