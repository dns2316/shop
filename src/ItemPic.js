import React, { Component } from 'react';
import SkyLight from 'react-skylight';
import ImageGallery from 'react-image-gallery';
import styleSL from './other/styleForPopup';
import images from './other/mapForGallery';

class ItemPic extends Component {

  constructor() {
    super();
    this.state = {
      showIndex: false,
      slideOnThumbnailHover: false,
      showBullets: true,
      showThumbnails: false,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showGalleryPlayButton: false,
      showNav: true,
      slideInterval: 1000,
    };
  }

  _onImageClick(event) {
    console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex());
  }

  handleImageLoad(event) {
  console.log('Image loaded ', event.target)
}
//src='img/'{item.id}'/01.jpg'
  render() {
    let item = this.props;
    console.log(item);
    return (
            <div>
              <img className="preImg" src={item.image} alt={item.name} onClick={() => this.refs[item.idgal].show()} />

              <SkyLight dialogStyles={styleSL.dialogStyles} hideOnOverlayClicked ref={item.idgal} title={item.name}>
                <ImageGallery
                  ref={i => this._imageGallery = i}
                  items={images(item)}
                  lazyLoad={false}
                  slideInterval={parseInt(this.state.slideInterval)}
                  showBullets={this.state.showBullets}
                  showThumbnails={this.state.showThumbnails}
                  showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
                  onImageLoad={this.handleImageLoad} />
                <br/>
                <span className="composed">{item.composed} </span>
              </SkyLight>
            </div>
    );
  }
}

export default ItemPic;
