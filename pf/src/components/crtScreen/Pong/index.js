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
    </>
  );
};

export default Pong;
