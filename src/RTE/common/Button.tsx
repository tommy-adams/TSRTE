import React from "react";

interface Props {
  children: JSX.Element,
  onSelect: Function,
  selected: Boolean
};

const Button = ({ children, onSelect, selected }: Props) => {
  return (
    <div
      className={selected ? "selected-button" : "button"}
      onClick={() => onSelect()}
    >
      {children}
    </div>
  );
};

export default Button;