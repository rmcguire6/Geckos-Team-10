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
const filterByValue = (beers ,filterType , filter) => {
  let beerFilter;
  let filteredBeers = [];
  if (filterType === 'abv') {
    beerFilter = 'abv';
  } else if (filterType === 'ibu') {
    beerFilter = 'ibu'
  } else  if (filterType === 'type'){
    beerFilter = 'type';
  } else {
    beerFilter = ''
  } 
  
  if (beerFilter === 'abv' || beerFilter ==='ibu')  {
    let lowerValue = Number.parseInt(filter.slice(0,3), 10)
    let higherValue = Number.parseInt(filter.slice(4), 10)
    filteredBeers = beers.filter(beer => (lowerValue <= beer[beerFilter] && beer[beerFilter] < higherValue))
  } else {
    if (beerFilter === 'type')
    filteredBeers = filterByType(beers, filter)
  }
  return filteredBeers;
}
const filterByType = (beers , textFilter) => {
  let filteredBeers = [];
  let ipaFilter = 'india pale ale'
  if (textFilter !== '') {
      if ((textFilter !== 'ipa') && (textFilter !== 'ale')) {
        filteredBeers = beers.filter(beer => beer.tagline.toLowerCase().includes(textFilter)
          || beer.name.toLowerCase().includes(textFilter))
      } else if (textFilter === 'ipa') {   
          filteredBeers = beers.filter(beer =>
            beer.tagline.toLowerCase().includes(ipaFilter || textFilter) 
            || beer.name.toLowerCase().includes(ipaFilter || textFilter))
      } else if (textFilter === 'ale') {
          filteredBeers = beers.filter(beer => beer.tagline.toLowerCase().includes(textFilter) 
             || beer.name.toLowerCase().includes(textFilter))
          filteredBeers = filteredBeers.filter(beer => !(beer.tagline.toLowerCase().includes(ipaFilter) 
            || beer.name.toLowerCase().includes(ipaFilter)))
      }
    }
  return filteredBeers;
};
const chooseThisFilteredList = (beers, [abv, ibu, type], filterBy) => {
  let filteredBeers = []
  if (filterBy  !== '') {
    if (filterBy === 'abv')
    filteredBeers = filterByValue(beers,'abv', abv)
  }
    if (filterBy === 'ibu') {
    filteredBeers = filterByValue(beers,'ibu', ibu)
  }
  if (filterBy ==='type') {
    filteredBeers = filterByType(beers, type)
  }
  return filteredBeers;
};
export { getRandomBeer, displayUniqueBeers, chooseThisFilteredList, filterByValue};
