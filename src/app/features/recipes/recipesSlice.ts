import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: RecipesStateI = {
    recipes: [],
    recipesLoading: false,
    recipesError: "",
    filteredRecipes: [],
};

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        getrecipes: (state: RecipesStateI) => {
            state.recipesLoading = true;
        },
        getrecipesSuccess: (state: RecipesStateI, action: PayloadAction<MealWithCategoryI[]>) => {
            state.recipes = action.payload;
            state.recipesError = "";
            state.recipesLoading = false;
        },
        getrecipesError: (state: RecipesStateI, action: PayloadAction<string>) => {
            state.recipes = [];
            state.recipesError = action.payload;
            state.recipesLoading = false;
        },
        filterRecipes: (state: RecipesStateI, action: PayloadAction<string>) => {
            if (action.payload) {
                state.filteredRecipes = state.recipes.filter((recipe) => recipe.category === action.payload);
            } else {
                state.filteredRecipes = [{ category: "All", recipes: state.recipes.flatMap((mealObj: MealWithCategoryI) => mealObj.recipes) }];
            }
        }
    },
});

export const { getrecipes, getrecipesError, getrecipesSuccess, filterRecipes } = recipesSlice.actions;
export default recipesSlice.reducer;