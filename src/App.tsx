import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/main/Main';
import Header from './components/templates/Header';
import { fetchCategories } from './app/action-creator/categories/fetchCategories';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRecipes } from './app/action-creator/recipes/fetchAllRecipes';
import { filterRecipes } from './app/features/recipes/recipesSlice';
import Single from './components/single/Single';

function App() {
  const dispatch: AppDispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.categories.categories);
  const recipes = useSelector((state: RootState) => state.recipes.recipes);
  const selectedCategory = useSelector((state: RootState) => state.categories.selectedCategory);
  const appliedQuery = useSelector((state: RootState) => state.search.appliedQuery);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categories.length) {
      dispatch(fetchAllRecipes(categories));
    }
  }, [categories, dispatch])



  useEffect(() => {
    console.log(recipes, 'recipes')
    if (recipes.length > 0) {
      if (selectedCategory) {
        dispatch(filterRecipes(selectedCategory.strCategory));
      } else {
        dispatch(filterRecipes(""));
      }
    }
  }, [selectedCategory, dispatch, recipes, appliedQuery]);


  return (
    <div>
      <Header />
      <div className='container'>
        <Routes>
          <Route element={<Main />} path="/">
          </Route>
          <Route element={<Single />} path="/meals/:mealId">
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
