import { useQuery } from '@apollo/react-hooks';
import { GET_RECIPES_QUERY } from '../queries/getRecipes.js';
import React, { useState, useEffect } from 'react';

export default function SingleRecipe(props) {
  console.log('props', props.match.params.recipeId);
  return <h1>single recipe</h1>;
}
