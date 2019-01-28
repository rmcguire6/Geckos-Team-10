import React from 'react';

const Hero = ({random}) =>{
    const imageURL = random.image_url;
    return(
        <div >  
            <div className="hero-group">
                <h1 className="colored hero-text">HOPP</h1>
                <div >
                    <img className="hero-image" src={imageURL} height='260' width='107'/>
                </div>               
                <h1 className="colored hero-text">NESS</h1>
            </div>
            <div className="hero-group">
                <div>NO PRESERVATIVES<br/>
                   NO CHEMICALS<br/>
                   NO CHEAP SUBSTITUTES<br/>
                   JUST <span className="bold">BARLEY, HOPS, YEAST, WATER</span><br/>
                   and <span className="colored big">MIND-BLOWING FLAVOR</span>
                </div>
                <div className="circle">
                   <h3>Featured Beer</h3>
                   <h4>Get to Know</h4>
                   <h2>{random.name}</h2>
                </div>  
            </div>           
        </div>
    )
}

export default Hero;
