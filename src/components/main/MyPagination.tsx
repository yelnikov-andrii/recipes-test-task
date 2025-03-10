import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { setCuurentPage } from '../../app/features/pagination/paginationSlice';

const MyPagination = () => {
  const filteredRecipes = useSelector((state: RootState) => state.recipes.filteredRecipes);
  const { currentPage, itemsPerPage } = useSelector((state: RootState) => state.pagination);
  const dispatch = useDispatch();

  const countOfPages = Math.ceil(filteredRecipes[0]?.recipes.length / itemsPerPage);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setCuurentPage(value));
  };

  return (
    <Stack spacing={2}>
      <Pagination count={countOfPages} variant="outlined" shape="rounded" page={currentPage} onChange={handleChange} />
    </Stack>
  )
}

export default MyPagination;