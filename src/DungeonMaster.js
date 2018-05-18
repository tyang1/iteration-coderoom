import React, { Component } from 'react';

const DM = React.createContext();



class DungeonMaster extends Component {
  constructor(props){
    super(props)
    this.state = {
      keysCollected: 0,
      text: 'text',
      promptText: '',
      buttons: {
        button1: {active: false, text: 'Check desk'},
        button2: {active: false, text: 'Open nightstand drawer!'},
        button3: {active: false, text: 'Look under bed'},
      },
    }
}
render() {
    return (
        <DM.Provider value={this.state}>
            {this.props.children}
        </DM.Provider>
    );
}
}

export { DungeonMaster,  DM };