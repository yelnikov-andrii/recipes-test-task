import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: CategoryStateI = {
    categories: [],
    categoriesLoading: false,
    categoriesError: "",
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        getCategories: (state: CategoryStateI) => {
            state.categoriesLoading = true;
        },
        getCategoriesSuccess: (state: CategoryStateI, action: PayloadAction<CategoryI[]>) => {
            state.categories = action.payload;
            state.categoriesError = "";
            state.categoriesLoading = false;
        },
        getCategoriesError: (state: CategoryStateI, action: PayloadAction<string>) => {
            state.categories = [];
            state.categoriesError = action.payload;
            state.categoriesLoading = false;
        }
    },
});

export const { getCategories, getCategoriesError, getCategoriesSuccess } = categoriesSlice.actions;
export default categoriesSlice.reducer;