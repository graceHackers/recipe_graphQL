import { gql } from 'graphql-tag';

export const GET_RECIPES_QUERY = gql`
  query getRecipes(
    $ingredient1: String!
    $ingredient2: String!
    $ingredient3: String!
  ) {
    getRecipes(
      ingredient1: $ingredient1
      ingredient2: $ingredient2
      ingredient3: $ingredient3
    ) {
      id
      title
      image
    }
  }
`;
