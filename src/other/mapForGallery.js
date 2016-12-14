export default function(item) {
  let i = 1;
  const srcPath = 'img/' + item.id + '/gallery/' + i + '.jpg';
  const srcPathMin = 'img/' + item.id + '/gallery' + i + '.jpg';
    let images = [
      {
        original: srcPath,
        thumbnail: srcPathMin,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        originalAlt: item.name,
        thumbnailAlt: item.name,
        thumbnailLabel: 'Optional',
        // description: item.composed,
        srcSet: 'Optional srcset (responsive images src)',
        sizes: 'Optional sizes'
      }]
      if(i > 1) {
        images =+ {
          original: srcPath,
          thumbnail: srcPathMin
        }
      }
  return images;
}
