function delayedGreet(name, callback) {
  setTimeout(() => {
    console.log(`Hello, ${name}!`);
    callback();
  }, 1000);
}

function sayGoodbye() {
  console.log("Goodbye!");
}

delayedGreet("Bob", sayGoodbye);
