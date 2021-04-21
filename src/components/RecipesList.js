import { useQuery } from '@apollo/react-hooks';
import { GET_RECIPES_QUERY } from '../queries/getRecipes.js';

export default function RecipesList(props) {
  console.log('props', props);
  const { loading, error, data } = useQuery(GET_RECIPES_QUERY, {
    variables: {
      ingredient1: props.ingredient.ingredient1,
      ingredient2: props.ingredient.ingredient2,
      ingredient3: props.ingredient.ingredient3,
    },
  });
  if (loading) return null;
  if (error) return `Error! ${error}`;

  const recipes = data?.getRecipes;

  return (
    <>
      <h2>Your recipes</h2>
      {recipes.map((recipe) => (
        <ul key={recipe.id}>
          <li>
            <p>{recipe.title}</p>
            <img src={recipe.image}></img>
          </li>
        </ul>
      ))}
    </>
  );
}
