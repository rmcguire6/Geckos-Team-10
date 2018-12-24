import React from 'react';

const Hero = ({random}) =>{
    const imageURL = random.image_url;
    return(
        <div className="hero-image">
            <div className="hero-text">
                <h1>Beer of The Day</h1>
                <img src={imageURL} height='260' width='107'/>
                <figcaption><i>{random.name}</i></figcaption>
            
            </div>
      </div>
    )
}

export default Hero;
