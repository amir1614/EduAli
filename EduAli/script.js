function startQuiz() {
    document.getElementById("quiz-area").style.display = "block";
    document.getElementById("quiz-question").textContent = "What is 7 + 3?";
    document.getElementById("quiz-answer").value = "";
    document.getElementById("quiz-feedback").textContent = "";
}

function checkQuizAnswer() {
    const userAnswer = parseInt(document.getElementById("quiz-answer").value);
    const correctAnswer = 10;

    if (userAnswer === correctAnswer) {
        document.getElementById("quiz-feedback").textContent = "Correct!";
    } else {
        document.getElementById("quiz-feedback").textContent = "Try again!";
    }
}
