const prompt = require("prompt-sync")();
let namer = prompt("Welcome to FeedMyDog App. Please enter your name ");
let dog = prompt(`${namer} please enter the name of your dog `);
console.log("");

while (true) {
  let goal = parseInt(prompt(`Please enter your set goal `));

  let entry = prompt(
    "Please press Y to continue or R to reset your Goal. Otherwise press Q to quit "
  ).toUpperCase();

  if (isNaN(goal)) {
    console.log("Please enter a number");
  } else if (entry === "Q") {
    console.log(`It saddens my heart to see you go ${namer}`);
    break;
  } else if (entry === "R") {
    continue;
  } else if (entry === "Y") {
    while (true) {
      console.log("");
      console.log(`Your set feeding goal  is ${goal}kilos!`);
      console.log("");
      let start = parseInt(
        prompt(`How much would you like to feed ${dog} now? `)
      );

      if (isNaN(start)) {
        console.log("Please enter a number");
        continue;
      } else if (goal <= 0) {
        console.log("You have achieved your goal");
        break;
      } else if (start >= goal) {
        console.log(`Your start is impossible`);
        continue;
      }

      goal = goal - start;
      console.log(
        `Awesome ${namer}..... ${dog} has ${goal}kilos left. Let's do this`
      );
    }
    break;
  }
  break;
}
