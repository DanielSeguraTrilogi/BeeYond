import React from "react";
import '../popup.css';

interface HexagonI{
  children?: React.ReactNode,
  clickFunction?: Function,
  disabled?: boolean
}

export const Hexagon = ({ children, clickFunction, disabled = false}: HexagonI) => {
  const handleClick = () => {
    clickFunction()
  }
  return (
    <button className="hexagon" onClick={handleClick} disabled={disabled}>
      <span className="inner">
        <div className="inset">
          {children}
        </div>
      </span>
    </button>
  )
}