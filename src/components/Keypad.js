import React from "react";

const Keypad = ({ onClick }) => {
  let hexidecimals = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  const hdButtons = hexidecimals.map((hd, index) => {
    return (
      <button name={hd} key={index} onClick={(e) => onClick(e.target.name)}>
        {hd}
      </button>
    );
  });

  return (
    <div className="keypad">
      <button
        name="Clear"
        className="green"
        onClick={(e) => onClick(e.target.name)}
      >
        Clear
      </button>
      <button
        name="Blend"
        className="green"
        onClick={(e) => onClick(e.target.name)}
      >
        Blend
      </button>
      <button
        name="Swap"
        className="green"
        onClick={(e) => onClick(e.target.name)}
      >
        Swap
      </button>
      {hdButtons}
      <button
        name="Left"
        className="green"
        onClick={(e) => onClick(e.target.name)}
      >
        Left
      </button>
      <button
        name="Right"
        className="green"
        onClick={(e) => onClick(e.target.name)}
      >
        Right
      </button>
      <button
        name="Left Complimentary"
        className="comp-button-one"
        onClick={(e) => onClick(e.target.name)}
      >
        Left Complimentary
      </button>
      <button
        name="Back"
        className="green"
        onClick={(e) => onClick(e.target.name)}
      >
        Back
      </button>
      <button
        name="Right Complimentary"
        className="comp-button-two"
        onClick={(e) => onClick(e.target.name)}
      >
        Right Complimentary
      </button>
    </div>
  );
};

export default Keypad;