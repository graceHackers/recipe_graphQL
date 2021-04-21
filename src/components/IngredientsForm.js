import React, { useState } from 'react';
import RecipesList from './RecipesList';

export default function IngredientsForm() {
  const [ingredient, setIngredient] = useState({
    ingredient1: '',
    ingredient2: '',
    ingredient3: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submittedIngredient, setSubmittedIngredient] = useState({});

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(ingredient);

    setSubmitted(true);
    setSubmittedIngredient(ingredient);
    setIngredient({
      ingredient1: '',
      ingredient2: '',
      ingredient3: '',
    });
  }

  function onChange(evt) {
    console.log('ingredient', ingredient);
    setIngredient({ ...ingredient, [evt.target.name]: evt.target.value });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Ingredient1:</label>
        <input
          name='ingredient1'
          value={ingredient.ingredient1}
          onChange={onChange}
        ></input>
        <label>Ingredient2:</label>
        <input
          name='ingredient2'
          value={ingredient.ingredient2}
          onChange={onChange}
        ></input>
        <label>Ingredient3:</label>
        <input
          name='ingredient3'
          value={ingredient.ingredient3}
          onChange={onChange}
        ></input>

        <button type='submit'>Submit</button>
      </form>
      {submitted ? <RecipesList ingredient={submittedIngredient} /> : ''}
    </>
  );
}
