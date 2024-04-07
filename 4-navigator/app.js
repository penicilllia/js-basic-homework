const positionLat = 1;
const positionLong = 3;
const adressLat = 10;
const adressLong = 14;

const routeDuration = Math.sqrt((adressLat - positionLat) ** 2 + (adressLong - positionLong) ** 2);

console.log(`До нужного объекта нужно пройти ${routeDuration}`);
