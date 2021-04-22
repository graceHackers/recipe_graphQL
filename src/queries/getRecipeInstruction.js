import { gql } from "graphql-tag";

export const GET_RECIPE_INSTRUCTION_QUERY = gql`
  query getRecipeInstruction($recipeId: Int!) {
    getRecipeInstruction(recipeId: $recipeId) {
      number
      step
    }
  }
`;
