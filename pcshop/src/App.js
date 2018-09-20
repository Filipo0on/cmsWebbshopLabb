import React, { Component } from 'react';
import Products from './products';
import Productpage from './productpage';
import Navbar from './navbar.js';
import Cart from './cart.js';
import Datorer from './datorer.js';
import Bild from './bild.js';
import Ljud from './Ljud.js';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        let myRequest = new Request('http://192.168.99.100:8090/api/collections/get/Products?token=9cbbec297423443b8eddc60a2feecb');
        let initialProducts = [];
        fetch(myRequest)
            .then(response => {
                return response.json();
            }).then(data => {
            initialProducts = data.entries.map((products) => {
                return products
            });
            console.log(initialProducts);
            this.setState({
                products: initialProducts,
            });
        });
    }



  render() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" render={(props) => <Products {...props} products={this.state.products}/>} exact />
                    <Route path="/productpage/:id" render={(props) => <Productpage {...props} products={this.state.products}/>}  />
                    <Route path="/kundvagn" render={(props) => <Cart {...props} products={this.state.products}/>}  />
                    <Route path="/datorer" render={(props) => <Datorer {...props} products={this.state.products}/>}  />
                    <Route path="/bild" render={(props) => <Bild {...props} products={this.state.products}/>}  />
                    <Route path="/ljud" render={(props) => <Ljud {...props} products={this.state.products}/>}  />
                </Switch>
             </div>
        </BrowserRouter>
    );
  }
}

export default App;



