import React  from 'react';
import {
    BrowserRouter,
    Route,
    Switch
  } from "react-router-dom";

import App from '../App';
import Blog from './Blog';

const Router = () => {
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/about" component={Blog} exact />
        </Switch>
    </BrowserRouter>
    )
}

export default Router;