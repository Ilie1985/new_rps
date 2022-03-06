import React, { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [userChoice, setUserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState("Who wins?");
  const [gameOver, setGameOver] = useState(false);

  const choices = ["rock", "paper", "scissors"];

  const handleOnClick = (choice) => {
    setUserChoice(choice);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  useEffect(() => {
    const comboMoves = userChoice + computerChoice;
    if (userPoints <= 4 && computerPoints <= 4) {
      if (
        comboMoves === "rockscissors" ||
        comboMoves === "paperrock" ||
        comboMoves === "scissorspaper"
      ) {
        const updatedUserPoints = userPoints + 1;
        setUserPoints(updatedUserPoints);
        setTurnResult("User got the point");
        if (updatedUserPoints === 3) {
          setGameOver(true);
          setResult("User wins");
        }
      }

      if (
        comboMoves === "paperscissors" ||
        comboMoves === "scissorsrock" ||
        comboMoves === "rockpaper"
      ) {
        const updatedComputerPoints = computerPoints + 1;
        setComputerPoints(updatedComputerPoints);
        setTurnResult("Computer got the point");
        if (updatedComputerPoints === 3) {
          setGameOver(true);
          setResult("Computer wins");
        }
      }

      if (
        comboMoves === "paperpaper" ||
        comboMoves === "scissorsscissors" ||
        comboMoves === "rockrock"
      ) {
        setTurnResult("No one got a point");
      }
    }
  }, [userChoice, computerChoice]);

  const reset = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <h1 className="heading">Rock Paper Scissors</h1>
      <div className="score">
        <h1>User Points: {userPoints}</h1>
        <h1>Computer Points: {computerPoints}</h1>
      </div>
      <div className="choice">
        <div className="choice-user">
          <img
            className="user-hand"
            src={`../images/${userChoice}.png`}
            alt=""
          />
        </div>
        <div className="choice-computer">
          <img
            className="computer-hand"
            src={`../images/${computerChoice}.png`}
            alt=""
          />
        </div>
      </div>

      <div className="button-div">
        {choices.map((choice, index) => (
          <button
            className="button"
            key={index}
            onClick={() => handleOnClick(choice)}
            disabled={gameOver}
          >
            {choice}
          </button>
        ))}
      </div>

      <div className="result">
        <h1>Turn results:{turnResult} </h1>
        <h1>Final Result:{result} </h1>
      </div>

      <div className="button-div">
        {gameOver && (
          <button className="restart-button" onClick={() => reset()}>
            Restart the Game?
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
