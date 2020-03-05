import React from 'react';

const Hero = ({random}) =>{
    const imageURL = random.image_url;
    return(
        <div className="hero">  
            <div className="hero-group">
                <h1 className="colored hero-text">HOPP</h1>
                <div >
                    <img className="hero-image" src={imageURL} height='260' width='107'/>
                </div>               
                <h1 className="colored hero-text">NESS</h1>
            </div>
            <div className="hero-ad">
                <div className="hero-text-left">NO PRESERVATIVES<br/>
                   NO CHEMICALS<br/>
                   NO CHEAP SUBSTITUTES<br/>
                   JUST <span className="bold">BARLEY, HOPS, YEAST, WATER</span> and <br/>
                   <span className="colored big">MIND-BLOWING FLAVOR</span>
                </div>
                <div className="circle">
                   <h2>Featured Beer</h2>
                   <h3>Get to Know</h3>
                   <p>{random.name}</p>
                </div>  
            </div>           
        </div>
    )
}

export default Hero;
