import { useQuery } from '@apollo/react-hooks';
import { GET_RECIPES_QUERY } from '../queries/getRecipes.js';
import { Link } from 'react-router-dom';

export default function RecipesList(props) {
  const { loading, error, data } = useQuery(GET_RECIPES_QUERY, {
    variables: {
      ingredients: props.ingredients,
    },
  });
  if (error) return `Error! ${error}`;

  const recipes = data?.getRecipes;

  return (
    <>
      <h2>Your recipes</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        recipes.map((recipe) => (
          <ul key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <li>
                <p>{recipe.title}</p>
                <img src={recipe.image}></img>
              </li>
            </Link>
          </ul>
        ))
      )}
    </>
  );
}
