import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';
import Footer from './Footer';

function App() {
  const [{user}, dispatch] = useStateValue();
  //useEffect hook. very powerful for class based comps
  //runs once when app loads then not again, if something like basket goes in the array then it will load every time basket is updated
  //if you use a return in useEffect then the result will run when the component is unmounted
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {

      if(authUser) {
        //the user is logged in
        dispatch({
          type: "set_user",
          user: authUser,
        })
      } else {
        //user is logged out
        dispatch({
          type: "set_user",
          user: null,
        })
      }
    })
    return() => {
      //any cleanup operations go in here
      //unsubscribe will detatch and reattach the listener
      unsubscribe();
    }
  }, []);
  console.log(user)

  return (
    <Router>
      <div className="App">
        <Switch>
          {/* for dynamic <Route path="/checkout/:someId">  */}
          {/* Router is the parent route  */}
          

          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/orders">
            <Header />
            <h1>Order page</h1>
            <Footer />
          </Route>
          <Route path="/login">
            
            <Login />
          </Route>
          <Route path="/prime">
          {/* putting header tag basically uses header page on other pages */}
            <Header />
            <h1>Prime page</h1>
            <Footer />
          </Route>
          <Route path="/">
            <Header /> {/* this is where we import at the top from Header */}
            <Home />
            <Footer />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
