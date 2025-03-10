import React from 'react'
import Categories from './Categories'
import Recipes from './Recipes'
import MyPagination from './MyPagination'
import MyDivider from '../ui/MyDivider'
import Search from './Search'
import { useSelector } from 'react-redux'
import { CircularProgress, Typography } from '@mui/material'

const Main = () => {
  const { recipes, recipesError, recipesLoading } = useSelector((state: RootState) => state.recipes);

  console.log(recipes, recipesError, recipesLoading)

  return (
    <div>
      <Categories />
      <MyDivider />
      <Search />
      <MyDivider />
      {recipesLoading ? (
        <CircularProgress sx={{ display: 'block', margin: '20px auto' }} />
      ) : recipesError ? (
        <Typography color="error" variant="h6" align="center">
          Помилка: {recipesError}
        </Typography>
      ) : (
        <>
          <Recipes />
          <MyDivider />
          <MyPagination />
        </>
      )}
    </div>
  )
}

export default Main