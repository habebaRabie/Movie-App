import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from './Component/Home';
import MovieDetails from './Component/MovieDetails';


const App=() => {
  return (

    
      <div className="App">
        <BrowserRouter>
            <header>
              <nav>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                </ul>
              </nav>
            </header>
            <main>
              <Switch>
                <Route path="/"exact component={Home}></Route>
                <Route path="/Home/:id"component={MovieDetails}></Route>
              </Switch>
            </main>
          </BrowserRouter>
      </div>
    
  );
}

export default App;
