import React, { Component } from "react";
 
class Events extends Component {
  render() {
    return (
      <div>
        <h2>Events & Fundraising</h2>
        <p className="robinsons">Events<br/></p>
        <p className="family">Call Us or Email us to Schedule your Event!<br/>309-291-2430<br/> bobbi@four30scones.com</p>
 
        <p className="robinsons">Fundraise!<br/>
          Our fundraising is a great opportunity for:</p>        
        <ul className="fund">
          <li>Adoption</li>
          <li>Community</li>
          <li>Charities</li>
          <li>Church Groups</li>
          <li>Mission Trips</li>
          <li>School</li>
          <li>Sports Teams</li>
        </ul>
        <p className="robinsons">HOW IT WORKS:</p>
        <p className="family">
Your group sells as many half dozen or dozen boxes of scones you can and you keep a portion of each sale! <br/>

Pick up to five scone flavors!<br/>

Your group picks up the orders and distributes them. </p>
      </div>
    );
  }
}
 
export default Events;