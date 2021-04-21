import React, { useState } from "react";
import RecipesList from "./RecipesList";

export default function IngredientsForm() {
  const [ingredient, setIngredient] = useState({
    ingredient1: "",
    ingredient2: "",
    ingredient3: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submittedIngredients, setSubmittedIngredients] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(ingredient);

    //['tomato', 'cheese', 'flour'] => 'tomato,+cheese,+flour'
    const stringIngredient = Object.values(ingredient).join(",+");

    setSubmitted(true);
    setSubmittedIngredients(stringIngredient);
    setIngredient({
      ingredient1: "",
      ingredient2: "",
      ingredient3: "",
    });
  }

  function onChange(evt) {
    setIngredient({ ...ingredient, [evt.target.name]: evt.target.value });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Ingredient1:</label>
        <input
          name="ingredient1"
          value={ingredient.ingredient1}
          onChange={onChange}
        ></input>
        <label>Ingredient2:</label>
        <input
          name="ingredient2"
          value={ingredient.ingredient2}
          onChange={onChange}
        ></input>
        <label>Ingredient3:</label>
        <input
          name="ingredient3"
          value={ingredient.ingredient3}
          onChange={onChange}
        ></input>

        <button type="submit">Submit</button>
      </form>
      {submitted ? <RecipesList ingredients={submittedIngredients} /> : ""}
    </>
  );
}
