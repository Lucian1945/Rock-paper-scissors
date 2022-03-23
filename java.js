//consts

let playerScore=0
let computerScore=0
const buttons = document.querySelectorAll('input')

//reset game
function stopgame(){
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

//computer choice
function computerPlay(){
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

//the game running

function play (answerPlayer){
    let answerCPU = computerPlay()
    let result = ""

    if ((answerPlayer == 'rock' && answerCPU =='scissors') ||
       (answerPlayer == 'scissors' && answerCPU == 'paper') ||
       (answerPlayer =='paper' && answerCPU=='rock')) {

        playerScore += 1
        result = ('Winner ' + answerPlayer + ' beats ' + answerCPU 
        + "<br><br>Player Score: " + playerScore + "<br>Computer Score: " + computerScore)

        if (answerPlayer == 5) {
            result += '<br><br> You Win!'
            stopgame()
        }
    }
    else if (answerPlayer == answerCPU) {
        result = ('Tie you both chose ' + answerPlayer
        + "<br><br>Player Score: " + playerScore + "<br>Computer Score: " + computerScore)
    }
    else {
        computerScore += 1
        result = ('Loser ' + answerCPU + ' beats ' + answerPlayer
        + "<br><br>Player Score: " + playerScore + "<br>Computer Score: " + computerScore)
        
        if(computerScore ==5) {
            result += '<br><br>I won the game! Try again'
            stopgame()
        }
    }
    document.getElementById('result').innerHTML= result
    return
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        play(button.value)
    })

})
