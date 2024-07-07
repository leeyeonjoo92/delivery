import React, { useCallback, useState } from "react";
import "./MenuList.css";
import AmountControl from "./AmountControl";

const MenuList = () => {
  // 초기 상태값
  const initialMenuObjs = [
    {
      menu: "짜장면",
      price: 7000,
      amount: 1,
    },
    {
      menu: "짬뽕",
      price: 8800,
      amount: 1,
    },
    {
      menu: "탕수육",
      price: 17800,
      amount: 1,
    },
  ];

  // 초기값으로 initialMenuObjs를 인자로 받아 상태를 관리함
  const [menuObjs, setMenuObjs] = useState(initialMenuObjs);

  // 클릭했을때 index를 매개변수로 받음
  // index : 감소시킬 메뉴 객체의 위치
  const amountMinusHandle = useCallback(
    (index) => {
      // prevmenuObjs : 이전의 상태값
      setMenuObjs(
        (prevmenuObjs) =>
          // 이전 상태 배열을 돌면서 menuAmount, i 처리
          prevmenuObjs.map((menuAmount, i) =>
            // 현재 돌고있는 객체의 인덱스와 매개변수 index가 같은지 확인
            i === index
              ? // 같으면 해당 객체의 amount값을 1 감소시킨 새로운 객체 반환
                // amount 최소값 1
                { ...menuAmount, amount: Math.max(menuAmount.amount - 1, 1) }
              : // 다르면 기존 객체 그대로 반환
                menuAmount
          )
        // => map 대신 forEach 사용하려면 상태 업데이트를 위한 배열 새로 생성해야함
        // 새로운 배열 생성 -> forEach 돌리기 -> return 배열
      );
    },
    [setMenuObjs]
  );

	

  const amountPlusHandle = useCallback(
    (index) => {
      setMenuObjs((prevmenuObjs) =>
        prevmenuObjs.map((menuAmount, i) =>
          i === index
            ? { ...menuAmount, amount: menuAmount.amount + 1 }
            : menuAmount
        )
      );
    },
    [setMenuObjs]
  );

  const cartBtnHandle = (index) => {
    setMenuObjs((prevmenuObjs) =>
      prevmenuObjs.map((menuAmount, i) =>
        i === index ? { ...menuAmount, amount: 1 } : menuAmount
      )
    );
  };

  return (
    <>
      {menuObjs.map((menuObj, index) => (
        <div className="menu-list" key={menuObj.menu}>
          <div className="menu-info">
            <div className="menu-name">{menuObj.menu}</div>
            <div className="menu-price">{menuObj.price}원</div>
          </div>
          <div className="menu-cart">
            <AmountControl
              // 매개변수로 보내기
              amount={menuObj.amount}
              onDecrease={() => amountMinusHandle(index)}
              onIncrease={() => amountPlusHandle(index)}
            />
            <button onClick={() => cartBtnHandle(index)}>장바구니 담기</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuList;
