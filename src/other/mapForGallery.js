export default function(item) {
    const prefix = 'img/' + item.id + '/gallery/';
    let images = [{
        original: `${prefix}1.jpg`,
        thumbnail:`${prefix}1.jpg`,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        originalAlt: item.name,
        // srcSet: 'Optional srcset (responsive images src)',
        sizes: 'width=560 height=315'
      }];
    for (let i = item.bigImage; i !== 1; i--) {
      images.push({
        original: `${prefix}${i}.jpg`,
        thumbnail:`${prefix}${i}.jpg`
      });
    }
  return images;
}
