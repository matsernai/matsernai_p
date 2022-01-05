import './App.css';
import React from 'react';
import NavBer from './Components/Navbar';

// Contents
import Home from './Contents/Home';
import About from './Contents/About';
import Education from './Contents/Education';
import Skills from './Contents/Skills';
import Contact from './Contents/Contact';

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBer />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Education">
          <Education />
        </Route>
        <Route exact path="/Skills">
          <Skills />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
      </div>
    </Router>
  );
}

export default App;