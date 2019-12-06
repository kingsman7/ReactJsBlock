import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './menu';
import Users from './users/users';
import Publicaciones from './publicaciones/index';
import Works from './works/index';
import WorksAdd from './works/save';


const App =()=> {
    return (
      <BrowserRouter>
        <Menu/>
        <div className="margen">
          <Route exact path='/' component={ Users }/>
          <Route exact path='/works' component={ Works }/>
          <Route exact path='/works/save' component={ WorksAdd }/>
          <Route exact path='/works/save/:user_id/:work_id' component={ WorksAdd }/>
          <Route exact path='/publicaciones/:key' component={ Publicaciones }/>
        </div>
      </BrowserRouter>
    )
}

export default App
