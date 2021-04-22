import { useQuery } from '@apollo/react-hooks';
import { GET_RECIPES_QUERY } from '../queries/getRecipes.js';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import IngredientsForm from './IngredientsForm.js';

export default function RecipesList(props) {
  const ingredients = props.match.params.ingredients
  const { loading, error, data } = useQuery(GET_RECIPES_QUERY, {
    variables: {
      ingredients: ingredients,
    },
  });
  if (error) return `Error! ${error}`;

  const recipes = data?.getRecipes;

  return (
    <Container className="text-center">
    <h2 className="mt-5 mb-5">Edit ingredients for more recipes!</h2>
      <IngredientsForm ingredients={ingredients.split(',+')}/>
      <Row>
        <h2 className='mt-5 mb-3 ml-3'>Your recipes</h2>
      </Row>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Row>
          {recipes.map((recipe) => (
            <Col key={recipe.id} >
              <Card
                className='mb-3 p-2'
                style={{
                  boxShadow: '0px 0px 10px 2px rgba(100, 100, 100, 0.6) ',
                }}
              >
                <Link
                  style={{ textDecoration: 'none' }}
                  to={{
                    pathname: `/recipes/${recipe.id}`,
                    props: { title: recipe.title, image: recipe.image, searchIngredients: ingredients },
                  }}
                >
                  <p style={{ color: 'black' }}>{recipe.title}</p>
                  <img src={recipe.image}></img>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}
