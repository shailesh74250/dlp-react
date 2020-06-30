import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import LandingPage from '../features/landing_page';
import Loader from '../components/Loader';
import MoveTop from '../components/Buttons/MoveTop';

function Routing() {
  return (
    <Router>
      <Loader />
      <Navbar />
      <LandingPage />
      <Footer />
      <MoveTop />
    </Router>
  );
}

export default Routing;
