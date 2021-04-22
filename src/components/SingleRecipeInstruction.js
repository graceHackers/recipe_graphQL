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

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h3 style={{ fontSize: "20px" }} className="mb-3">
            Instruction:
          </h3>
          {recipeInstruction.map((steps, idx) => {
            return (
              <div key={idx}>
                <p style={{ fontSize: "18px" }}>
                  {steps.number}. {steps.step}
                </p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
