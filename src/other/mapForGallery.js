export default function(item) {
    const prefix = 'img/' + item.id + '/gallery/';
    let images = [];
    for (let i = item.bigImage; i !== 0; i--) {
      images.push({
        original: `${prefix}${i}.jpg`,
        thumbnail:`${prefix}${i}.jpg`
      });
    }
  return images;
}
