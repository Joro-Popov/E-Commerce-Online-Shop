import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import {auth} from './utils/firebase';
import AuthService from './services/AuthService';
import Header from './components/header';
import HomePage from "./pages/homepage";
import ShopPage from './pages/shop';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

function App({ setCurrentUser, currentUser }) {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await AuthService.createUserProfile(userAuth);

        userRef.onSnapshot(async (snapShot) => {
          await setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        // it will set null
        await setCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() => currentUser ? <Redirect to="/" /> : <SignIn />}
        />
        <Route
          exact
          path="/signup"
          render={() => currentUser ? <Redirect to="/" /> : <SignUp />}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = {
  setCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
