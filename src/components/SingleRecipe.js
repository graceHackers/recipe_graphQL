import React from "react";
import SingleRecipeInstruction from "./SingleRecipeInstruction";
import SingleRecipeIngredients from "./SingleRecipeIngredients";

export default function SingleRecipe(props) {
  const id = props.match.params.recipeId;
  return (
    <>
      <h1>Single Recipe ID #{id}</h1>
      <SingleRecipeIngredients id={id} />
      <hr />
      <SingleRecipeInstruction id={id} />
    </>
  );
}
