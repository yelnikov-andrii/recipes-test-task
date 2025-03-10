import React from 'react'
import Categories from './Categories'
import Recipes from './Recipes'
import MyPagination from './MyPagination'
import MyDivider from '../ui/MyDivider'
import Search from './Search'

const Main = () => {

  return (
    <div>
      <Categories />
      <MyDivider />
      <Search />
      <Recipes />
      <MyDivider />
      <MyPagination />
    </div>
  )
}

export default Main