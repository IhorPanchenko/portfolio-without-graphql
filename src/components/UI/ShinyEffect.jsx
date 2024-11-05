const ShinyEffect = ({ top = 0, size = 500 }) => {
  const positionStyles = {
    top: `${top}px`,
    width: `${size}px`,
    height: `${size}px`,
    left: "50%", // Center the effect horizontally
    transform: "translateX(-50%)", // Offset by half the width
    position: "absolute",
    zIndex: -1,
  };

  return <div className="shiny-effect" style={positionStyles}></div>;
};

export default ShinyEffect;
