onmessage = function (e) {
  console.log('Message received from main script.....00000000......');
  console.log(e.data);
  console.log(typeof e.data);
  eval(e.data);
  
  wobbegong();

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



  postMessage("HELLO WORLD!");

}