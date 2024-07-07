import React from "react";

const AmountControl = ({ amount, onDecrease, onIncrease }) => {
  return (
    <>
      <div className="menu-amount-wrap">
        <span>수량</span>
        <div className="menu-amount">
          <button onClick={onDecrease}>-</button>
          <div>{amount}</div>
          <button onClick={onIncrease}>+</button>
        </div>
      </div>
    </>
  );
};

export default AmountControl;
