import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import Home from '../features/landing_page';
import Loader from '../components/Loader';
import MoveTop from '../components/Buttons/MoveTop';

function Routing() {
  return (
    <Router>
      <Loader />
      <Navbar />  
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
      <MoveTop />
    </Router>
  );
}

export default Routing;
