export default function(item) {
    const PREFIX_URL = 'img/' + item.id + '/gallery/';
    let images = [];
    for (let i = item.bigImage; i !== 0; i--) {
      images.push({
        original: `${PREFIX_URL}${i}.jpg`,
        thumbnail:`${PREFIX_URL}${i}.jpg`,
      });
  }
return images;
}
