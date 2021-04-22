import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_RECIPE_INSTRUCTION_QUERY } from "../queries/getRecipeInstruction";

export default function SingleRecipeInstruction(props) {
  const id = Number(props.id);

  const { loading, error, data } = useQuery(GET_RECIPE_INSTRUCTION_QUERY, {
    variables: {
      recipeId: id,
    },
  });
  if (error) return `Error! ${error}`;

  const recipeInstruction = data?.getRecipeInstruction;
  console.log("instruction", recipeInstruction);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Instruction:</p>
          {recipeInstruction.map((steps, idx) => {
            return (
              <ul key={idx}>
                <li>{steps.name}</li>
              </ul>
            );
          })}
        </>
      )}
    </div>
  );
}
