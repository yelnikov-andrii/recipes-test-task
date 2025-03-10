import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: CategoryStateI = {
    categories: [],
    categoriesLoading: false,
    categoriesError: "",
    selectedCategory: null
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
        },
        setCategory: (state: CategoryStateI, action: PayloadAction<CategoryI | null>) => {
            state.selectedCategory = action.payload;
        }
    },
});

export const { getCategories, getCategoriesError, getCategoriesSuccess, setCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;