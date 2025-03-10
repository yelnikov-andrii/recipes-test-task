import { Grid2, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card';

const Recipes = () => {
  const filteredRecipes = useSelector((state: RootState) => state.recipes.filteredRecipes);
  const selectedCategory = useSelector((state: RootState) => state.categories.selectedCategory);
  const { currentPage, itemsPerPage } = useSelector((state: RootState) => state.pagination);
  
  const firstItem = (currentPage - 1) * itemsPerPage;
  const lastItem = firstItem + itemsPerPage;

  const displayingRecipes = filteredRecipes[0]?.recipes.slice(firstItem, lastItem);

  return (
    <section>
      {selectedCategory ? (
        <>
          <Typography variant='h1' sx={{ fontSize: '32px' }}>
            Рецепти категорії {selectedCategory?.strCategory}
          </Typography>
          <Grid2 container spacing={4}>
            {displayingRecipes?.map((recipe: RecipesI) => (
              <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={recipe.idMeal}>
                <Card recipeId={recipe.idMeal} />
              </Grid2>
            ))}
          </Grid2>
        </>
      ) : (
        <>
          <Typography variant='h1' sx={{ fontSize: '32px' }}>
            Рецепти усі
          </Typography>
          <Grid2 container spacing={4}>
            {displayingRecipes?.map((recipe: RecipesI) => (
              <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={recipe.idMeal}>
                <Card recipeId={recipe.idMeal} />
              </Grid2>
            ))}
          </Grid2>
        </>
      )
      }
    </section >
  )
}

export default Recipes