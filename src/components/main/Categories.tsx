import { Typography, CircularProgress, List, ListItem, ListItemText, Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../app/features/category/categorySlice';
import { setCuurentPage } from '../../app/features/pagination/paginationSlice';

const Categories = () => {
  const { categories, categoriesError, categoriesLoading } = useSelector(
    (state: RootState) => state.categories
  );
  const dispatch = useDispatch();

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

  function filterByCategory(category: CategoryI | null) {
    dispatch(setCategory(category));
    dispatch(setCuurentPage(1));
  }

  return (
    <List sx={{ display: 'flex', gap: 2, overflowX: 'scroll' }}>
      <ListItem>
        <Button onClick={() => {
          filterByCategory(null);
        }}>
          <ListItemText>
            Усі
          </ListItemText>
        </Button>
      </ListItem>
      {categories?.map((category) => (
        <ListItem key={category.idCategory}>
          <Button onClick={() => {
            filterByCategory(category);
          }}
          >
            <ListItemText primary={category.strCategory} />
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default Categories;
