import React, { Component } from "react";

const DM = React.createContext();

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
let val;
switch (e.data.challenge) {
  case 1: //MVP ... they need to write a function that will find an element in an array and return the index
    passed = true; //assuming they are passing

try {
  val = findInArray(['a', 'b', 'c'], 'b');
} catch (e) {
  postMessage('no');
}

    if ( val !== 1) {
      passed = false;
      break;
    }

    try {
      val = findInArray([1, 2, 3], 1);
    } catch (e) {
      postMessage('no');
    }
    if ( val !== 0) {
      passed = false;
      break;
    }

    break;
    
  case 2:
    passed = true;

    try {
      val = writeStr();
    } catch (e) {
      postMessage('no');
    }
    if (val !== 'wilbur') {
      passed = false;
      break;
    }

    break;

  case 3:
    passed = true;
    
    try {
      val = addThree(5);
    } catch (e) {
      postMessage('no');
    }
    if (val !== 8) {
      passed = false;
      break;
    }

  default:
    break;
}

let msg = passed ? 'yes' : 'no';
postMessage(msg);}`
]);

var blobURL = window.URL.createObjectURL(blob);
var myWorker = new Worker(blobURL);

let seconds = 0;
const incrementTime = () => {
  seconds++;
  this.timerOn = false;
};

const timer = () => {
  setTimeout(() => {incrementTime(); timer()}, 1000);
  this.timerOn = true;
  // console.log(seconds);
};

class Timer{
  constructor(seconds) {
    this.seconds = timer();
    if (this.timerOn === true) {
      return;
    }
  }
};

class DungeonMaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyo: 0,
      gameStarted: false,
      checkpoint: [0, 0, [0, 0, 0]], // current challenge, current level, array of completed challenges
      isHidden: true,
      keysCollected: 0,
      text: {
        introText:
          "You wake up to find yourself in a dimly lit room. Wondering where you are you start to explore your small surroundings...",
        deskText:
          "You head to the desk and search amongst the scattered sheets of paper: ",
        nightstandText:
          "Wondering what might be inside you open the nightstand drawer: ",
        bedText:
          "Hoping no monsters attack, you cautiously peek under the bed: ",
        completionText:
          "Congratulations on completion of the challenge. You received a key!",
        bossChallengeText:
          "You have collected all the keys to unlock the door. Time for the Boss battle!",
        bossDefeatText:
          "CONGRATULATIONS!!! You have succesfully defeated the Boss Challenge and ESCAPED!!!"
      },


      activeNarrative: ['You wake up to find yourself in a dimly lit room. Wondering where you are you start to explore your small surroundings.'],


      promptText: '',
      deskBtn: {disabled: false, text: 'Check Desk'},
      nightstandBtn: {disabled: false, text: 'Open Nightstand Drawer'},
      bedBtn: {disabled: false, text: 'Look Under Bed'},
      bossBtn: {disabled: false, text: 'Challenge Boss'},
      


      timer: () => {
        setTimeout(() => {this.state.incrementTime(); this.state.timer()}, 1000)
      },
  

      goToDesk: () => {
        this.state.keyo += 1;
        this.state.checkpoint[0] = 1;
        // start the game
        this.state.gameStarted = true;
        // here we add the relevant narrative text to the active narrative array
        this.state.activeNarrative.unshift(this.state.text.deskText);

        this.setState({
          challengePrompt:
            "Write a function that accepts an array and a value as parameters. It will return the index of the value in the array"
        });

        // reset challengeResponseText to an empty string at beginning of challenge
        this.setState({ challengeResponseText: "" });

        // set deskBtn disabled so it's greyed out

        this.setState({deskBtn: {disabled: true, text: 'Check Desk' }});

        //set timer

        const startTime = new Timer(0);
        this.setState({
          startingCode: `function findInArray (arr, elem) {
// your code here ♥
            
}`,
        });

      },
      goToNightstand: function() {
        this.state.keyo += 1;
        this.state.checkpoint[0] = 2;

        // start the game

        this.state.gameStarted = true;
        this.setState({
          challengePrompt:
            "Write a function that returns the string 'wilbur'."
        });

        // here we add the relevant narrative text to the active narrative array
        this.state.activeNarrative.unshift(this.state.text.nightstandText);
        // reset challengeResponseText to an empty string at beginning of challenge
        this.setState({ challengeResponseText: "" });
        // set nightstandBtn disabled so it's greyed out

        this.setState({nightstandBtn: {disabled: true, text: 'Open Nightstand Drawer'}});
        const startTime = new Timer(0);
        
        this.setState({startingCode: `function writeStr() {
// 🍦🍦🍦
          
}`});
      },
      goToBed: function() {
        this.state.keyo += 1;
        this.state.checkpoint[0] = 3;

        // start the game
        this.state.gameStarted = true;
        this.setState({
          challengePrompt:
            "Write a function that accepts a number as a parameter. It will return the the sum of the number and three."
        });
        this.setState({startingCode: `function addThree(num) {
// 🌮🌮🌮
          
}`});

        // here we add the relevant narrative text to the active narrative array
        this.state.activeNarrative.unshift(this.state.text.bedText);
        // reset challengeResponseText to an empty string at beginning of challenge
        this.setState({ challengeResponseText: "" });
        // set bedBtn disabled so it's greyed out

        this.setState({bedBtn: {disabled: true, text: 'Look Under Bed'}});
        const startTime = new Timer(0);
      },
      challengeBoss: function() {
        this.state.keyo += 1;
        this.state.checkpoint[0] = 4;
        this.setState({
          challengePrompt:
            "Write a function that defeats the boss."
        });
        this.setState({startingCode: `function saveWilbur(num) {
😈🔥 😈😈😈🔥😈☄️😈😈 👹😈😈🔥😈😈😈😈👹😈😈😈😈😈️️️☄️
😈😈👹😈   😈😈 👹😈☄️😈🔥   😈 😈😈😈👹😈😈😈🔥😈☄️
🆘🆘🆘Ḁ̷̢̧̨̹̱̫̠̥̔́͗̑̓̀͜H̶̨͉̩̟͑̈̓͌͑̀̾͋̇̂̃H̷̰̰̫̖̜͉͎̹̬̐̉͒́̉̓̔̎̌̕̚͠͠H̷̙̀͆́̐̑̎̍͌̃̊̕̕͠H̸͕͙̲͈͕̩̓̕H̸͇͕̿̈̑̈́̎͂̿̆̓̓͘̕͝ͅḨ̵̛͍̙̜̣̗̰̰̤̖͖͓̱͕͉̊̌̐̄̈́͌͒̉̓͘͠H̶̱̣̖̯̱͎̖̮̠̜͎̪͛͑͋ͅͅḤ̵̡̢̫̦̠͔̬̹̅̑͌̀̈́͑͒͑̊̍͐͘͝ͅ ̶̄̍P̵̨̡̢͓̙̯̼̼̳̖̦͍̆̏́͗͜͠ͅL̶̢̛̹̱̤̦̼̱̖̘̱̰͆̽͊̌̋̚É̷̠̮̹͓͍͒̈̔A̸̻̙̽Ṡ̷̮͍͎̫̟̺̝͍̣̘̮̜͋Ë̵͍̘̟͔̼̝͎̳̯̰͍́̊͌̋̔̎͆̂̊͒̚ ̷͐͘H̵̭̻̪͈̱̫̙̦͓̰̀̈́̇̂̀͑͛̒̾͑͂̕͝͝͝ͅĘ̵̨̢̛̲̲̜̖̣̺̥̤͍̔̔͋̀̓͆̂L̴̤̜͉̲̦̎̋̄͒̒̕̕͜P̴̗̞̪̤̫̙̘͇̲̈̐͋̈̆̉̕͜͝ ̵͐͌̏͑͆M̶̠̺̙̏̉͘Ȅ̴̹̤͍̒̔̈́̈́́̃̃̿̃̕̚͝🐶😱🆘🆘🆘
😈😈☄️😈😈😈🔥☄ ️😈 😈👹😈😈 😈🔥😈😈😈👹😈😈️😈🔥😈😈
😈😈🔥☄️😈👹😈😈 😈😈🔥😈   😈😈👹😈😈☄️😈🔥😈😈😈👹😈
}`});
        // here we add the relevant narrative text to the active narrative array
        this.state.activeNarrative.unshift(this.state.text.bossChallengeText);
        // reset challengeResponseText to an empty string at beginning of challenge
        this.setState({ challengeResponseText: "" });
        // set bedBtn disabled so it's greyed out

        this.setState({bossBtn: {disabled: true, text: 'Challenge Boss'}});
        const startTime = new Timer(0);

      },
      bossChallengeCompleted: function() {
        // here we add the relevant narrative text to the active narrative array
        this.state.activeNarrative.unshift(this.state.bossDefeatText);
        // we also need to redirect the player to the winner screen

        //total time
        //how to sum up these values from the different elements of state?
       // this.setState({challengeTime: });
      },
      toggleHidden: function() {
        this.setState({ isHidden: false });
      },
      challengeActive: true,
      challengePrompt: "",
      startingCode: `function findInArray (arr, elem) {
// your code here ♥

}`,
      challengeResponseText: "",

      submitTest: function(code) {
        if (!this.state.checkpoint[2][this.state.checkpoint[0] - 1]) {
        // console.log(`submitTest: submitting code to web worker, sending datatype: ${typeof code}.\nCode to submit: ${code}`);
        // console.log(myWorker);
        if (this.state.gameStarted)
          myWorker.postMessage({ code: code, challenge: this.state.checkpoint[0] });
        }
      },
    };
    
    this.state.goToDesk = this.state.goToDesk.bind(this);
    this.state.goToBed = this.state.goToBed.bind(this);
    this.state.goToNightstand = this.state.goToNightstand.bind(this);
    this.state.challengeBoss = this.state.challengeBoss.bind(this);
    this.state.bossChallengeCompleted = this.state.bossChallengeCompleted.bind(
      this
    );
    this.state.submitTest = this.state.submitTest.bind(this);
    this.state.toggleHidden = this.state.toggleHidden.bind(this);
    myWorker.onmessage = e => {
      //console.log( e.data, "NO!!" );

      if (e.data === 'yes') {
        // look at the checkpoint array, update the index of the current challenge, set it to completed
        this.state.checkpoint[2][this.state.checkpoint[0] - 1] = 1;
       // console.log("made it in!");
        this.state.activeNarrative.unshift(this.state.text.completionText);
        this.setState({keysCollected: this.state.keysCollected + 1});
        if (this.state.keysCollected >= 3) this.state.toggleHidden();
        this.setState({challengeResponseText: 'Nice one!'});
      } else if (e.data === 'no') {
        this.setState({challengeResponseText: 'Try again bud...'});

      }
      //console.log('Message received from worker');
      // DEMO: just change the url on success or failure of one challenge
      // if (e.data === 'yes') window.URL('/win.html');
      // else window.URL('/lose.html');
    };

    // bind in-state functions here
  }

  render() {
    return <DM.Provider value={this.state}>{this.props.children}</DM.Provider>;
  }
}

export { DungeonMaster, DM };
