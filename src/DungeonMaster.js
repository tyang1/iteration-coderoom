import React, { Component } from 'react';

const DM = React.createContext();



class DungeonMaster extends Component {
  constructor(props){
    super(props)
    this.state = {
      keysCollected: 0,
      activeNarrative: ['This is the first paragraph', 'This is the second paragraph.'],
      promptText: '',
      button1: {active: false, text: 'Check desk'},
      button2: {active: false, text: 'Open nightstand drawer!'},
      button3: {active: false, text: 'Look under bed'},
      button4: {visible: false, text: 'Challenge the boss'}
      goToDesk: function() {
        // here we add the relevant narrative text to the active narrative array
        activeNarrative.push()
        // set button1 active so it's greyed out
        this.setState({button1: {active: true}});
      }
    }
    this.state.goToDesk = this.state.goToDesk.bind(this);
    // bind in-state functions here
}

goToDesk = () => {
  this.setState({ button1: {active: true}});

}

openNightStandDrawer

lookUnderBed

render() {
    return (
        <DM.Provider value={this.state}>
            {this.props.children}
        </DM.Provider>
    );
}
}

export { DungeonMaster,  DM };