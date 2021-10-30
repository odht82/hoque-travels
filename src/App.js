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
import Packages from "./Components/Pages/Packages/Packages";

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
            <Route exact path="/packages">
              <Packages></Packages>
            </Route>
            <PrivateRoute path="/packages/bookings/:packageId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/home-packages/bookings/:homepackageId">
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


