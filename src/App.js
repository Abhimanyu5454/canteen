import React from 'react';
import Welcome from './components/Welcome/Welcome';
import Navbar from './components/Navbar/Navbar'
import Beverages from './components/Beverages/Beverages';
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
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
