import axios from 'axios';

const root_api = 'https://api.punkapi.com/v2/beers';

const getBeers = async () => {
  try {
    return await axios
      .all([
        axios.get(`${root_api}?page=1&per_page=80`),
        axios.get(`${root_api}?page=2&per_page=80`),
        axios.get(`${root_api}?page=3&per_page=80`)
      ])
      .then(
        axios.spread(function(data1, data2, data3) {
          let beerData1 = data1.data;
          let beerData2 = data2.data;
          let beerData3 = data3.data;
          let master_data = beerData1.concat(beerData2, beerData3);
          return master_data;
        })
      );
  } catch (error) {
    console.log(error);
  }
};

export default getBeers;
