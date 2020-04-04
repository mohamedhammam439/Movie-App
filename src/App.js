import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Movies from './Components/Movies';
import Customers from './Components/Customers';
import Rentals from './Components/Rentals';
import Navbar from './Components/Navbar';
import NotFound from './Components/NotFound';
import MovieForm from './Components/movieForm';
import Login from './Components/Login';
import Register from './Components/Register';
import './App.css';

class App extends Component {
  render() { 
    return ( 
      <div className="App">
        <div className="container">
          <Navbar />
          <Switch>
            <Route path='/movies/:id' component={MovieForm}/>
            <Route path='/movies' exact component={Movies} />
            <Route path='/customers' component={Customers} />
            <Route path='/rentals' component={Rentals} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/not-found' component={NotFound} />
            <Redirect from='/' to='/movies' />
            <Redirect to='/not-found' />
          </Switch>
         
        </div>
      </div>
     );
  }
}
 
export default App;