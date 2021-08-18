import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header';
import HomePage from "./pages/homepage";
import ShopPage from './pages/shop';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
