const startButton = document.querySelector('.start')
const input = document.querySelector('.input');
const mainBoard = document.querySelector('.board')
const startPage = document.querySelector('.start-page')
const playerName = document.querySelector('.player-name')
const startGame = (e) => {
    // e.preventDefault();
    if (input.value === "") {
        input.placeholder = "Username can not be blank"
        input.classList.add("changeInputColor");
        input.classList.remove('active');

    } else if (input.value !== "") {
        mainBoard.classList.remove('innactive');
        startPage.classList.add('innactive');
        playerName.innerHTML = input.value

    }
}
const removeClassesStartButton = () => {
    input.placeholder = "username"
    input.classList.remove("changeInputColor");
    input.classList.add("active");



}

startButton.addEventListener('click', startGame)
input.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        startGame()
    }
})

input.addEventListener('keyup', () => {
    if (input.value !== "") {
        removeClassesStartButton();
    }
})
input.addEventListener('mouseenter', removeClassesStartButton)

const packsOfCards = ['2C', '2D', '2H', '2S', '3C', '3D', '3H', '3S', '4C', '4D', '4H', '4S', '5C', '5D', '5H', '5S', '6C', '6D', '6H', '6S', '7C', '7D', '7H', '7S', '8C', '8D', '8H', '8S', '9C', '9D', '9H', '9S', '10C', '10D', '10H', '10S', 'JC', 'JD', 'JH', 'JS', 'QC', 'QD', 'QH', 'QS', 'KC', 'KD', 'KH', 'KS', 'AC', 'AD', 'AH', 'AS']



const playerCardsBoard = document.querySelector('.player-cards')
const pointsPlayer = document.querySelector('.player-points')
const computerCardsBoard = document.querySelector('.croupier-cards')
const pointsComputer = document.querySelector('.croupier-points')
const standButton = document.querySelector('.stand')
const hitButton = document.querySelector('.hit');



const backOfCards = ['blue_back', 'Red_back'];

let cardIndex;

const drawCard = () => {
    cardIndex = Math.floor(Math.random() * packsOfCards.length)
    drawingCard = packsOfCards[cardIndex];
}
const playerCards = [];

const playerCard = () => {
    drawCard();
    playerCards.push(packsOfCards[cardIndex])
    const playerNewCard = document.createElement('div');
    playerNewCard.className = "card";
    playerNewCard.style.backgroundImage = `url(Images/Cards/${packsOfCards[cardIndex]}.jpg)`
    playerCardsBoard.appendChild(playerNewCard);
    packsOfCards.splice(cardIndex, 1)
    playerPoints()
    pointsPlayer.innerText = playerTotalPoints;
}

let playerTotalPoints;

const playerPoints = () => {
    playerTotalPoints = 0;
    for (let i = 0; i < playerCards.length; i++) {
        switch (playerCards[i]) {
            case "2C":
            case "2D":
            case "2H":
            case "2S":
                point = 2;
                break;
            case "3C":
            case "3D":
            case "3H":
            case "3S":
                point = 3;
                break;
            case "4C":
            case "4D":
            case "4H":
            case "4S":
                point = 4;
                break;
            case "5C":
            case "5D":
            case "5H":
            case "5S":
                point = 5;
                break;
            case "6C":
            case "6D":
            case "6H":
            case "6S":
                point = 6;
                break;
            case "7C":
            case "7D":
            case "7H":
            case "7S":
                point = 7;
                break;
            case "8C":
            case "8D":
            case "8H":
            case "8S":
                point = 8;
                break;
            case "9C":
            case "9D":
            case "9H":
            case "9S":
                point = 9;
                break;
            case "10C":
            case "10D":
            case "10H":
            case "10S":
                point = 10;
                break;
            case "JC":
            case "JD":
            case "JH":
            case "JS":
                point = 10;
                break;
            case "QC":
            case "QD":
            case "QH":
            case "QS":
                point = 10;
                break;
            case "KC":
            case "KD":
            case "KH":
            case "KS":
                point = 10;
                break;
            case "AC":
            case "AD":
            case "AH":
            case "AS":
                point = 10;
                break;
        }
        playerTotalPoints += point;
    }
}
let flag = false;
const computerCards = [];

const computerCard = () => {
    drawCard();
    computerCards.push(packsOfCards[cardIndex])
    const computerNewCard = document.createElement('div');
    computerNewCard.className = "card";
    computerCardsBoard.appendChild(computerNewCard);
    computerPoints()
    computerNewCard.style.backgroundImage = `url(Images/Cards/${packsOfCards[cardIndex]}.jpg)`
    packsOfCards.splice(cardIndex, 1)
    if (flag === false && computerCards.length === 2) {
        computerCardsBoard.lastChild.style.backgroundImage = `url(Images/Cards/Red_back.jpg)`
    }


}




let computerTotalPoints;

const computerPoints = () => {
    computerTotalPoints = 0;

    for (let i = 0; !flag ? i < computerCards.length - 1 : i < computerCards.length; i++) {
        switch (computerCards[i]) {
            case "2C":
            case "2D":
            case "2H":
            case "2S":
                point = 2;
                break;
            case "3C":
            case "3D":
            case "3H":
            case "3S":
                point = 3;
                break;
            case "4C":
            case "4D":
            case "4H":
            case "4S":
                point = 4;
                break;
            case "5C":
            case "5D":
            case "5H":
            case "5S":
                point = 5;
                break;
            case "6C":
            case "6D":
            case "6H":
            case "6S":
                point = 6;
                break;
            case "7C":
            case "7D":
            case "7H":
            case "7S":
                point = 7;
                break;
            case "8C":
            case "8D":
            case "8H":
            case "8S":
                point = 8;
                break;
            case "9C":
            case "9D":
            case "9H":
            case "9S":
                point = 9;
                break;
            case "10C":
            case "10D":
            case "10H":
            case "10S":
                point = 10;
                break;
            case "JC":
            case "JD":
            case "JH":
            case "JS":
                point = 10;
                break;
            case "QC":
            case "QD":
            case "QH":
            case "QS":
                point = 10;
                break;
            case "KC":
            case "KD":
            case "KH":
            case "KS":
                point = 10;
                break;
            case "AC":
            case "AD":
            case "AH":
            case "AS":
                point = 10;
                break;
        }


        computerTotalPoints += point;
        pointsComputer.innerText = computerTotalPoints;
    }
}

const inputSetStake = document.querySelector('.set-stake');
const setStakeButton = document.querySelector('.setStakeButton');
const setStakeInfo = document.querySelector('.set-stake-info');
const balanceInfo = document.querySelector('.balance span');
const stakeInfo = document.querySelector('.stake span');
const wonInfo = document.querySelector('.won span')



let stake = 0;
let balance = 100;
let won = 0;
let stakeFlag = false;
const playGame = () => {
    if (inputSetStake.value === "" || inputSetStake.value <= 0) {
        setStakeAnimation()
        setStakeInfo.innerText = "Please set stake below"
    } else if (inputSetStake.value !== "" && inputSetStake.value > 0) {
        stake = inputSetStake.value;
        if (stake > balance) {
            setStakeAnimation()
            setStakeInfo.innerText = "balance too low, try again"
            return false;
        }
        stakeInfo.innerText = stake;
        inputSetStake.value = "";
        setTimeout(playerCard, 500)
        setTimeout(computerCard, 800)
        setTimeout(playerCard, 1100)
        setTimeout(computerCard, 1400)
        setStakeButton.classList.add('innactive')
        setStakeInfo.classList.add("innactive");
        inputSetStake.classList.add('innactive')
        balance -= stake;
        changeBalance()
        stakeFlag = true;

    }

}



const setStakeAnimation = () => {
    setStakeInfo.style.animation = "setStake linear 1s infinite, shakeSetStake 0.4s linear 3"
    const removeSetStakeAnimation = () => {
        setStakeInfo.style.animation = "setStake linear 1s infinite"
    }
    setTimeout(removeSetStakeAnimation, 1200)

}

const changeBalance = () => {
    balanceInfo.innerText = `$ ${balance}`
}

const standGame = () => {
    if (stakeFlag === true) {
        flag = true;
        computerCardsBoard.lastChild.style.backgroundImage = `url(Images/Cards/${computerCards[1]}.jpg)`
        computerPoints()

        const addComputerCard = () => {
            setTimeout(computerCard, 500)
            computerPoints()
        }

        const checkComputerPoints = () => {
            if (computerTotalPoints < 17) {
                addComputerCard()
                setTimeout(checkComputerPoints, 500)
            }
        }
        checkComputerPoints()
        setTimeout(checkGameResults, 2000);
    } else {
        standButton.addEventListener('click', standGame, {
            once: true
        })
    }
}


let hitFlag = false;
let doubleFlag = false;

const hitGame = () => {

    if ((doubleFlag === true && playerCards.length < 3) || (stakeInfo.innerText !== "" && playerTotalPoints < 21 && flag === false && doubleFlag === false)) {
        playerCard()
        setTimeout(checkGameResults, 1500)
        hitFlag = true;
        if (doubleFlag === true && playerTotalPoints <= 21) {
            setTimeout(standGame, 1500)
        }
    }
}


changeBalance()
setStakeButton.addEventListener('click', playGame)
standButton.addEventListener('click', standGame, {
    once: true
})
hitButton.addEventListener('click', hitGame)

const showResult = document.querySelector('.show-result')
const showResultText = document.querySelector('.last-game-result')

const checkGameResults = () => {
    if (playerTotalPoints === 21 && flag === false) {
        // ++won
        // wonInfo.innerText = won;
        showResultText.innerText = "You won"
        showResult.classList.remove('innactive')
        wonMoney(1.5)
    } else if (playerTotalPoints > 21 && flag === false) {
        showResultText.innerText = "You lost"
        showResult.classList.remove('innactive')
    } else if (computerTotalPoints > 21 && flag === true) {
        showResultText.innerText = "You won"
        showResult.classList.remove('innactive')
        wonMoney(2)
    } else if (computerTotalPoints === 21 && flag === true) {
        showResultText.innerText = "You lost"
        showResult.classList.remove('innactive')
    } else if (computerTotalPoints < 21 && flag === true) {
        if (playerTotalPoints > computerTotalPoints && flag === true) {
            showResultText.innerText = "You won"
            showResult.classList.remove('innactive')
            wonMoney(2)
        } else if (playerTotalPoints === computerTotalPoints && flag === true) {
            showResultText.innerText = "Draw"
            showResult.classList.remove('innactive')
        } else if (playerTotalPoints < computerTotalPoints && flag === true) {
            showResultText.innerText = "You lost"
            showResult.classList.remove('innactive')
        }
    }
}


const newGameButton = document.querySelector('.new-game')

const startAnotherGame = () => {
    showResult.classList.add('innactive')

    setStakeButton.classList.remove('innactive');
    setStakeInfo.classList.remove("innactive");
    inputSetStake.classList.remove('innactive');

    computerCards.splice(0, computerCards.length);
    playerCards.splice(0, playerCards.length);
    packsOfCards.splice(0, packsOfCards.length)
    packsOfCards.push('2C', '2D', '2H', '2S', '3C', '3D', '3H', '3S', '4C', '4D', '4H', '4S', '5C', '5D', '5H', '5S', '6C', '6D', '6H', '6S', '7C', '7D', '7H', '7S', '8C', '8D', '8H', '8S', '9C', '9D', '9H', '9S', '10C', '10D', '10H', '10S', 'JC', 'JD', 'JH', 'JS', 'QC', 'QD', 'QH', 'QS', 'KC', 'KD', 'KH', 'KS', 'AC', 'AD', 'AH', 'AS')

    // for (let i = 0; i < playerCardsBoard.childNodes.length; i++) {
    //     playerCardsBoard.childNodes[i].remove()
    // }

    document.querySelectorAll('.croupier-cards div').forEach(div => div.parentNode.removeChild(div));

    document.querySelectorAll('.player-cards div').forEach(div => div.parentNode.removeChild(div));

    computerTotalPoints = 0;
    playerTotalPoints = 0;

    pointsComputer.innerText = '';
    pointsPlayer.innerText = '';

    stake = 0;
    stakeInfo.innerText = '';

    changeBalance()

    won = 0;


    wonInfo.innerText = ""

    flag = false;
    stakeFlag = false;
    hitFlag = false;
    doubleFlag = false;

    standButton.addEventListener('click', standGame, {
        once: true
    })
    doubleButton.addEventListener('click', doubleStake, {
        once: true
    })
}
newGameButton.addEventListener('click', startAnotherGame)

const doubleButton = document.querySelector('.double-stake')

const doubleStake = () => {
    if (stakeFlag === true && flag === false && hitFlag === false) {
        if (balance >= stake) {
            balance -= stake;
            stake *= 2;
            stakeInfo.innerText = stake;
            doubleFlag = true;
            changeBalance()
        } else {
            alert("Balance too low")
        }
    }
}

const wonMoney = (multiplier) => {
    stake *= multiplier;
    won += stake;
    wonInfo.innerText = won;
    balance += won;

}

doubleButton.addEventListener('click', doubleStake, {
    once: true
})

//jak trafię 21 po double i hit to od razu wygrywam, komputer nie sprawdza kart