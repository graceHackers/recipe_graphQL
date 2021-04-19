import { useQuery } from '@apollo/react-hooks';
import { GET_RECIPES_QUERY } from '../queries/getRecipes.js';

export default function Recipes() {
  const { data, loading, error } = useQuery(GET_RECIPES_QUERY);

  const recipes = data?.getRecipes;

  if (loading) return <p>Almost there...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <h2>Recipes</h2>

      {recipes.map((recipe) => (
        <ul key={recipe.id}>
          <li>{recipe.title}</li>
        </ul>
      ))}
    </>
  );
}
