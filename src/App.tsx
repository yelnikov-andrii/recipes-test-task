import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/main/Main';
import Header from './components/templates/Header';
import { fetchCategories } from './app/action-creator/categories/fetchCategories';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRecipes } from './app/action-creator/recipes/fetchAllRecipes';
import { filterRecipes } from './app/features/recipes/recipesSlice';

function App() {
  const dispatch: AppDispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.categories.categories);
  const recipes = useSelector((state: RootState) => state.recipes.recipes);
  const selectedCategory = useSelector((state: RootState) => state.categories.selectedCategory);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    if (categories.length) {
      dispatch(fetchAllRecipes(categories));
    }
  }, [categories])



  useEffect(() => {
    if (recipes.length > 0) {
      if (selectedCategory) {
        dispatch(filterRecipes(selectedCategory.strCategory));
      } else {
        dispatch(filterRecipes(""));
      }
    }
  }, [selectedCategory, dispatch, recipes]);


  return (
    <div>
      <Header />
      <div className='container'>
        <Routes>
          <Route element={<Main />} path="/">
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
