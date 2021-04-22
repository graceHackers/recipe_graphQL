import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './utils/client';
import Routes from './pages/Routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

console.log(process.env);
render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <Routes />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
