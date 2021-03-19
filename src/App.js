import React from 'react';
import 'assets/scss/style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LandingPage from 'pages/LandingPage';
import DetailPage from 'pages/DetailPage';
import Example from 'pages/Example';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/properties/:id" component={DetailPage} />
        <Route path="/example" component={Example} />
      </Router>
    </div>
  );
}

export default App;
