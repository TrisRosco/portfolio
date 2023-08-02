import React from "react";
import "./styles.css";

const YouTubeFrame = (props) => {
  return (
    <div className="youtube-frame">
      <iframe
        className="iframe"
        src={props.src}
        title={props.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
        ></iframe>
    </div>
    );
};


export default YouTubeFrame;
