import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Category from './Components/Category';
import Products from './Components/Products';
import Shoes from './Components/CategorySet/Shoes';
import Boots from './Components/CategorySet/Boots';
import Footwear from './Components/CategorySet/Footwear';
import Prod1 from './Components/ProductsSet/Prod1';
import Prod2 from './Components/ProductsSet/Prod2';
import Prod3 from './Components/ProductsSet/Prod3';
import Prod4 from './Components/ProductsSet/Prod4';
import Login from './Components/Login';
import Admin from './Components/Admin';
import Prod0 from './Components/ProductsSet/Prod0';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route exact path='/category' component={Category} />
      <Route path='/category/shoes' component={Shoes} />
      <Route path='/category/boots' component={Boots} />
      <Route path='/category/footwear' component={Footwear} />
      <Route path='/products' component={Products} />
      <Route exact path='/products' component={Prod0} />
      <Route path='/products/1' component={Prod1} />
      <Route path='/products/2' component={Prod2} />
      <Route path='/products/3' component={Prod3} />
      <Route path='/products/4' component={Prod4} />
      <Route path='/login' component={Login} />
      <Route path='/admin' component={Admin} />
    </BrowserRouter>
  );
}

export default App;
