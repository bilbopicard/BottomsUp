import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useHistory } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Homepage from "./components/Home";
import About from './components/About';
import Profile from './components/Profile';
import SingleCocktail from './components/SingleCocktail';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const history = useHistory();
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />

      {isLoaded && (
        <Switch>
          <Route path='/' exact>
            <Homepage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/cocktails/:id'>
            <SingleCocktail />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/users/:id'>
            <Profile />
          </Route>
          <Route path='/' >
            {history.push('/signup')}
          </Route>
        </Switch>
      )}

    </>
  );
}

export default App;