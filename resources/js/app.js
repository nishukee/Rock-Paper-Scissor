let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p")
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    return choices[Math.floor(Math.random() * 3)];
}

function convertToWord(letter){
    if (letter == "r") return "Rock🪨";
    if (letter == "p")  return "Paper🧻";
    return "Scissors✂️"
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "(user)".fontsize(5).sub();
    const smallComputerWord = "(comp)".fontsize(5).sub();
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallComputerWord} , You WIN! 🔥`;
    document.getElementById(userChoice).classList.add('green-glow')
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow') , 300);
}

function lose(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "(user)".fontsize(5).sub();
    const smallComputerWord = "(comp)".fontsize(5).sub();
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallComputerWord} , You lost... 💩`;
    document.getElementById(userChoice).classList.add('red-glow')
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow') , 300);
}

function draw(userChoice, computerChoice){
    const smallUserWord = "(user)".fontsize(5).sub();
    const smallComputerWord = "(comp)".fontsize(5).sub();
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallComputerWord}, It's a Draw... 🛡️`
    document.getElementById(userChoice).classList.add('gray-glow')
    setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow') , 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game('r') );
    paper_div.addEventListener('click', () => game('p') );
    scissors_div.addEventListener('click', () => game('s') );
}

main();
