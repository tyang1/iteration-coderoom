/**
 * This web worker will evaluate the code that the user enteres for specific challenge
 * 
 * We are expecting the data to be as follows :
 * { code: as a string, challenge: as a number}
 * We'll have multiple challenges in this game
 */

onmessage = function (e) {
  console.log('Message received from main script');
  console.log(e.data);
  // console.log(typeof e.data);
  //eval(e.data);

  
  // wobbegong();

// This is a proof of concept with using eval.
  // eval("function summy (a,b) { return a+b }");
  // ans = summy(1, 7);
  // console.log("ans: ", ans);
  // if (ans === 8) console.log('your function worked!')

console.log(e.data.code);

// may need to do some special parsing
// This eval's the code and defines the function in our scope
let evalRet = eval(e.data.code);
console.log('evalRet: ', evalRet);
// testing
// eval(`function findInArray (arr, ele){
//   for (let i=0; i<arr.length; i++){
//     if (arr[i] === ele) return i;
//   }
// }`)

let passed = true; //assuming they are passing
switch (e.data.challenge) {
  case 1: //MVP ... they need to write a function that will find an element in an array and return the index
    passed = true; //assuming they are passing
    if (findinArray(['a','b','c'], 'b') !== 1) {
      passed = false;
      break;
    }

    if (findinArray([1,2,3], 1) !== 0) {
      passed = false;
      break;
    }

    break;
  case 2:

    break;


  default:
    break;
}

  let msg =  passed ? 'yes' : 'no';
  postMessage(msg);


//   const func = Function(e.data);
//   func();
//   // const func = eval(e.data)();
//   console.log(typeof func);
  
  
// let anotherFunc = Function("for(let i=0; i<10; i++){console.log(i)}");
// console.log('calling another Func');
//   anotherFunc();
  
//   //var workerResult = 'Result: ' + ();
//   console.log('Posting message back to main script');
//   if (func() === 4) postMessage("HELLO WORLD!");



  // postMessage("HELLO WORLD!");

}