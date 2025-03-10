import { configureStore } from '@reduxjs/toolkit';
import { categoriesSlice } from './features/category/categorySlice';
import { recipesSlice } from './features/recipes/recipesSlice';
import { paginationSlice } from './features/pagination/paginationSlice';
import { searchSLice } from './features/search/searchSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer,
    recipes: recipesSlice.reducer,
    pagination: paginationSlice.reducer,
    search: searchSLice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }),
});