import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Button, List, ListItem, Box, Grid2 } from "@mui/material";
import { deleteRecipeFromFavourites } from "../../app/features/favourites/favouritesSlice";
import { Link } from "react-router-dom";

const Favourites = () => {
    const favouriteRecipes = useSelector((state: RootState) => state.favourites.recipes);
    const dispatch = useDispatch();

    const handleDelete = (recipeId: string) => {
        dispatch(deleteRecipeFromFavourites(recipeId));
    };

    const allIngredients = useMemo(() => {
        const ingredients = favouriteRecipes.flatMap((recipe) => {
            const list = [];
            for (let i = 1; i <= 20; i++) {
                const ingredient = recipe[`strIngredient${i}`]?.trim();
                if (ingredient) {
                    list.push(ingredient);
                }
            }
            return list;
        });

        return Array.from(new Set(ingredients));
    }, [favouriteRecipes]);

    return (
        <Box sx={{ padding: "20px" }}>
            <Typography variant="h4" gutterBottom>
                Favourite Recipes
            </Typography>

            {favouriteRecipes.length === 0 ? (
                <Typography variant="body1">Рецепти відсутні</Typography>
            ) : (
                <Grid2 container spacing={4}>
                    <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
                        <List sx={{ maxHeight: '500px', overflowY: 'auto'}}>
                            {favouriteRecipes.map((recipe: RecipesI) => (
                                <ListItem key={recipe.idMeal} sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Grid2 container spacing={2} alignItems="center">
                                        <Grid2 size={{ xs: 6 }} sx={{ minWidth: '200px'}}>
                                            <Link to={`/meals/${recipe.idMeal}`} style={{width: '100%'}}>
                                                <Typography variant="h6">{recipe.strMeal}</Typography>
                                            </Link>
                                        </Grid2>
                                        <Grid2 size={{ xs: 6 }}>
                                            <Button
                                                onClick={() => handleDelete(recipe.idMeal)}
                                                variant="contained"
                                                color="secondary"
                                            >
                                                Видалити
                                            </Button>
                                        </Grid2>
                                    </Grid2>
                                </ListItem>
                            ))}
                        </List>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
                        <Typography variant="h5">
                            Ingredients you should use for this recipes
                        </Typography>
                        <List sx={{ maxHeight: '500px', overflowY: 'auto'}}>
                            {allIngredients?.map((ingredient => (
                                <ListItem key={ingredient}>
                                    {ingredient}
                                </ListItem>
                            )))}
                        </List>
                    </Grid2>
                </Grid2>
            )}
        </Box>
    );
};

export default Favourites;
