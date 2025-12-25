// Get all choice buttons
const buttons = document.querySelectorAll('.choice');
const resultDiv = document.getElementById('result');

// Function to get computer's choice randomly
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }
  if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

// Add event listeners to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const userChoice = button.getAttribute('data-choice');
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    // Display the result
    resultDiv.innerHTML = `
      You chose: <b>${userChoice}</b><br>
      Computer chose: <b>${computerChoice}</b><br>
      <b>${result}</b>
    `;
  });
});
