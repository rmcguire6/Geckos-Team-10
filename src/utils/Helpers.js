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
  console.log('filter by Value ', filterType, filter)
  if (filterType === 'abv') {
    beerFilter = 'abv';
  } else if (filterType === 'ibu') {
    beerFilter = 'ibu'
  } else {
    beerFilter = '';
  }
  if (beerFilter !== '') {
    let lowerValue = Number.parseInt(filter.slice(0,3), 10)
    let higherValue = Number.parseInt(filter.slice(4), 10)
    filteredBeers = beers.filter(beer => (lowerValue <= beer[beerFilter] && beer[beerFilter] < higherValue))
  } else {
    if (filterType === 'text')
    console.log('text from filter by Value', filterType)
    filteredBeers = filterByType(beers, filterType)
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
        console.log('anything but ale or IPA',textFilter)
      } else if (textFilter === 'ipa') {   
          filteredBeers = beers.filter(beer =>
            beer.tagline.toLowerCase().includes(ipaFilter || textFilter) 
            || beer.name.toLowerCase().includes(ipaFilter || textFilter))
          console.log('IPA',textFilter)
      } else if (textFilter === 'ale') {
          filteredBeers = beers.filter(beer => beer.tagline.toLowerCase().includes(textFilter) 
             || beer.name.toLowerCase().includes(textFilter))
          filteredBeers = filteredBeers.filter(beer => !(beer.tagline.toLowerCase().includes(ipaFilter) 
            || beer.name.toLowerCase().includes(ipaFilter)))
            console.log('ale',textFilter)
      }
    }
  return filteredBeers;
};
const chooseThisFilteredList = (beers, [abv, ibu, type], filterBy) => {
  let filteredBeers = []
  if (filterBy  !== '') {
    if (filterBy === 'abv')
    filteredBeers = filterByValue(beers,'abv', abv)
    console.log('abv', abv, filteredBeers)
  }
    if (filterBy === 'ibu') {
    filteredBeers = filterByValue(beers,'ibu', ibu)
    console.log('ibu', ibu, filteredBeers)
  }
  if (filterBy ==='type') {
    filteredBeers = filterByType(beers, type)
    console.log('type', type, filteredBeers)
  }
  return filteredBeers;
};
export { getRandomBeer, displayUniqueBeers, chooseThisFilteredList, filterByValue};
