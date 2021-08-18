import React, {useState, useEffect} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import {auth} from './utils/firebase';
import Header from './components/header';
import HomePage from "./pages/homepage";
import ShopPage from './pages/shop';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
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
