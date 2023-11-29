// Immediately Invoked Function Expression to maintain a clean global scope
(function () {
    "use strict";
    console.log("JS running");
  
    // DOM Element References
    const startGame = document.querySelector("#startgame");
    const gameControl = document.querySelector("#gamecontrol");
    const game = document.querySelector("#game");
    const score1 = document.querySelector("#player1Score");
    const score2 = document.querySelector("#player2Score");
    const actionArea = document.getElementById("actions");
    const form = document.querySelector("form");
    const pig = new Audio("sound/pig.mp3");
    const dice = new Audio("sound/dice.mp3");
  
    // Game Data Object
    const gameData = {
      dice: [
        "images/1die.png",
        "images/2die.png",
        "images/3die.png",
        "images/4die.png",
        "images/5die.png",
        "images/6die.png",
      ],
      players: ["player 1", "player 2"],
      score: [0, 0],
      roll1: 0,
      roll2: 0,
      rollSum: 0,
      index: 0,
      gameEnd: 29,
    };
  
    // Event Listener for Quit Button
    document.querySelector('#quit').addEventListener('click', function() {
      document.querySelector('#gameArea').style.display = 'none';
      document.querySelector('#first').style.display = 'flex';
    });
  
    // Event Listener for Form Submission
    document.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault();
      let player1Name = document.querySelector("#player1").value;
      let player2Name = document.querySelector("#player2").value;
  
      document.querySelector("#player1Name").textContent = player1Name;
      document.querySelector("#player2Name").textContent = player2Name;
  
      gameData.players = [player1Name, player2Name];
  
      document.querySelector("#first").style.display = "none";
      document.querySelector("#gameArea").style.display = "flex";
  
      startNewGame();
      pig.play();
    });
  
    // Starts a New Game
    function startNewGame() {
      gameData.score = [0, 0];
      gameData.index = 0;
      game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
      actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
      document.getElementById("roll").addEventListener("click", throwDice);
    }
  
    // Handles Dice Throwing Logic
    function throwDice() {
      actionArea.innerHTML = "";
      gameData.roll1 = Math.floor(Math.random() * 6) + 1;
      gameData.roll2 = Math.floor(Math.random() * 6) + 1;
      game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
      game.innerHTML += `<img src="${gameData.dice[gameData.roll1 - 1]}"> 
                          <img src="${gameData.dice[gameData.roll2 - 1]}">`;
      gameData.rollSum = gameData.roll1 + gameData.roll2;
  
      // Handle Dice Roll Outcomes
      if (gameData.rollSum === 2) {
        game.innerHTML += "<p>Oh snap! Snake eyes!</p>";
        gameData.score[gameData.index] = 0;
        gameData.index = gameData.index === 0 ? 1 : 0;
        showCurrentScore();
        setTimeout(setUpTurn, 2000);
      } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
        gameData.index = gameData.index === 0 ? 1 : 0;
        game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
        setTimeout(setUpTurn, 2000);
      } else {
        gameData.score[gameData.index] += gameData.rollSum;
        actionArea.innerHTML = '<button id="rollagain">🎲 Roll again</button> or <button id="pass">⏭ Pass</button>';
        document.getElementById("rollagain").addEventListener("click", throwDice);
        document.getElementById("pass").addEventListener("click", function () {
          gameData.index = gameData.index === 0 ? 1 : 0;
          setUpTurn();
        });
        checkWinningCondition();
      }
      dice.play();
    }
  
    // Sets Up the Turn
    function setUpTurn() {
      showCurrentScore();
      game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
      actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
      document.getElementById("roll").addEventListener("click", throwDice);
    }
  
    // Checks the Winning Condition
    function checkWinningCondition() {
      if (gameData.score[gameData.index] > gameData.gameEnd) {
        if (gameData.index === 0) {
          score1.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
        } else {
          score2.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
        }
        actionArea.innerHTML = "";
        document.getElementById("quit").innerText = "Start a New Game?";
      } else {
        showCurrentScore();
      }
    }
  
    // Shows the Current Score
    function showCurrentScore() {
      document.getElementById("player1Score").textContent = `${gameData.score[0]} points`;
      document.getElementById("player2Score").textContent = `${gameData.score[1]} points`;
    }
  })();
  