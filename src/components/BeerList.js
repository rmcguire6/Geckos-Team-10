import React from 'react';
import BeerCard from './BeerCard';
//import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';


const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
     overflow: 'hidden',
    },
    gridList: {
      width: 400,
      height: 500,
      transform: 'translateZ(0)',
    }
  });

const BeerList = (props) =>{
    const beerItems = props.beers.map((beer) => {
        return <BeerCard key={beer.id} beer = {beer}/> 
      });
      return (<div className={styles.root}>
       <GridList cellHeight={250} spacing={1} className={styles.gridList}>
      {beerItems}
      </GridList>
      </div>);
    };


export default withStyles(styles)(BeerList);