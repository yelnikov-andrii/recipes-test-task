import { configureStore } from '@reduxjs/toolkit';
import { categoriesSlice } from './features/category/categorySlice';
import { recipesSlice } from './features/recipes/recipesSlice';
import { paginationSlice } from './features/pagination/paginationSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer,
    recipes: recipesSlice.reducer,
    pagination: paginationSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }),
});