import React from "react";
import SingleRecipeInstruction from "./SingleRecipeInstruction";
import SingleRecipeIngredients from "./SingleRecipeIngredients";
import { Container, Badge, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SingleRecipe(props) {
  const id = props.match.params.recipeId;
  const title = props.location.props.title;
  const image = props.location.props.image;
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Badge variant="success" className="mt-3">
            Recipe ID #{id}
          </Badge>
        </Col>
      </Row>
      <h1 style={{ fontSize: "2.5rem" }} className="mb-5 mt-3">
        {title}
      </h1>
      <Row className="mb-5">
        <Col>
          <img src={image} className="mr-5 mb-4" />
        </Col>
        <Col>
          <SingleRecipeIngredients id={id} />
        </Col>
      </Row>
      <hr />
      <SingleRecipeInstruction id={id} />
      <Container className="text-center">
        <Link to="/recipes">
          <Button variant="outline-secondary" className="mt-3 mb-3">
            Back to Recipes
          </Button>
        </Link>
      </Container>
    </Container>
  );
}
