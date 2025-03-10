import { configureStore } from '@reduxjs/toolkit';
import { categoriesSlice } from './features/category/categorySlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});