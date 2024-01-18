import React, { useState, useEffect } from "react";
import "./styles.css";

const Pong = () => {
  const [gameState, setGameState] = useState({
    leftScore: 0,
    rightScore: 0,
    isPlaying: false,
  });
  const [leftPaddleY, setLeftPaddleY] = useState(200);
  const [rightPaddleY, setRightPaddleY] = useState(200);
  const [ballData, setBallData] = useState({
    x: 0,
    y: 0,
    speed: 0,
    direction: 0,
  });

  return (
    <>
      <div className="pong_screen">
        <div className="pong_game_section">
          <div
            className="pong_paddle"
            style={{
              right: leftPaddleY,
            }}
          ></div>
          <div className="pong_ball"></div>
          <div
            className="pong_paddle"
            style={{
              left: rightPaddleY,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Pong;
