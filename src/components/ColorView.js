import React from "react";

const ColorView = ({ hexOne, hexTwo, gradient }) => {
  let gradientView;

  if (gradient) {
    gradientView = {
      background: `linear-gradient(to right, ${hexOne}, ${hexTwo})`,
    };
  } else {
    gradientView = {
      background: `linear-gradient(to right, ${hexOne} 0%, ${hexOne} 50%, ${hexTwo} 50%, ${hexTwo} 100%)`,
    };
  }
  return (
    <>
      <div className="color-view" style={gradientView} />
      <br />;
    </>
  );
};

export default ColorView;