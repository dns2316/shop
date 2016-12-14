import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import product from './products'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="items">
          {product.map((item,index) => (
            <div key={index} className="item">
              <img
              src="01.jpg"
              alt={item.name}
              // dangerouslySetInnerHTML={{ __html: item.image }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
