import React from 'react';
import { Route, } from 'react-router-dom';
import People from './People';
import Person from './Person'

const App = () => (
    <>
    <Route exact path="/" component={People} />
    <Route exact path="/person/:id" component={Person} />
    </>
);

export default App;
