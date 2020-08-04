import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        {/* for dynamic <Route path="/checkout/:someId">  */}
        {/* Router is the parent route  */}
        <Route path="/">
            <Header /> {/* this is where we import at the top from Header */}
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <h1>Checkout</h1>
          </Route>

          <Route path="/login">
            <Header />
            <h1>Login page</h1>
          </Route>
          <Route path="/prime">
          {/* putting header tag basically uses header page on other pages */}
            <Header />
            <h1>Prime page</h1>
          </Route>
        </Switch>
        
      </div>
        {
          /* React Router  */
        }
        
        {
          /* Something  */
        }
        {
          /* Something  */
        }

      
    </Router>
  );
}

export default App;
