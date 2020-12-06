import React, { Component } from "react";
 
class SMenu extends Component {
  render() {
    return (
      <div>
        <h2>Drinks Menu</h2>
       <p className="dmenu">Brews</p>
        <ul className="drink">
          <li class="col1">Daily Brew</li>
          <li class="col1">Cold Brew</li>
          
          <li class="col2">$2.50</li>
          <li class="col2">$4.00</li>

          <li class="col3">$3.25</li>
          <li class="col3">$4.50</li>
        </ul>

        <p className="dmenu">Expresso</p>
        <ul className="drink">
          <li class="col1">Americano</li>
          <li class="col1">Cappuccino</li>
          <li class="col1">Unflavored Latte</li>
          <li class="col1">Flavored Latte</li>

          <li class="col2">$3.50</li>
          <li class="col2">$3.75</li>
          <li class="col2">$3.75</li>
          <li class="col2">$4.25</li>

          <li class="col3">$4.00</li>
          <li class="col3">$4.25</li>
          <li class="col3">$4.25</li>
          <li class="col3">$4.75</li>
        </ul>

        <p className="dmenu">Flavors</p>
        <ul className="drink">
          <li class="col1">Caramel</li>
          <li class="col1">Miel</li>
          <li class="col1">Mocha</li>
          <li class="col1">Vanilla Bean</li>
        </ul>

        <p className="dmenu">Extras</p>
        <ul className="drink">
          <li class="col1">Milk Alternatives (almond & oat)</li>
          <li class="col1">Espresso Shot</li>
          <li class="col1">Extra Flavor</li>

          <li class="col2">$1.00</li>
          <li class="col2">$1.00</li>
          <li class="col2">$.75</li>

          <li class="col2">-</li>
          <li class="col2">-</li>
          <li class="col2">-</li>
        </ul>

        <p className="dmenu">Tea</p>
        <ul className="drink">
          <li class="col1">Hot Tea</li>
          <li class="col1">Iced Tea</li>
          <li class="col1">Matcha</li>
          <li class="col1">Honey Chai Latte</li>
          <li class="col1">Spicey Chai Latte</li>

          <li class="col2">$2.50</li>
          <li class="col2">$2.75</li>
          <li class="col2">$4.25</li>
          <li class="col2">$4.25</li>
          <li class="col2">$4.25</li>

          <li class="col3">$3.00</li>
          <li class="col3">$3.25</li>
          <li class="col3">$4.75</li>
          <li class="col3">$4.75</li>
          <li class="col3">$4.75</li>
        </ul>

        <p className="dmenu">Lemonade</p>
        <ul className="drink">
          <li class="col1">Classic Lemonade</li>
          <li class="col1">Arnold Palmer</li>
          <li class="col1">Flavored Lemonade (seasonal)</li>

          <li class="col2">$2.75</li>
          <li class="col2">$3.25</li>
          <li class="col2">$3.25</li>

          <li class="col3">$3.25</li>
          <li class="col3">$3.75</li>
          <li class="col3">$3.75</li>
        </ul>

        <p className="dmenu">Specialty</p>
        <ul className="drink">
          <li class="col1">Hot Chocolate</li>
          <li class="col1">Affogato (cold brew + ice cream</li>
        
          <li class="col2">$3.00</li>
          <li class="col2">-</li>

          <li class="col3">$4.00</li>
          <li class="col3">$5.50</li>
        </ul>     

      </div>
    );
  }
}
 
export default SMenu;