let i = 0
let win = 0
const btns = document.querySelectorAll("button")
const comp = document.querySelector(".comp")
const player = document.querySelector(".player")
const result = document.querySelector(".result")
const score = document.querySelector(".score")

getComputerChoice = () => {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return ['You Lose! Paper beats Rock', 0]
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return ['You Win! Rock beats Scissors', 1]
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return ['You Win! Paper beats Rock', 1]
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return ['You Lose! Scissors beats Paper', 0]
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return ['You Win! Scissors beats Paper', 1]
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return ['You Lose! Rock beats Scissors', 0]
    } else {
        return ["It's a tie", 0]
    }
}

getPlayerChoice = () => {
    // let value = prompt("Select \n1.Rock\n2.Paper\n3.Scissors")
    // if (value === '1') {
    //     return 'rock'
    // } else if (value === '2') {
    //     return 'paper'
    // } else if (value === '3') {
    //     return 'scissors'
    // }
}

game = (playerSelection) => {
    let computerSelection = getComputerChoice()
    // let playerSelection = getPlayerChoice()
    comp.innerText = "Computer: "+ computerSelection
    player.innerText = "Player " + playerSelection
    let p = playRound(playerSelection, computerSelection)
    result.innerText = p[0]
    i += 1
    win += p[1]
    score.innerText = `You have won: ${win}/${i} games`
}


btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        game(e.target.innerText.toLowerCase())
    })
})

// game()