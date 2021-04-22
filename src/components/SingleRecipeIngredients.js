import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_RECIPE_INGREDIENTS_QUERY } from "../queries/getRecipeIngredients";

export default function SingleRecipeIngredients(props) {
  const id = Number(props.id);

  const { loading, error, data } = useQuery(GET_RECIPE_INGREDIENTS_QUERY, {
    variables: {
      recipeId: id,
    },
  });
  if (error) return `Error! ${error}`;

  const recipeIngredients = data?.getRecipeIngredients;
  console.log("ingredients", recipeIngredients);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Ingredients:</p>
          {recipeIngredients.map((ingredient, idx) => {
            return (
              <ul key={idx}>
                <li>{ingredient.name}</li>
              </ul>
            );
          })}
        </>
      )}
    </div>
  );
}
