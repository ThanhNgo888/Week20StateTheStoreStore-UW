import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar"
import Wrapper from "./components/Wrapper"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Cart from "./pages/Cart"
import Item from "./pages/Item"

import { StoreProvider } from './utils/GlobalState';


function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Cart" component={Cart} />
            <Route exact path="/Item" component={Item} />            
          </Wrapper>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
