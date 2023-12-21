import inquirer from "inquirer";

// random number 1 to 20
const systemGeneratedNo = Math.floor(Math.random() * 20) +1;

const {userGuess}: {userGuess: number } = await inquirer.prompt({
    type:"number",
    name:"userGuess",
    message:"Guess the number (between 1 to 20):"
});


if (userGuess === systemGeneratedNo) {
    console.log("Great! you guessed it right.");
}else{
    console.log(`ohh NO! the correct number is ${systemGeneratedNo}.Better luck next time.`);
}
