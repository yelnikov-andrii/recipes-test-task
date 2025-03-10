import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/">
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Main page
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Header