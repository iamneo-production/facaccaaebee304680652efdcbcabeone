// JavaScript logic for the Tic Tac Toe game
let currentPlayer = 'X';
let gameBoard = Array(9).fill('');
let gameActive = true;

const resultContainer = document.querySelector('.result');
const resetButton = document.querySelector('.reset-btn');
const buttons = document.querySelectorAll('.btn');

function checkWinner() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            resultContainer.textContent = `Player ${gameBoard[a]} Won 🎉`;
            resultContainer.classList.add('player-x-turn');
            resetButton.disabled = false;
        }
    }

    if (!gameBoard.includes('') && gameActive) {
        gameActive = false;
        resultContainer.textContent = "It's a draw!";
        resetButton.disabled = false;
    }
}

function makeMove(index) {
    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        buttons[index].textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        resultContainer.textContent = `Player ${currentPlayer} Turn`;
        resultContainer.classList.remove('player-x-turn');
        checkWinner();
    }
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = Array(9).fill('');
    gameActive = true;
    resultContainer.textContent = "Player X Turn";
    buttons.forEach(button => {
        button.textContent = '';
    });
    resetButton.disabled = true;
    resultContainer.classList.remove('player-x-turn');
}
