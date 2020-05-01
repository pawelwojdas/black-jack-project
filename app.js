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
    getCards()
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


const backOfCards = ['blue_back', 'Red_back'];
const packsOfCards = [];
const getCards = () => {
    const cardsValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q'];
    const suits = ['C', 'D', 'H', 'S'];
    for (let i = 0; i < cardsValues.length; i++) {
        for (let j = 0; j < suits.length; j++) {
            packsOfCards.push(cardsValues[i] + suits[j])
        }
    }
}


const playerCardsBoard = document.querySelector('.player-cards')
const pointsPlayer = document.querySelector('.player-points')
const computerCardsBoard = document.querySelector('.croupier-cards')
const pointsComputer = document.querySelector('.croupier-points')
const standButton = document.querySelector('.stand')
const hitButton = document.querySelector('.hit');

let cardIndex;
let playerTotalPoints;
let computerTotalPoints;

const drawCard = () => {
    cardIndex = Math.floor(Math.random() * packsOfCards.length)
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
    pointsCounter(playerCards, pointsPlayer)
}

let flag = false;
const computerCards = [];

const computerCard = () => {
    drawCard();
    computerCards.push(packsOfCards[cardIndex])
    const computerNewCard = document.createElement('div');
    computerNewCard.className = "card";
    computerCardsBoard.appendChild(computerNewCard);
    pointsCounter(computerCards, pointsComputer)
    computerNewCard.style.backgroundImage = `url(Images/Cards/${packsOfCards[cardIndex]}.jpg)`
    packsOfCards.splice(cardIndex, 1)
    if (flag === false && computerCards.length === 2) {
        computerCardsBoard.lastChild.style.backgroundImage = `url(Images/Cards/Red_back.jpg)`
    }
}

const pointsCounter = (cards, textPoints) => {
    let totalPoints = 0;

    for (let i = 0; cards === playerCards ? i < cards.length : !flag ? (i < cards.length - 1) : (i < cards.length); i++) {
        switch (true) {
            case cards[i].includes('2'):
                point = 2;
                break;
            case cards[i].includes('3'):
                point = 3;
                break;
            case cards[i].includes('4'):
                point = 4;
                break;
            case cards[i].includes('5'):
                point = 5;
                break;
            case cards[i].includes('6'):
                point = 6;
                break;
            case cards[i].includes('7'):
                point = 7;
                break;
            case cards[i].includes('8'):
                point = 8;
                break;
            case cards[i].includes('9'):
                point = 9;
                break;
            case cards[i].includes('10'):
            case cards[i].includes('J'):
            case cards[i].includes('Q'):
            case cards[i].includes('K'):
                point = 10;
                break;
            case cards[i].includes('A'):
                point = 11;
                break;
        }
        totalPoints += point;
        textPoints.innerText = totalPoints;

    }
    if (cards === playerCards) {
        playerTotalPoints = totalPoints;
    } else if (cards == computerCards) {
        computerTotalPoints = totalPoints;
    }
}

const checkAce = () => {

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
        setTimeout(checkGameResults, 1500)

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
    if (stakeFlag) {
        flag = true;
        computerCardsBoard.lastChild.style.backgroundImage = `url(Images/Cards/${computerCards[1]}.jpg)`
        pointsCounter(computerCards, pointsComputer)

        const addComputerCard = () => {
            setTimeout(computerCard, 500)
            pointsCounter(computerCards, pointsComputer)
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

    if ((doubleFlag && playerCards.length < 3) || (stakeInfo.innerText !== "" && playerTotalPoints < 21 && !flag && !doubleFlag)) {
        playerCard()
        setTimeout(checkGameResults, 1500)
        hitFlag = true;
        if (doubleFlag && playerTotalPoints <= 21) {
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

    const results = (result) => {
        showResultText.innerText = result;
        showResult.classList.remove('innactive')
    }
    if (playerTotalPoints === 21 && !flag && !doubleFlag && (!hitFlag || playerCards.length > 2)) {
        results("You won")
        wonMoney(1.5)
    } else if (playerTotalPoints > 21 && !flag) {
        results("You lost")
    } else if (computerTotalPoints > 21 && flag) {
        results("You won")
        wonMoney(2)
    } else if (computerTotalPoints === 21 && flag) {
        results("You lost")
    } else if (computerTotalPoints < 21 && flag) {
        if (playerTotalPoints > computerTotalPoints) {
            results("You won")
            wonMoney(2)
        } else if (playerTotalPoints === computerTotalPoints) {
            results("Draw")
            wonMoney(1)
        } else if (playerTotalPoints < computerTotalPoints) {
            results("You lost")

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
    getCards();

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