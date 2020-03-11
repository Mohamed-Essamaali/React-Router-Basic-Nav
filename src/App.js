import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>

    <route exact path="/">Home</route>
    <route path="/about">About</route>
    <route path="/contact">Contact</route>
    <Navigation />
  </div>
);

export default App;
