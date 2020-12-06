import React, { Component } from "react";
 
class SMenu extends Component {
  render() {
    return (
      <div>
        <h2>Scones Menu</h2>
        <ul className="scones">
        <p className="flavors">Scone Flavors</p>
        <li class="col1">Chocolate Chip</li>
          <li class="col1">Blueberry Lemon</li>
          <li class="col1">Raspberry Lemon</li>
          <li class="col1">Cinnamon Chip</li>
          <li class="col1">Cherry Pecan</li>

          <li class="col2">Espresso Dark Chocolate</li>
          <li class="col2">Cranberry Orange</li>
          <li class="col2">Vanilla Bean</li>
          <li class="col2">Banana with Salted Caramel</li>
          <li class="col2">Unfrosted Lemon Poppyseed with either Mascarpone cream, Strawberry jam or Lemon curd</li>
          <li class="col2">Bacon Cheddar</li>

          <p className="flavors">Gluten Free</p>
          <li class="col3">Blueberry Lemon</li>
          <li class="col3">Raspberry Lemon</li>
          <li class="col3">Chocolate Chip</li>

          <p className="flavors">Vegan & Gluten Free</p>
          <li class="col4">Raspberry Lemon</li>
        </ul>

       <p className="smenu">By the Dozen</p>
        <ul className="dozen">
          <li class="col1">Sweet</li>
          <li class="col1">Gluten Free</li>
          <li class="col1">Vegan & Gluten Free</li>
          <li class="col1">Savory</li>
          <li class="col1">Minis</li>

          <li class="col2">$27.00</li>
          <li class="col2">$30.00</li>
          <li class="col2">$33.00</li>
          <li class="col2">$38.00</li>
          <li class="col2">$18.00</li>
        </ul>

        <p className="smenu">Singles</p>
        <ul className="dozen">
          <li class="col1">Sweet</li>
          <li class="col1">Gluten Free</li>
          <li class="col1">Vegan & Gluten Free</li>
          <li class="col1">Savory</li>
          <li class="col1">Minis</li>

          <li class="col2">$2.50</li>
          <li class="col2">$2.75</li>
          <li class="col2">$3.00</li>
          <li class="col2">$3.50</li>
          <li class="col2">$1.50</li>
        </ul>

        <p className="smenu">Jams & Spreads</p>
        <ul className="dozen">
          <li class="col1">Mascarpone Cream</li>
          <li class="col1">Strawberry Jam</li>
          <li class="col1">Lemon Curd</li>
          <li class="col1">Unfrosted Scone with Topping</li>
          <li class="col1">Half Pint (topping only)</li>

          <li class="col2">$0.00</li>
          <li class="col2">$0.00</li>
          <li class="col2">$0.00</li>
          <li class="col2">$3.75</li>
          <li class="col2">$6.00</li>
        </ul>

        <p className="smenu">Extras</p>
        <ul className="dozen">
          <li class="col1">Sugared Pecans (pint)</li>
        
          <li class="col2">$8.00</li>
        </ul>     

      </div>
    );
  }
}
 
export default SMenu;