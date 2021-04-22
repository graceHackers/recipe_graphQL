import React, { useState, useEffect } from 'react';
import RecipesList from './RecipesList';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function IngredientsForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedIngredients, setSubmittedIngredients] = useState('');

  const [inputIngredients, setInputIngredients] = useState([]);
  const [maxedout, setMaxedout] = useState(false);

  //component did mount
  useEffect(() => {
    setInputIngredients(['']);
  }, []);

  function handleSubmit(evt) {
    evt.preventDefault();

    //['tomato', 'cheese', 'flour'] => 'tomato,+cheese,+flour'
    const stringIngredient = inputIngredients.join(',+');
    console.log('inside submit', stringIngredient);

    setSubmitted(true);
    setSubmittedIngredients(stringIngredient);
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
      setInputIngredients([...inputIngredients, '']);
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
      <Container className='text-center'>
        <Form onSubmit={handleSubmit}>
          {/* <Form.Row> */}
          <Form.Group controlId='formHorizontalEmail'>
            {inputIngredients.map((inputValue, idx) => {
              return (
                <div key={idx + 1}>
                  {/* <label>{`ingredient${idx + 1}`}:</label> */}
                  <Form.Label column sm={2}>
                    {`ingredient${idx + 1}`}:{/* </Form.Label> */}
                    <Form.Control
                      // <input
                      name={`ingredient${idx + 1}`}
                      value={inputValue}
                      onChange={(evt) => onChange(evt, idx)}
                      // ></input>
                    />
                  </Form.Label>
                  <Button
                    variant='outline-primary'
                    size='sm'
                    type='button'
                    onClick={(evt) => handleDelete(evt, idx)}
                  >
                    {''}delete
                  </Button>
                </div>
              );
            })}
            <Button
              className='ml-3'
              variant='primary'
              type='button'
              onClick={handleAdd}
            >
              Add
            </Button>
            {''}
            <Button className='ml-2' variant='success' type='submit'>
              Submit
            </Button>

            {maxedout && <p>You can't add anymore. Sorry.</p>}
            {submitted && <RecipesList ingredients={submittedIngredients} />}
          </Form.Group>
          {/* </Form.Row> */}
        </Form>
      </Container>
    </>
  );
}
