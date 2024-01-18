import React, { useState, useEffect } from "react";
import "./styles.css";

const Pong = () => {
  const [gameState, setGameState] = useState({
    leftScore: 0,
    rightScore: 0,
    isPlaying: false,
  });
  const [leftPaddleY, setLeftPaddleY] = useState(0);
  const [rightPaddleY, setRightPaddleY] = useState(0);
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
            id="left_paddle"
            style={{
              left: -200,
              top: leftPaddleY,
            }}
          ></div>
          <div className="pong_ball"></div>
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
