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
const createFilteredBeerList = (beers ,filterBy , filter) => {
  let beerFilter;
  let filteredBeers = [];
  if (filterBy === 'abv') {
    beerFilter = 'abv'
  } else if (filterBy === 'ibu') {
    beerFilter = 'ibu'
  } else {
    beerFilter = ''
  }
  if (beerFilter !== '') {
    let lowerValue = Number.parseInt(filter.slice(0,3), 10)
    let higherValue = Number.parseInt(filter.slice(4), 10)
    filteredBeers = beers.filter(beer => (lowerValue <= beer[beerFilter] && beer[beerFilter] < higherValue))
  }
  return filteredBeers;
}
export { getRandomBeer, displayUniqueBeers, createFilteredBeerList };
