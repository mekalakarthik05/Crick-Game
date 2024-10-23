let game = {
    totalScore: 0
};

function startGame() {
    const startButton = document.getElementById("startButton");
    startButton.style.display = "none"; // Hide the start button
    const gameArea = document.getElementById("gameArea");
    gameArea.style.display = "block";
    document.getElementById("prompt").innerText = "Choose a number:";
    document.getElementById("result").innerText = "";
    document.getElementById("error").innerText = ""; // Clear any previous error messages
    game.totalScore = 0;
    document.getElementById("totalScore").innerText = game.totalScore; // Reset total score display
}

function exitGame() {
    const gameArea = document.getElementById("gameArea");
    gameArea.style.display = "none";
    const startButton = document.getElementById("startButton");
    startButton.style.display = "block"; // Show the start button again
}

function playGame(playerScore) {
    const computerScore = Math.floor(Math.random() * 7); // Random number between 0 and 6
    document.getElementById("result").innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
    
    if (playerScore === computerScore) {
        document.getElementById("result").innerHTML += `<br/>You are out! Your total score is: ${game.totalScore}`;
        showPlayAgainModal();
    } else {
        game.totalScore += playerScore;
        document.getElementById("totalScore").innerText = game.totalScore;
    }
}

function showPlayAgainModal() {
    const playAgainModal = document.getElementById("playAgainModal");
    const finalScoreElement = document.getElementById("finalScore");
    finalScoreElement.innerText = `Your total score is: ${game.totalScore}`;
    playAgainModal.style.display = "block";
}

function confirmPlayAgain(playAgain) {
    const playAgainModal = document.getElementById("playAgainModal");
    playAgainModal.style.display = "none";
    if (playAgain) {
        startGame();
    } else {
        exitGame();
    }
}
