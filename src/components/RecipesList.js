import { useQuery } from "@apollo/react-hooks";
import { GET_RECIPES_QUERY } from "../queries/getRecipes.js";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function RecipesList(props) {
  const { loading, error, data } = useQuery(GET_RECIPES_QUERY, {
    variables: {
      ingredients: props.ingredients,
    },
  });
  if (error) return `Error! ${error}`;

  const recipes = data?.getRecipes;

  return (
    <Container fluid>
      <Row>
        <h2>Your recipes</h2>
      </Row>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Row>
          {recipes.map((recipe) => (
            <Card key={recipe.id}>
              <Link
                to={{
                  pathname: `/recipes/${recipe.id}`,
                  props: { title: recipe.title, image: recipe.image },
                }}
              >
                <p>{recipe.title}</p>
                <img src={recipe.image}></img>
              </Link>
            </Card>
          ))}
        </Row>
      )}
    </Container>
  );
}
