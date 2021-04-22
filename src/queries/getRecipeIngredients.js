import { gql } from "graphql-tag";

export const GET_RECIPE_INGREDIENTS_QUERY = gql`
  query getRecipeIngredients($recipeId: Int!) {
    getRecipeIngredients(recipeId: $recipeId) {
      name
    }
  }
`;
