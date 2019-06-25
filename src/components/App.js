import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './menu';
import Users from './users';

const App =()=> {
    return (
      <BrowserRouter>
        <Menu/>
        <Route exact path='/' component={ Users }/>
      </BrowserRouter>
    )
}

export default App
