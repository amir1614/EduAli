let score = 0;
let timeLeft = 60;
let interval;

function startGame() {
    // Reset the game variables
    score = 0;
    timeLeft = 60;

    // Update the score and timer on the page
    document.getElementById("score").textContent = score;
    document.getElementById("time").textContent = timeLeft;

    // Show the game area and hide the game-over screen
    document.getElementById("game-area").style.display = "block";
    document.getElementById("game-over").style.display = "none";

    // Generate the first problem
    generateProblem();

    // Add event listener for the Enter key
    document.getElementById("answer").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkAnswer(); // Trigger the checkAnswer function when Enter is pressed
        }
    });

    // Start the timer
    interval = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;

        // End the game when the timer hits 0
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function generateProblem() {
    // Generate random numbers and an operator
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ["+", "-", "*", "/"];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    // Ensure division problems result in integers
    const problem = operation === "/"
        ? `${num1 * num2} / ${num1}`
        : `${num1} ${operation} ${num2}`;

    // Calculate the correct answer
    const answer = eval(problem);

    // Display the problem and store the answer as a data attribute
    document.getElementById("problem").textContent = problem;
    document.getElementById("problem").dataset.answer = answer;
}

function checkAnswer() {
    // Get the user's answer and the correct answer
    const userAnswer = parseFloat(document.getElementById("answer").value);
    const correctAnswer = parseFloat(document.getElementById("problem").dataset.answer);

    // Check if the user's answer is correct
    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById("feedback").textContent = "Correct!";
    } else {
        document.getElementById("feedback").textContent = "Try again!";
    }

    // Update the score and clear the input
    d
