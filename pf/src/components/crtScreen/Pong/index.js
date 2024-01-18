import React, { useState, useEffect } from "react";
import "./styles.css";

const Pong = () => {
  const [gameState, setGameState] = useState({
    leftScore: 0,
    rightScore: 0,
    isPlaying: false,
  });
  const [leftPaddleY, setLeftPaddleY] = useState(-250);
  const [rightPaddleY, setRightPaddleY] = useState(-20);
  const [ballData, setBallData] = useState({
    x: 0,
    y: 0,
    speed: 0,
    direction: 0,
  });

  const handleKeyDown = (e) => {
    if (e.key === "w") {
      handleMoveUp();
    } else if (e.key === "s") {
      handleMoveDown();
    }
  };

  const handleMoveUp = () => {
    if (leftPaddleY > -250) {
      setLeftPaddleY(leftPaddleY - 10);
    }
  };

  const handleMoveDown = () => {
    if (leftPaddleY < 200) {
      setLeftPaddleY(leftPaddleY + 10);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [leftPaddleY]);

  return (
    <>
      <div className="pong_screen">
        <div className="pong_game_section">
          <div
            className="pong_paddle"
            id="left_paddle"
            style={{
              left: -200,
              top: leftPaddleY,
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
              top: rightPaddleY,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Pong;
