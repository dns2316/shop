import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import product from './productList';

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
                <img src={item.image} alt={item.name} />
              <span className="nameItem">{item.name}</span><br/>
              <div className="priceItem">
                <span className="priceItemPrice">{item.price} {item.currency}</span><span className="priceItemCur">1 шт</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
