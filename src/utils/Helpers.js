const getRandomBeer = arr => {
  let randomBeer = arr[Math.floor(Math.random() * arr.length)];
  return randomBeer;
};

const displayUniqueBeers = arr => {
  let displayNum = 6;
  let beerList = [];
  let beerID;
  let beersIdIndex = [];
  let getBeer;
  while (beerList.length < displayNum) {
    getBeer = getRandomBeer(arr);
    beerID = getBeer.id;
    if (!beersIdIndex.includes(beerID)) {
      beersIdIndex.push(beerID);
      beerList.push(getBeer);
    }
  }
  return beerList;
};

export { getRandomBeer, displayUniqueBeers };
