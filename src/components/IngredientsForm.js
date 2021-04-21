import React, { useState } from 'react';
import RecipesList from './RecipesList'



export default function IngredientsForm(){
  const [ingredient, setIngredient] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submittedIngredient, setSubmittedIngredient] = useState('')


  function handleSubmit(evt) {
    evt.preventDefault()
    console.log(ingredient)

    setSubmitted(true)
    setSubmittedIngredient(ingredient)
    setIngredient('')
  }

  function onChange(evt) {
    setIngredient(evt.target.value)
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <label>Ingredient:</label>
        <input name='ingredient' value={ingredient} onChange={onChange}></input>

        <button type='submit'>Submit</button>
      </form>
      {submitted ? <RecipesList ingredient={submittedIngredient}/> : ''}
    </>
  )
}
