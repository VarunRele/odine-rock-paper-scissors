getComputerChoice = () => {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose! Paper beats Rock'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Rock beats Scissors'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper beats Rock'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lose! Scissors beats Paper'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win! Scissors beats Paper'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Rock beats Scissors'
    } else {
        return "It's a tie"
    }
}

getPlayerChoice = () => {
    let value = prompt("Select \n1.Rock\n2.Paper\n3.Scissors")
    if (value === '1') {
        return 'rock'
    } else if (value === '2') {
        return 'paper'
    } else if (value === '3') {
        return 'scissors'
    }
}

game = () => {
    for(let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice()
        let playerSelection = getPlayerChoice()
        console.log("Computer "+ computerSelection)
        console.log("Player " + playerSelection)
        console.log(playRound(playerSelection, computerSelection))
    }
}

game()