import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SkyLight from 'react-skylight';
import ImageGallery from 'react-image-gallery';
import product from './productList';
import styleSL from './other/styleForPopup';
import images from './other/mapForGallery';

class App extends Component {
  // constructor(props){
  //   super(props);
  // }

  constructor() {
    super();
    this.state = {
      showIndex: false,
      slideOnThumbnailHover: false,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: true,
      slideInterval: 2000,
      showVideo: {},
    };
  }

  handleImageLoad(event) {
  console.log('Image loaded ', event.target)
  }
//src='img/'{item.id}'/01.jpg'

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
              <img className="preImg" src={item.image} alt={item.name} onClick={() => this.refs.customDialog.show()} />

              <SkyLight dialogStyles={styleSL.dialogStyles} hideOnOverlayClicked ref="customDialog" title={item.name}>
                <ImageGallery
                  ref={i => this._imageGallery = i}
                  items={images(item)}
                  slideInterval={2000}
                  onImageLoad={this.handleImageLoad} />
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
