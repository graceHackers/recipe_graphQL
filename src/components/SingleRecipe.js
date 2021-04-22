import React from "react";
import SingleRecipeInstruction from "./SingleRecipeInstruction";
import SingleRecipeIngredients from "./SingleRecipeIngredients";
import { Container, Badge } from "react-bootstrap";

export default function SingleRecipe(props) {
  const id = props.match.params.recipeId;
  const title = props.location.props.title;
  const image = props.location.props.image;
  return (
    <Container className="mt-4">
      <Badge variant="success" className="mb-3">
        Recipe ID #{id}
      </Badge>
      <h1 style={{ fontSize: "2.5rem" }} className="mb-5 mt-2">
        {title}
      </h1>
      <div id="image-ingredient-container">
        <img src={image} className="mr-5" />
        <SingleRecipeIngredients id={id} />
      </div>
      <hr />
      <SingleRecipeInstruction id={id} />
    </Container>
  );
}
