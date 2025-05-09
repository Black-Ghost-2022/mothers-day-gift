function checkAnswer(inputId, correctAnswer, nextPage) {
  const input = document.getElementById(inputId).value.trim().toLowerCase();
  if (input === correctAnswer.toLowerCase()) {
    window.location.href = nextPage;
  } else {
    alert("Try again!");
  }
}
