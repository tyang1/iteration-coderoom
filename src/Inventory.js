import React, { Component } from "react";
// import './Inventory.css';

/*
Creating a box where the inventory lives.
Need a variable "InventoryItems" which will pull the items from 'InventoryItems.js'

CSS:
Off white box.
Long thin box that appears at the bottom of the screen.
Box shadow.

*/

class Inventory extends Component {
    render() {
        return (
            <div className="inventory">
                <h2>Inventory:</h2>
                {InventoryItems}
            </div>
        );
    }
}

export default Inventory;