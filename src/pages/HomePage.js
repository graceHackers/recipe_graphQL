import Recipes from '../components/Recipes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SingleRecipe from '../components/SingleRecipe';
export default function HomePage() {
  return (
    <>
      <h1>Find Recipes by Ingredients!</h1>
      <Switch>
        <Route exact path='/' component={Recipes} />
        <Route exact path='/recipes' component={Recipes} />
        <Route exact path='/recipes/:recipeId' component={SingleRecipe} />
      </Switch>
    </>
  );
}
