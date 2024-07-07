import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MenuWrapper from "./components/Menu/MenuWrapper";
import ModalWrapper from "./components/Modals/ModalWrapper";

function App() {
  // 모달과 헤더에서 isClicked를 사용하고 싶어서 최상위 컴포넌트에 작성
  const [isClicked, setIsClicked] = useState(false);

  const cartClickHandle = () => {
    setIsClicked(true);
  };

  return (
    <>
      <ModalWrapper isClicked={isClicked} />
      <Header isClicked={isClicked} onCartClick={cartClickHandle} />
      <MenuWrapper />
    </>
  );
}

export default App;
