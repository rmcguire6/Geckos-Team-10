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
     backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '100%',
      height: '100%',
      transform: 'translateZ(0)',
    }
  });

const BeerList = (props) =>{
  const {classes,beers} = props;
    const beerItems = beers.map((beer) => {
        return <BeerCard key={beer.id} beer = {beer}/> 
      });
      return (<div className={classes.root}>
       <GridList cellHeight={270} spacing={3} className={classes.gridList}>
      {beerItems}
      </GridList>
      </div>);
    };


export default withStyles(styles)(BeerList);