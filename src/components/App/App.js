import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'components/App/App.css';
import {
  Route,
  Routes,
} from "react-router-dom";
import React, { Component,useEffect, useState } from 'react';
import axios from 'axios';
import Nav from "components/Nav/Nav";
import Cart from "components/Cart/Cart";
import Main from "components/Main/Main";
import Signin from 'components/User/Signin';
import Signup from 'components/User/Signup'
import Item from "components/Item/Item";

class App extends Component {
  render() {
    // useEffect(() => {
    //     axios.get('/api/hello')
    //     .then(response => setHello(response.data))
    //     .catch(error => console.log(error))
    // }, []);

    return (
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*/item" element={<Item />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    );
  }
}

export default App;