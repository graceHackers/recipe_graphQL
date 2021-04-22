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

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h3 style={{ fontSize: "20px" }} className="mb-3">
            Ingredients:
          </h3>
          {recipeIngredients.map((ingredient, idx) => {
            return (
              <ul key={idx}>
                <li style={{ fontSize: "18px" }}>{ingredient.name}</li>
              </ul>
            );
          })}
        </>
      )}
    </div>
  );
}
