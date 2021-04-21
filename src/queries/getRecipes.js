import { gql } from "graphql-tag";

export const GET_RECIPES_QUERY = gql`
  query getRecipes($ingredients: String!) {
    getRecipes(ingredients: $ingredients) {
      id
      title
      image
    }
  }
`;
