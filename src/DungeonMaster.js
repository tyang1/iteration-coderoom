import React, { Component } from 'react';

const DM = React.createContext();
var myWorker = new Worker("./worker.js");


class DungeonMaster extends Component {
  constructor(props){
    super(props)
    this.state = {
      keysCollected: 0,
      text: {
          introText: "You wake up to find yourself in a dimly lit room. Wondering where you are you start to explore your small surroundings...",
          deskText: "You head to the desk and search amongst the scattered sheets of paper: ",
          nightstandText: "Wondering what might be inside you open the nightstand drawer: ",
          bedText: "Hoping no monsters attack, you cautiously peek under the bed: ",
          completionText: "Congratulations on completion of the challenge. You received 28 keys!",
          bossChallengeText: "You have collected all the keys to the keyboard. Time for the Boss battle!",
          bossDefeatText: "CONGRATULATIONS!!! You have succesfully defeated the Boss Challenge and ESCAPED!!!"
      },

      activeNarrative: ['You wake up to find yourself in a dimly lit room. Wondering where you are you start to explore your small surroundings...'],


      promptText: '',
      deskBtn: {active: false, text: 'Check Desk'},
      nightstandBtn: {active: false, text: 'Open Nightstand Drawer!'},
      bedBtn: {active: false, text: 'Look Under Bed'},
      bossBtn: {visible: false, text: 'Challenge Boss'},
      goToDesk: function() {
        // here we add the relevant narrative text to the active narrative array
        this.state.activeNarrative.push()
        // set deskBtn active so it's greyed out
        this.setState({button1: {active: true}});
      },
      goToNightstand: function() {
        // here we add the relevant narrative text to the active narrative array
        this.state.activeNarrative.push()
        // set nightstandBtn active so it's greyed out
        this.setState({button2: {active: true}});
      },
      goToBed: function() {
        // here we add the relevant narrative text to the active narrative array
        this.state.activeNarrative.push()
        // set bedBtn active so it's greyed out
        this.setState({button3: {active: true}});
      },
      challengeCompleted: function() {
        // here we add the relevant narrative text to the active narrative array
        this.state.activeNarrative.push();
        // we also need to add 28 keys to the player's total keys
        this.setState({keysCollected: this.state.keysCollected + 28});
        // finally upon completion, change the interactive container back to the page with the 3 buttons ---the clicked button should be unclickable from other function.
      },
      bossChallengeCompleted: function() {
        // here we add the relevant narrative text to the active narrative array
        this.state.activeNarrative.push();
        // we also need to redirect the player to the winner screen
      },
      challengeActive: true,
      challengePrompt: 'Your first challenge:',
      startingCode: 'function test (params) {}',
      submitTest: function(code) {
        console.log(`submitTest: submitting code to web worker, sending datatype: ${typeof code}.\nCode to submit: ${code}`);
        // myWorker.postMessage({ code, challenge: 1 })
      }
    }
    this.state.goToDesk = this.state.goToDesk.bind(this);
    this.state.goToBed = this.state.goToBed.bind(this);
    this.state.goToNightstand = this.state.goToNightstand.bind(this);
    this.state.challengeCompleted = this.state.challengeCompleted.bind(this);
    this.state.bossChallengeCompleted = this.state.bossChallengeCompleted.bind(this);
    this.state.submitTest = this.state.submitTest.bind(this);
    myWorker.onmessage = function (e) {
      console.log( e.data );
      console.log('Message received from worker');
    };
    // bind in-state functions here
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
