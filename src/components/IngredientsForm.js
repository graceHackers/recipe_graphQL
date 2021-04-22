import React, { useState, useEffect } from "react";
import RecipesList from "./RecipesList";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Redirect} from 'react-router-dom';

export default function IngredientsForm(props) {
  const [submitted, setSubmitted] = useState(false);
  const [submittedIngredients, setSubmittedIngredients] = useState("");
  console.log('form props', props)
  // const input = props.ingredients || ['']
  // console.log('input', input)

  const [inputIngredients, setInputIngredients] = useState(['']);
  const [maxedout, setMaxedout] = useState(false);
  console.log('input ingredients', inputIngredients)

  // const { loading, error, data } = useQuery(GET_RECIPES_QUERY, {
  //   variables: {
  //     ingredients: props.match.params.ingredients,
  //   },
  // });
  // if (error) return `Error! ${error}`;

  // const recipes = data?.getRecipes;


  //component did mount
  useEffect(() => {
    const input = props.ingredients || ['']
    setInputIngredients(input);
  }, []);

  function handleSubmit(evt) {
    evt.preventDefault();

    //['tomato', 'cheese', 'flour'] => 'tomato,+cheese,+flour'
    const stringIngredient = inputIngredients.join(",+");

    setSubmitted(true);
    setSubmittedIngredients(stringIngredient);
    console.log('submitted', submittedIngredients)
    // return <Redirect to='/' />
    // return <Redirect to={`/results/${submittedIngredients}`} />
  }

  function onChange(evt, idx) {
    //create copy of the ingredients array from state
    const newArr = [...inputIngredients];
    //change the element from passed in idx to input value
    newArr[idx] = evt.target.value;
    //set the ingredients array with new array (["tomato"])
    setInputIngredients(newArr);
  }

  function handleAdd() {
    if (inputIngredients.length < 10) {
      setInputIngredients([...inputIngredients, ""]);
    } else {
      setMaxedout(true);
    }
  }

  function handleDelete(evt, idx) {
    setInputIngredients(
      inputIngredients.filter((ingredient, index) => idx !== index)
    );
  }

  return (
    <>
      <Container className="text-center">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formHorizontalEmail">
            {inputIngredients.map((inputValue, idx) => {
              return (
                <Row
                  key={idx + 1}
                  id="ingredientForm"
                  className="justify-content-center"
                >
                  <Col md sm xs={2}>
                    <Form.Label>{`Ingredient${idx + 1}`}</Form.Label>
                  </Col>
                  <Col md sm xs={4}>
                    <Form.Control
                      name={`ingredient${idx + 1}`}
                      value={inputValue}
                      onChange={(evt) => onChange(evt, idx)}
                      className="mt-2"
                    />
                  </Col>
                  <Col md sm xs={2}>
                    <Button
                      variant="outline-info"
                      size="sm"
                      type="button"
                      onClick={(evt) => handleDelete(evt, idx)}
                    >
                      {""}delete
                    </Button>
                  </Col>
                </Row>
              );
            })}
            <Row className="justify-content-center">
              <Button
                className=" mt-2"
                variant="dark"
                type="button"
                onClick={handleAdd}
              >
                Add
              </Button>
              {""}
            </Row>
            <Row className="justify-content-center">
                <Button
                  className=" mt-4"
                  variant="info"
                  type="submit"
                  style={{ fontSize: "20px" }}
                >
                  Submit
                </Button>
            </Row>
            {maxedout && <p>You can't add anymore. Sorry.</p>}
            {submitted && <Redirect to={`/results/${submittedIngredients}`}/>}
            {/* {submitted && <RecipesList ingredients={submittedIngredients} />} */}
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}
