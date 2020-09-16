import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './pages/Landing';
import Pokeball from './pages/Pokeball';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/pokeball" component={Pokeball} />
            </Switch>
        </BrowserRouter>
    );
}