import { useQuery } from '@apollo/react-hooks';
import { GET_RECIPES_QUERY } from '../queries/getRecipes.js';
import IngredientsForm from './IngredientsForm'

export default function Recipes() {

  return (
    <>
      <h2>What ingredients do you have?</h2>
      <IngredientsForm />

    </>
  );
}
