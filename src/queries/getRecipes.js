import { gql } from 'graphql-tag';

export const GET_RECIPES_QUERY = gql`
  query getRecipes {
    getRecipes {
      id
      title
      image
    }
  }
`;
