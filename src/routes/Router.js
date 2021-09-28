import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Logar from '../pages/Logar';
import Dragons from '../pages/Dragons';
import DragonsDetails from '../pages/DragonsDetails';
import DragonsPost from '../pages/DragonsPost';
import DragonsPut from '../pages/DragonsPut';

class Router extends Component{

  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Logar} />
          <Route exact path="/dragons" component={Dragons} />
          <Route exact path="/dragons/:id" component={DragonsDetails} />
          <Route exact path="/dragons-post" component={DragonsPost} />
          <Route exact path="/dragons-put/:id" component={DragonsPut} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;