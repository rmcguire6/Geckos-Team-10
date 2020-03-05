import React from 'react';
const Contact = () => {
    return (
        <div className="contact">
        <h3>Hoppiness</h3>
        <div className="list">
          <div className="nav">
            <a href="#">About</a>
            <a href="#">HopFAQs</a>
            <a href="#">Legal</a>
            <a href="#">Contact Us</a>
          </div> 
          <form className="email">
          <label>Stay Hop-To-Date About New Brews</label>
          <div>
          <input type="email" className="input"/> 
          <button className="button">Send</button> 
          </div>
          </form>
          </div>
          <div className="tag">Brewed Responsibly, So Drink Responsibly</div>
        </div>
    )
} 
export default Contact; 