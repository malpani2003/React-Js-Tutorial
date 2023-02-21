import React, { Component } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import OderSummary from "./components/OderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="about" element={<About></About>}></Route>
          <Route path="product" element={<Products></Products>}></Route>
          <Route path="order-confirmed" element={<OderSummary></OderSummary>}></Route>
          <Route path="*" element={<NoMatch></NoMatch>}></Route>


        </Routes>
        {/* <Route path="/Home">
          <Home></Home>
        </Route> */}
      </div>
    );
  }
}

export default App;
