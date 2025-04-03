// Initialize variables
let score = 0;
let lives = 5;
let correctColor;
const rgbValueElement = document.getElementById('rgb-value');
const colorButtons = document.querySelectorAll('.color-option');
const scoreElement = document.getElementById('score');
const livesElement = document.getElementById('lives');
const gameOverElement = document.getElementById('game-over');
const finalScoreElement = document.getElementById('final-score');
const replayButton = document.getElementById('replay-btn');

// Array of colors
const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Pick a random color and set up game
function generateGame() {
    // Reset button styles and remove previous event listeners
    colorButtons.forEach(button => {
        button.style.backgroundColor = '';
        button.onclick = null;  // Remove previous click events
    });

    // Randomly choose a color to be the correct answer
    correctColor = getRandomColor();
    rgbValueElement.textContent = correctColor;

    // Generate random color options
    const colors = [correctColor, getRandomColor(), getRandomColor()];
    colors.sort(() => Math.random() - 0.5); // Shuffle the options

    // Assign the colors to buttons and add the onclick event
    colorButtons.forEach((button, index) => {
        button.style.backgroundColor = colors[index];
        button.onclick = () => checkAnswer(colors[index]);
    });
}

// Check if the clicked color is correct
function checkAnswer(selectedColor) {
    if (selectedColor === correctColor) {
        score++;
        scoreElement.textContent = score;
        alert('Correct!');
    } else {
        lives--;
        livesElement.textContent = lives;
        alert('Incorrect!');
    }

    if (lives === 0) {
        endGame();
    } else {
        generateGame();
    }
}

// End the game
function endGame() {
    finalScoreElement.textContent = score;
    gameOverElement.style.display = 'block';
}

// Replay the game
function replayGame() {
    score = 0;
    lives = 5;
    scoreElement.textContent = score;
    livesElement.textContent = lives;
    gameOverElement.style.display = 'none';
    generateGame();
}

// Event listener for replay button
replayButton.addEventListener('click', replayGame);

// Start the game
generateGame();
