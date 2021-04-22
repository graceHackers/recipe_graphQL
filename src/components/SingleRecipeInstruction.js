import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_RECIPE_INSTRUCTION_QUERY } from "../queries/getRecipeInstruction";
import { Container } from "react-bootstrap";

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
    <Container>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h3 style={{ fontSize: "20px" }} className="mb-3">
            Instruction:
          </h3>
          {recipeInstruction.length > 1 ? (
            recipeInstruction.map((steps, idx) => {
              return (
                <div key={idx}>
                  <p style={{ fontSize: "18px" }}>
                    {steps.number}. {steps.step}
                  </p>
                </div>
              );
            })
          ) : (
            <p>Sorry, no cooking instruction available for this dish...</p>
          )}
        </>
      )}
    </Container>
  );
}
