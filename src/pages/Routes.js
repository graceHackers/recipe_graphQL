import Recipes from '../components/Recipes';
import { Route, Switch } from 'react-router-dom';
import SingleRecipe from '../components/SingleRecipe';
import HomePage from './HomePage';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import RecipesList from '../components/RecipesList'

export default function Routes() {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' id='nav' >
        <Container>
          <Navbar.Brand href='/'>Kiki's Recipe</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto container-fluid'>
              <Nav.Link href='/#about'>About</Nav.Link>
              <Nav.Link href='/#creators'>Creators</Nav.Link>
              <Nav.Link href='/recipes'>
                <Badge variant='secondary'>Search new recipes</Badge>
              </Nav.Link>
              <Nav.Link target='_blank' href='https://mintbean.io/' className='ml-auto'>
                <Badge variant='info'>Check out Mintbean!</Badge>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/recipes' component={Recipes} />
        <Route exact path='/recipes/:recipeId' component={SingleRecipe} />
        <Route exact path='/results/:ingredients' component={RecipesList} />
      </Switch>
    </>
  );
}
