import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SkyLight from 'react-skylight';
import product from './productList';
import styleSL from './other/styleForPopup';

class App extends Component {
  constructor(props){
    super(props);
  }
//src='img/'{item.id}'/01.jpg'
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welco1me to React</h2>
        </div>
        <div className="items">
          {product.map((item,index) => (
            <div key={index} className="item">
              <img className="preImg" src={item.image} alt={item.name} onClick={() => this.refs.customDialog.show()} />
              <SkyLight dialogStyles={styleSL.dialogStyles} hideOnOverlayClicked ref="customDialog" title={item.name}>
                <img className="bigImg" src={item.bigImage} alt={item.name} />
                <br/>
                <span className="composed">{item.composed} </span>
              </SkyLight>
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
