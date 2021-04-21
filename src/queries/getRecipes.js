import { gql } from 'graphql-tag';



export const GET_RECIPES_QUERY = gql`
  query getRecipes($ingredient: String!) {
    getRecipes(ingredient: $ingredient) {
      id
      title
      image
    }
  }
`;
