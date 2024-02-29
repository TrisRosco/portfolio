import React, { useState, useEffect } from "react";
import "./styles.css";

const Pong = () => {
  //States_______________________________

  const [gameState, setGameState] = useState({
    leftScore: 0,
    rightScore: 0,
    isPlaying: false,
  });
  const [ballData, setBallData] = useState({
    x: 0,
    y: 0,
    speed: 0,
    direction: 0,
  });
  const [paddleData, setPaddleData] = useState({
    leftPaddleY: 0,
    rightPaddleY: 0,
  });

  //Controls_____________________________

  const handleKeyDown = (e) => {
    if (e.key === "w") {
      handleMoveUp();
    } else if (e.key === "s") {
      handleMoveDown();
    }
  };

  const handleMoveUp = () => {
    if (paddleData.leftPaddleY > -250) {
      setPaddleData({ leftPaddleY: paddleData.leftPaddleY - 10 });
    }
  };

  const handleMoveDown = () => {
    if (paddleData.leftPaddleY < 200) {
      setPaddleData({ leftPaddleY: paddleData.leftPaddleY + 10 });
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [paddleData.leftPaddleY]);

  //Game Logic___________________________

  const startGame = () => {
    setGameState({ ...gameState, isPlaying: true });
    setBallData({
      ...ballData,
      x: 0,
      y: 0,
      speed: 10,
      direction: Math.random() * 360,
    });
  };

  const endGame = () => {
    setGameState({ ...gameState, isPlaying: false });
    setBallData({
      ...ballData,
      x: 0,
      y: 0,
      speed: 0,
      direction: 0,
    });
  };

  const moveBall = () => {
    let newBallX = ballData.x + ballData.speed * Math.cos(ballData.direction);
    let newBallY = ballData.y + ballData.speed * Math.sin(ballData.direction);
    setBallData({ ...ballData, x: newBallX, y: newBallY });
  };

  const checkCollision = () => {
    //Check if ball hits left paddle
    if (
      ballData.x < -180 &&
      ballData.y > paddleData.leftPaddleY - 50 &&
      ballData.y < paddleData.leftPaddleY + 50
    ) {
      let newDirection = 180 - ballData.direction;
      setBallData({ ...ballData, direction: newDirection });
    }
    //Check if ball hits right paddle
    if (
      ballData.x > 180 &&
      ballData.y > paddleData.rightPaddleY - 50 &&
      ballData.y < paddleData.rightPaddleY + 50
    ) {
      let newDirection = 180 - ballData.direction;
      setBallData({ ...ballData, direction: newDirection });
    }
    //Check if ball hits top or bottom
    if (ballData.y > 240 || ballData.y < -240) {
      let newDirection = -ballData.direction;
      setBallData({ ...ballData, direction: newDirection });
    }
    //Check if ball goes off screen
    if (ballData.x > 240) {
      setGameState({ ...gameState, leftScore: gameState.leftScore + 1 });
      endGame();
    }
    if (ballData.x < -240) {
      setGameState({ ...gameState, rightScore: gameState.rightScore + 1 });
      endGame();
    }
  };

  useEffect(() => {
    if (gameState.isPlaying) {
      moveBall();
      checkCollision();
    }
  }, [ballData]);

  return (
    <>
      <div className="pong_screen">
        <div className="pong_game_section">
          <div
            className="pong_paddle"
            id="left_paddle"
            style={{
              left: -200,
              top: paddleData.leftPaddleY,
            }}
          ></div>
          <div
            className="pong_ball"
            style={{
              left: ballData.x,
              top: ballData.y,
            }}
          ></div>
          <div
            className="pong_paddle"
            id="right_paddle"
            style={{
              right: -200,
              top: paddleData.rightPaddleY,
            }}
          ></div>
        </div>
      </div>
        <div className="pong_controls">
            <div className="pong_score">
            <p>{gameState.leftScore}</p>
            <p>{gameState.rightScore}</p>
            </div>
            <button onClick={startGame}>Start Game</button>
        </div>
    </>
  );
};

export default Pong;
