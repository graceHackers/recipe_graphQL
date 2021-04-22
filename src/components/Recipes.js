import IngredientsForm from "./IngredientsForm";
import Container from "react-bootstrap/Container";

export default function Recipes() {
  return (
    <>
      <Container className="text-center">
        <h2 className="mt-5 mb-5">What ingredients do you have?</h2>
        <IngredientsForm />
      </Container>
    </>
  );
}
