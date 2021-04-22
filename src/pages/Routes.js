import Recipes from '../components/Recipes';
import { Route, Switch } from 'react-router-dom';
import SingleRecipe from '../components/SingleRecipe';
import HomePage from './HomePage'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export default function Routes() {
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Recipe Finder</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/#creators">Creators</Nav.Link>
          <Nav.Link href="/#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/recipes' component={Recipes} />
        <Route exact path='/recipes/:recipeId' component={SingleRecipe} />
      </Switch>
    </>
  );
}
