import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './utils/client';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


console.log(process.env);
render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <HomePage />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
