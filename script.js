let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('resetBtn');

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {
    for (const pattern of winningPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            alert(`${currentPlayer} wins!`);
            return;
        }
    }

    if (!gameBoard.includes('')) {
        gameActive = false;
        alert("It's a tie!");
    }
}

function handleClick(event) {
    const cellIndex = event.target.dataset.index;

    if (gameBoard[cellIndex] || !gameActive) return;

    gameBoard[cellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;

    checkWinner();

    // Switch the player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;

    cells.forEach(cell => {
        cell.textContent = '';
    });
}

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

resetButton.addEventListener('click', resetGame);
