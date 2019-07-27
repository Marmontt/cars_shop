import React from 'react';
import InitialPage from './components/InitialPage';
import Header from './components/Header';
import CarsList from './components/CarsList/'
import Cart from './components/Cart/Cart'
import {Route, Switch} from 'react-router-dom';

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path='/cars_list' component={CarsList}/>
                <Route path='/cart' component={Cart}/>
                <Route path='/' component={InitialPage}/>
            </Switch>
        </div>
    );
}

export default App;
