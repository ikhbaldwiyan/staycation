import React from 'react';
import 'assets/scss/style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from 'pages/LandingPage';
import DetailPage from 'pages/DetailPage';
import Checkout from 'pages/Checkout';
import Example from 'pages/Example';
import Article from 'pages/Article';
import Live from 'pages/streaming/Live';
import ListRoom from 'pages/jeketi/ListRoom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/properties/:id" component={DetailPage} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/article" component={Article} />
        <Route path="/example" component={Example} />
        <Route path="/live-stream/:id" component={Live} />
        <Route path="/list-room" component={ListRoom} />
      </Router>
    </div>
  );
}

export default App;
