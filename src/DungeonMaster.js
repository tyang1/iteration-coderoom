import React, { Component } from 'react';

const DM = React.createContext();
// var  myWorker = new Worker("./worker.js");

// var blob = new Blob( [
//   "onmessage = function (e) {console.log('Message received from main script');postMessage('hello from worker');}"] );

var blob = new Blob([
  `onmessage = function (e) { console.log('Message received from main script');

  // console.log(e.data.code);

// may need to do some special parsing
// This eval's the code and defines the function in our scope
// eval(e.data.code);

try {
    eval(e.data.code); 
} catch (e) {
    if (e instanceof SyntaxError) {
        postMessage('no');
    }
}

let passed = true; //assuming they are passing
switch (e.data.challenge) {
  case 1: //MVP ... they need to write a function that will find an element in an array and return the index
    passed = true; //assuming they are passing
    if (findInArray(['a', 'b', 'c'], 'b') !== 1) {
      passed = false;
      break;
    }

    if (findInArray([1, 2, 3], 1) !== 0) {
      passed = false;
      break;
    }

    break;
  case 2:

    break;

  default:
    break;
}

let msg = passed ? 'yes' : 'no';
postMessage(msg);}`
]);


var blobURL = window.URL.createObjectURL(blob);
var myWorker = new Worker(blobURL);

class DungeonMaster extends Component {
  constructor(props){
    super(props)
    this.state = {
      
      isHidden: true,
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
      deskBtn: {disabled: false, text: 'Check Desk'},
      nightstandBtn: {disabled: false, text: 'Open Nightstand Drawer'},
      bedBtn: {disabled: false, text: 'Look Under Bed'},
      bossBtn: {disabled: false, text: 'Challenge Boss'},
      goToDesk: () => {
        // here we add the relevant narrative text to the active narrative array
        this.state.activeNarrative.push(this.state.text.deskText);
        // set deskBtn disabled so it's greyed out
        this.setState({deskBtn: {disabled: true, text: 'Check Desk' }});
      },
      goToNightstand: function() {
        // here we add the relevant narrative text to the active narrative array
        this.state.activeNarrative.push(this.state.text.nightstandText);
        // set nightstandBtn disabled so it's greyed out
        this.setState({nightstandBtn: {disabled: true, text: 'Open Nightstand Drawer'}});
      },
      goToBed: function() {
        // here we add the relevant narrative text to the active narrative array
        this.state.activeNarrative.push(this.state.text.bedText);
        // set bedBtn disabled so it's greyed out
        this.setState({bedBtn: {disabled: true, text: 'Look Under Bed'}});
      },
      challengeBoss: function() {
        // here we add the relevant narrative text to the active narrative array
        this.state.activeNarrative.push(this.state.text.bossChallengeText);
        // set bedBtn disabled so it's greyed out
        this.setState({bossBtn: {disabled: true, text: 'Challenge Boss'}});
      },
      challengeCompleted: function() {
        // here we add the relevant narrative text to the active narrative array
        this.state.activeNarrative.push(this.state.text.completionText);
        // we also need to add 28 keys to the player's total keys
        this.setState({keysCollected: this.state.keysCollected + 28});
        // finally upon completion, change the interactive container back to the page with the 3 buttons ---the clicked button should be unclickable from other function.
      },
      bossChallengeCompleted: function() {
        // here we add the relevant narrative text to the active narrative array
        this.state.activeNarrative.push(this.state.bossDefeatText);
        // we also need to redirect the player to the winner screen
      },
      toggleHidden: function() {
        this.setState({isHidden: false});
      },
      challengeActive: true,
      challengePrompt: 'Your first challenge:',
      startingCode: 'function test (params) {}',
      challengeResponseText: 'You did it!!!',
      submitTest: function(code) {
        // console.log(`submitTest: submitting code to web worker, sending datatype: ${typeof code}.\nCode to submit: ${code}`);
        // console.log(myWorker);
        myWorker.postMessage({ code:code, challenge: 1 })
      }
    }
    this.state.goToDesk = this.state.goToDesk.bind(this);
    this.state.goToBed = this.state.goToBed.bind(this);
    this.state.goToNightstand = this.state.goToNightstand.bind(this);
    this.state.challengeBoss = this.state.challengeBoss.bind(this);
    this.state.challengeCompleted = this.state.challengeCompleted.bind(this);
    this.state.bossChallengeCompleted = this.state.bossChallengeCompleted.bind(this);
    this.state.submitTest = this.state.submitTest.bind(this);
    this.state.toggleHidden = this.state.toggleHidden.bind(this);
    myWorker.onmessage = function (e) {
      console.log( e.data );
      console.log('Message received from worker');
      // DEMO: just change the url on success or failure of one challenge
      if (e.data === 'yes') window.URL('/win.html');
      else window.URL('/lose.html');
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
