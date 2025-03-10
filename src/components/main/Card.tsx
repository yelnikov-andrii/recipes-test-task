import { Link } from 'react-router-dom';
import { useGetRecipeById } from '../../hooks/useGetRecipeById';
import { Alert, Box, Button, Grid2, Snackbar } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addRecipeToFavourites } from '../../app/features/favourites/favouritesSlice';
import { useAlert } from '../../hooks/useAlert';

const Card = ({ recipeId }: { recipeId: string }) => {
    const recipe = useGetRecipeById(recipeId);
    const dispatch = useDispatch();
    const { showAlert, show } = useAlert();

    function handleAdd() {
        if (recipe?.data) {
            dispatch(addRecipeToFavourites(recipe?.data));
            showAlert('Рецепт був доданий до обраних');
        }
    }

    return (
        <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
            <div style={{ border: '1px solid #ccc', display: 'block', padding: '10px', borderRadius: '8px', maxWidth: '350px', margin: '10px' }} >
                <img src={recipe?.data?.strMealThumb} alt={recipe?.data?.strMeal} style={{ width: '100%', borderRadius: '8px' }} />
                <h3 style={{ margin: '8px 0 16px 0' }}>{recipe.data?.strMeal}</h3>
                <p style={{ margin: '8px 0 16px 0' }}>{recipe.data?.strCategory}</p>
                <p>{recipe.data?.strArea}</p>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
                    <Button onClick={handleAdd} variant='contained'>
                        Add recipe
                    </Button>
                    <Link to={`/meals/${recipeId}`}>
                        <Button variant="contained">
                            View recipe
                        </Button>
                    </Link>
                </Box>
            </div>
            {show && (
                <Snackbar open={!!show} autoHideDuration={3000}>
                    <Alert severity="success">{show}</Alert>
                </Snackbar>
            )}
        </Grid2>

    )
}

export default Card;