import React, { Component } from "react";
// import './InventoryItems.css';

/*
When the player answers a question correctly, they collect keys (as if keys on a keyboard.) This class presents how many keys have been collected. 

Will need to implement some sort of code in order to pull in the number of keys that the player has. This might possibly need to be a variable.

This class allows for the possibility of adding more elements into our inventory class.
*/

class InventoryItems extends Component {
    render() {
        return (
            <div className="inventory-items">
                <p>Number of keys: {totalKeys} </p>
            </div>
        );
    }
}

export default InventoryItems;