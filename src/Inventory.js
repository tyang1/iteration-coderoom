import React, { Component } from "react";
import { DM } from './DungeonMaster';

/*
Creating a box where the inventory lives.
Need a variable keysCollected which is the number of keys collected

CSS:
Off white box.
Long thin box that appears at the bottom of the screen.
Box shadow.
*/

class Inventory extends Component {
    render() {
        return (
          <DM.Consumer>
            {context => {
                let item = <div></div>
                if (context.item) item = [<img onClick={context.useItem} className="item" src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Ice-Cream-PNG/Transparent_Chocolate_Ice_Cream_Cone_Picture.png?m=1434276752"/>];
              // this is where any work happens that requires state. DungeonMaster's "this.state" can be reffered to as "context" here
               return(<div className="inventory">
                    <div className="name-inventory">Inventory:</div>
                    <p className="name-inventory">🔑: {context.keysCollected} / 3</p>
                    {item}
                </div>)
            }}
          </DM.Consumer>
        );
    }
}

export default Inventory;