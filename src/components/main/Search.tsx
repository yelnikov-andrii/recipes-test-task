import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { useInput } from '../../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipesByQuery } from '../../app/action-creator/recipes/fetchRecipesByQuery';
import { fetchAllRecipes } from '../../app/action-creator/recipes/fetchAllRecipes';
import { setCuurentPage } from '../../app/features/pagination/paginationSlice';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    useInput(searchQuery);
    const appliedQuery = useSelector((state: RootState) => state.search.appliedQuery);
    const dispatch: AppDispatch = useDispatch();
    const categories = useSelector((state: RootState) => state.categories.categories);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        if (appliedQuery) {
            dispatch(fetchRecipesByQuery(appliedQuery));
        } else {
            dispatch(fetchAllRecipes(categories));
            dispatch(setCuurentPage(1));
        }
    }, [appliedQuery, dispatch, categories]);

    return (
        <div style={{ maxWidth: '480px', borderRadius: '8px', margin: '24px auto' }}>
            <TextField
                label="Пошук рецептів"
                variant="outlined"
                fullWidth
                value={searchQuery}
                onChange={handleSearchChange}
            />
        </div>
    );
};

export default Search;
