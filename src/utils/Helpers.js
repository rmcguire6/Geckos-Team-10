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
  if (filter.length > 0 && beerFilter !== '') {
    let lowerValue = Number.parseInt(filter.slice(0,2), 10)
    let higherValue = Number.parseInt(filter.slice(3), 10)
    //console.log('filter', filter, 'lowerValue', lowerValue, 'higherValue', higherValue)
    //console.log('first beer filter value', beers[0][beerFilter])
    filteredBeers = beers.filter(beer => (lowerValue <= beer[beerFilter] && beer[beerFilter] < higherValue))
  } else {
    console.log('No filter chosen')
  }
  return filteredBeers;
}
export { getRandomBeer, displayUniqueBeers, createFilteredBeerList };
