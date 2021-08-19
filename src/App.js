import React, {useState, useEffect} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import {auth} from './utils/firebase';
import AuthService from './services/AuthService';
import Header from './components/header';
import HomePage from "./pages/homepage";
import ShopPage from './pages/shop';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await AuthService.createUserProfile(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        })
      } else {
        // it will set null
        setCurrentUser(userAuth)
      }
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
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
