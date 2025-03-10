import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface FavouritesStateI {
    recipes: RecipesI[];
}

const initialState: FavouritesStateI = {
    recipes: [],
};

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addRecipeToFavourites: (state: FavouritesStateI, action: PayloadAction<RecipesI>) => {
            if (state.recipes.every(rec => rec.idMeal !== action.payload.idMeal)) {
                state.recipes.push(action.payload);
            }
        },
        deleteRecipeFromFavourites: (state: FavouritesStateI, action: PayloadAction<string>) => {
            state.recipes = state.recipes.filter((recipe: RecipesI) => recipe.idMeal !== action.payload);
        }
    },
});

export const { addRecipeToFavourites, deleteRecipeFromFavourites } = favouritesSlice.actions;
export default favouritesSlice.reducer;