function initGameState(selectedLevel) {
    gameState.minRange = levelDict[selectedLevel].range[0];
    gameState.maxRange = levelDict[selectedLevel].range[1];
    // binary search: maxTries = log(base2)(maxRange-minrange)
    gameState.maxTries = Math.ceil(Math.log2(gameState.maxRange - gameState.minRange));

    gameState.machineNumber = Math.round(Math.random() *
        (gameState.maxRange - gameState.minRange) +
        gameState.minRange);
}

function changeLevel(levelName) {
    dom.selectLevelTab.classList.add('hidden');
    dom.dipslayLevel.classList.add('hidden');
    dom.dipslayLevel.classList.remove('hidden');

};

function displayFinished(results) {
    dom.playGround.classList.add('hidden');
    dom.endGame.classList.remove("hidden");
    dom.firstEnter.classList.add('hidden');
    dom.btnNewGame.classList.remove("hidden");
}
/* -------------------------------------------------------------------------- */
/*                          Events handlers functions                         */
/* -------------------------------------------------------------------------- */
function startPlay(e) {
    const selectedLevel = dom.selectLevelInput.value;
    console.log(`selectedLevel: ${selectedLevel}`);

    initGameState(selectedLevel);

    const msg = `You are playing level ${levelDict[selectedLevel].name}`;

    console.dir(gameState);
    console.dir(msg);

}

/* -------------------------------------------------------------------------- */
/*                              Gloabal Variables                             */
/* -------------------------------------------------------------------------- */
const levelDict = {
    'level1': {
        'range': [1, 10],
        'name': 'Easy',
    },
    'level2': {
        'range': [1, 50],
        'name': 'Medium'
    },
    'level3': {
        'range': [1, 100],
        'name': 'Advanced'
    },
}

let dom = {
    btnPlay: document.querySelector("#btnPlay"),
    btnGuess: document.querySelector(".btnGuess"),
    btnReset: document.querySelector(".btnReset"),
    btnNewGame: document.querySelector(".btnNewGame"),
    playGround: document.querySelector(".playGround"),
    results: document.querySelector(".results"),
    userNumberInput: document.querySelector(".userNumber"),
    selectLevelTab: document.querySelector(".selectLevel"),
    guessTheNumberText: document.querySelector(".guessTheNumberText"),
    selectLevelText: document.querySelector(".selectLevelText"),
    countTries: document.querySelector(".countTries"),
    endGame: document.querySelector(".endGame"),
    dipslayLevel: document.querySelector(".dipslayLevel"),
    firstEnter: document.querySelector(".firstEnter"),
    endText: document.querySelector(".endText"),
};
let gameVariables = {
    randomNumber: undefined,
    level: undefined,
    minRange: undefined,
    maxRange: undefined,
    userNumber: undefined,

};


/* -------------------------------------------------------------------------- */
/*                               Events handlers                              */
/* -------------------------------------------------------------------------- */
// click on btnStartPlay
dom.btnPlay.addEventListener('click', btnPlay);


// click on btnResetGame

// click on btnGuess
// same, when user press Enter in user-guess input

// click on btnStartNewGame

// on page load
window.onload = (event) => {
    changeLevel();
};