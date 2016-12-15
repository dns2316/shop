import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import product from './productList';
import ItemPic from './ItemPic';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a href="https://dns2316.github.io/shop"><h2>Welcome to React</h2></a>
        </div>
        <div className="items">
          {product.map((item,index) => (
            <div key={index} className="item">
              <ItemPic {...item} />
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
