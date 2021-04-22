import IngredientsForm from './IngredientsForm';
import Container from 'react-bootstrap/Container';

export default function Recipes() {
  console.log('Recipes component');
  return (
    <>
      <Container>
        <h2>What ingredients do you have?</h2>
        <IngredientsForm />
      </Container>
    </>
  );
}
