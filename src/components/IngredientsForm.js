import React, { useState, useEffect } from "react";
import RecipesList from "./RecipesList";

export default function IngredientsForm() {
  // const [ingredient, setIngredient] = useState({
  //   ingredient1: "",
  //   ingredient2: "",
  //   ingredient3: "",
  // });
  const [submitted, setSubmitted] = useState(false);
  const [submittedIngredients, setSubmittedIngredients] = useState("");

  const [inputIngredients, setInputIngredients] = useState([]);
  const [maxedout, setMaxedout] = useState(false);

  //component did mount
  useEffect(() => {
    setInputIngredients([""]);
  }, []);

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(inputIngredients);

    //['tomato', 'cheese', 'flour'] => 'tomato,+cheese,+flour'
    const stringIngredient = inputIngredients.join(",+");
    console.log(stringIngredient);

    setSubmitted(true);
    setSubmittedIngredients(stringIngredient);
    setInputIngredients([""]);
  }

  function onChange(evt, idx) {
    console.log(inputIngredients);
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        {inputIngredients.map((inputValue, idx) => {
          return (
            <div key={idx + 1}>
              <label>{`ingredient${idx + 1}`}:</label>
              <input
                name={`ingredient${idx + 1}`}
                value={inputValue}
                onChange={(evt) => onChange(evt, idx)}
              ></input>
            </div>
          );
        })}
        <button type="button" onClick={handleAdd}>
          Add
        </button>
        <button type="submit">Submit</button>
      </form>
      {maxedout && <p>You can't add anymore. Sorry.</p>}
      {submitted && <RecipesList ingredients={submittedIngredients} />}
    </>
  );
}
