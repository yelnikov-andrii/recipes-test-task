import React from 'react'
import { useGetRecipeById } from '../../hooks/useGetRecipeById'
import { Link, Navigate, useParams } from 'react-router-dom';
import { Breadcrumbs, Typography } from '@mui/material';
import MyDivider from '../ui/MyDivider';

const Single = () => {
    const { mealId } = useParams<{ mealId: string }>();

    const recipeId = mealId || "";

    const recipe = useGetRecipeById(recipeId);

    if (!mealId) {
        return <Navigate to="/" />;
    }

    if (recipe.loading) {
        return (
            <div>
                Завантаження...
            </div>
        )
    }

    if (recipe.error) {
        return (
            <div>
                Помилка завантаження рецепту!!!
            </div>
        )
    }

    if (!recipe.data) {
        return (
            <div>
                Рецепт не знайдено.
            </div>
        );
    }

    const { strMeal, strCategory, strArea, strMealThumb, strInstructions } = recipe.data;

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = recipe.data[`strIngredient${i}`];
        if (ingredient) {
            ingredients.push(ingredient);
        }
    }

    return (
        <>
            <Breadcrumbs aria-label="breadcrumb" sx={{margin: '24px 0 0 0'}}>
                <Link color="inherit" to="/">
                    Back to main page
                </Link>

                {recipe?.data?.strMeal && (
                    <Typography sx={{ color: 'text.primary' }}>
                        {recipe?.data?.strMeal}
                    </Typography>
                )}
            </Breadcrumbs>
            <MyDivider />
            <article style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', maxWidth: '600px', margin: '10px auto' }}>
                <img src={strMealThumb} alt={strMeal} style={{ width: '100%', borderRadius: '8px' }} />
                <h3>{strMeal}</h3>
                <p><strong>Категорія:</strong> {strCategory}</p>
                <p><strong>Країна:</strong> {strArea}</p>

                <h4>Інгредієнти:</h4>
                <ul>
                    {ingredients.map((ingredient: string, index: number) => (
                        <li key={index}>{ingredient.trim()}</li>
                    ))}
                </ul>

                <h4>Інструкції:</h4>
                <p>{strInstructions}</p>
            </article>
        </>
    )
}

export default Single