import React, { useEffect } from "react";
import "./styles.css";

const Pong = () => {

    useEffect(() => {
        const leftPaddle = document.getElementById("left_paddle");
        const rightPaddle = document.getElementById("right_paddle");
        const ball = document.querySelector(".pong_ball");
        const gameSection = document.querySelector(".pong_game_section");

        const movePaddle = (paddle, direction) => {
            if (direction === "up") {
                paddle.style.top = paddle.offsetTop - 10 + "px";
            } else if (direction === "down") {
                paddle.style.top = paddle.offsetTop + 10 + "px";
            }
        }

        document.addEventListener("keydown", (e) => {
            if (e.key === "w") {
                movePaddle(leftPaddle, "up");
            } else if (e.key === "s") {
                movePaddle(leftPaddle, "down");
            }
        }
        )

    }, [])


  return (
    <>
      <div className="pong_screen">

        <div className="pong_game_section">
          <div className="pong_paddle" id="left_paddle"></div>
          <div className="pong_ball"></div>
          <div className="pong_paddle" id="right_paddle"></div>
        </div>
      </div>
    </>
  );
};

export default Pong;
