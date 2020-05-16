const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      return 'Error! Undefined term! Please enter rock, paper or scissors.';
    }
  };
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
      default:
        return 'Unknown Error!';
    }
  };
  
  const determineWinner = (userChoice,computerChoice) => {
    if (userChoice === computerChoice) {
      return 'It\'s a tie!';
    };
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer wins!';
      } else if (computerChoice === 'scissors') {
        return 'You win!';
      };
    };
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer wins!';
      } else if (computerChoice === 'rock') {
        return 'You win!';
      };
    };
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer wins!';
      } else if (computerChoice === 'paper') {
        return 'You win!';
      };
    };
    if (userChoice === 'bomb') {
      return 'You win!';
    };
  };
  
  const playGame = () => {
    let userChoice = getUserChoice('paper');
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
  };

playGame();