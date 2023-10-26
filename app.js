let maximum = parseInt(prompt("Enter a max number"))

while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number"))
}

const targetNum = Math.floor(Math.random() * maximum) + 1
console.log(targetNum)

let guess = parseInt(prompt("Enter your first guess!"))
let attempts = 1

while (parseInt(guess) !== targetNum) {
    if (guess === 'q' || guess === 'quit') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too High! Try Again...")
    } else {
        guess = prompt("Too Low! Try Again...")
    }
}
console.log(`You got it! It took you ${attempts} guesses bitch.`)