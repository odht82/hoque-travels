import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './Components/Pages/PrivateRoute/PrivateRoute';
import AuthProvider from "./contexts/AuthProvider";
import Navbar from './Components/Pages/Navbar/NavBar';
import Home from './Components/Pages/HomePage/Home';
import SignIn from './Components/Pages/SignIn/SignIn';
import SignUp from './Components/Pages/SignUp/SignUp';
import NotFound from './Components/Pages/NotFound/NotFound';
import Footer from './Components/Pages/Footer/Footer';
import Booking from './Components/Pages/Booking/Booking';
import Places from './Components/Pages/Places/Places';
import Offers from './Components/Pages/Offers/Offers';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/places">
              <Places></Places>
            </Route>
            <PrivateRoute path="/places/bookings/:placeId">
              <Booking></Booking>
            </PrivateRoute>
            <Route exact path="/offers">
              <Offers></Offers>
            </Route>
            <PrivateRoute path="/offers/bookings/:offerId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/home-offer/bookings/:homeofferId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/sign-in">
              <SignIn></SignIn>
            </Route>
            <Route path="/sign-up">
              <SignUp></SignUp>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </>

  );
}

export default App;


