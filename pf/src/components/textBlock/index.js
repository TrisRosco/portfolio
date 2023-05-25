import "./styles.css";

function TextBlock(props) {
  const textStyle = {
    color: props.textColor,
    textShadow: props.showShadow
      ? "0px 0px 4px #7FFF00"
      : "none",
  };

  return (
    <div className="textBlock">
      <p style={textStyle}>{props.text1}</p>
      <p style={textStyle}>{props.text2}</p>
      <p style={textStyle}>{props.text3}</p>
    </div>
  );
}

export default TextBlock;
