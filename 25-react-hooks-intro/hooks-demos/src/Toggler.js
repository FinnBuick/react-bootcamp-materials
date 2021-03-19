import React from "react";
import useToggle from "./hooks/useToggle";

export default function Toggler() {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isHeartBroken, toggleIsHeartBroken] = useToggle(false);
  const [isBanana, toggleIsBanana] = useToggle(false);

  return (
    <div>
      <h1 onClick={toggleIsHappy}>{isHappy ? "🙂" : "😢"}</h1>
      <h1 onClick={toggleIsHeartBroken}>{isHeartBroken ? "💔" : "❤️"}</h1>
      <h1 onClick={toggleIsBanana}>{isBanana ? "🍌" : "🍎"}</h1>
    </div>
  );
}
