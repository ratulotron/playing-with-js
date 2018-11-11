import React, { Component } from 'react';
import Home from './components/Home';
import { Header } from './components/Header';
import { User } from './components/User'
import './App.css';

class App extends Component {

  users = [
    { name: "Ratul" }
  ]

  render() {
    return (
      <div className='container'>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            {this.users.map((user, index) => <User name={user.name} key={index} />)}
          </div>
        </div>

      </div>

    );
  }
}

export default App;
