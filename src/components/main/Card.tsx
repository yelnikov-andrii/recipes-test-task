import { Link } from 'react-router-dom';
import { useGetRecipeById } from '../../hooks/useGetRecipeById';

const Card = ({ recipeId }: { recipeId: string }) => {
    const recipe = useGetRecipeById(recipeId);

    return (
        <Link style={{ border: '1px solid #ccc', display: 'block', padding: '10px', borderRadius: '8px', maxWidth: '250px', margin: '10px' }} to={`/meal/${recipeId}`}>
            <img src={recipe?.data?.strMealThumb} alt={recipe?.data?.strMeal} style={{ width: '100%', borderRadius: '8px' }} />
            <h3 style={{ margin: '8px 0 16px 0'}}>{recipe.data?.strMeal}</h3>
            <p style={{ margin: '8px 0 16px 0'}}>{recipe.data?.strCategory}</p>
            <p>{recipe.data?.strArea}</p>
        </Link>
    )
}

export default Card;