import React from 'react';
import { withStyles } from '@material-ui/core/styles';
//import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const styles = theme => ({
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
});

const BeerCard = ({beer}) =>{ 
  const imageURL = beer.image_url;
  
  return (
   
     <GridListTile  key={beer.id} cols={beer.featured ? 3 : 1} rows={beer.featured ? 2 : 1}>
          <div className="flip-box">
        <div className="flip-box-inner">
        <div className="flip-box-front">
            <img  src={imageURL} alt={beer.name} height='310' width='110' />
            </div>
            <div className="flip-box-back">
            <b>Description:</b>
            <p>{beer.description}</p>
            <div><b>Alcohol by Volume:</b> {beer.abv}%</div>
            <div><b>International Bitterness Unit:</b> {beer.ibu}</div>
        <div >
        <b>Best when paired with: </b>
         {beer.food_pairing.map((item,k)=>
        {return <div key={k}>{item}</div>})}
        
    </div>
            </div>
            </div></div>
            <GridListTileBar
              title={beer.name}
              titlePosition="top"
              actionIcon={
                <IconButton className={styles.icon}>
                  <StarBorderIcon className={styles.icon}/>
                  
                </IconButton>
                }
              actionPosition="left"
              className={styles.titleBar}
            />
           
          </GridListTile>
    

  
  );
}

export default withStyles(styles)(BeerCard);
 
