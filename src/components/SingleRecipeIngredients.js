import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_RECIPE_INGREDIENTS_QUERY } from "../queries/getRecipeIngredients";
import { Container } from "react-bootstrap";

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
    <Container>
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
                <li style={{ fontSize: "18px" }}>
                  {ingredient.name}: {ingredient.amount_value}{" "}
                  {ingredient.amount_unit}
                </li>
              </ul>
            );
          })}
        </>
      )}
    </Container>
  );
}
