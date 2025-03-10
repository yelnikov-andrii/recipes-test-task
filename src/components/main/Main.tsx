import React from 'react'
import Categories from './Categories'
import { Divider } from '@mui/material'
import Recipes from './Recipes'
import MyPagination from './MyPagination'

const Main = () => {

  return (
    <div>
      <Categories />
      <Divider sx={{ margin: '24px 0' }} />
      <Recipes />
      <Divider sx={{ margin: '24px 0' }} />
      <MyPagination />
    </div>
  )
}

export default Main