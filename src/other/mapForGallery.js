export default function(item) {
    const PREFIX_URL = 'img/' + item.id + '/gallery/';
    let images = [];
    let a = item.bigImage + 1;
    for (let i = 0; i < a; i++) {
      console.log('i = ', i);
      images.push({
        original: `${PREFIX_URL}${i}.jpg`,
        thumbnail:`${PREFIX_URL}${i}t.jpg`
      });
      console.log(images);
      i--
    }
  return images;
}
