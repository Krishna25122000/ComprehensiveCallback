function greet(name, callback) {
  // this is the function which takes two parameter name and a function(callback) and call that function
  console.log(`Hello, ${name}!`);
  callback();
}

function sayGoodbye() {
  // this is the function which prints "goodbye" and passed by a function call
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye); //here we pass two arguments first is name and second is the function
