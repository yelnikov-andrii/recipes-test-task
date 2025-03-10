import { Typography, CircularProgress, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const Categories = () => {
  const { categories, categoriesError, categoriesLoading } = useSelector(
    (state: RootState) => state.categories
  );

  if (categoriesError) {
    return (
      <div>
        <Typography color="error" variant="h6">
          Помилка: {categoriesError}
        </Typography>
      </div>
    );
  }

  if (categoriesLoading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  return (
      <List>
        {categories.map((category) => (
          <ListItem key={category.idCategory}>
            <ListItemText primary={category.strCategory} />
          </ListItem>
        ))}
      </List>
  );
};

export default Categories;
