import React from 'react';
import Welcome from './components/Welcome/Welcome';
import Navbar from './components/Navbar/Navbar'
import Beverages from './components/Beverages/Beverages';
import FastFood from './components/FastFood/FastFood';
import Snacks from './components/Snacks/Snacks';
import Sweets from './components/Sweets/Sweets';
import MyCart from './components/MyCart/MyCard';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar/>
          <Routes>
            {/* <Route exact path="/" element={<Welcome/>}/> */}
            <Route exact path="/" element={<SignIn/>}/>
            <Route exact path="/welcome" element={<Welcome/>}/>
            <Route exact path="/beverages" element={<Beverages/>}/>
            <Route exact path="/fastFood" element={<FastFood/>}/>
            <Route exact path="/snacks" element={<Snacks/>}/>
            <Route exact path="/sweets" element={<Sweets/>}/>
            <Route exact path="/mycart" element={<MyCart/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
