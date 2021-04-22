import React, { useState } from "react";
import Player from "./Player";

export default function TotalSteps() {
  const [totalSteps, setTotalSteps] = useState(0);

  const handleData = () => {
    setTotalSteps(document.querySelector("#steps"));

    if (totalSteps.value >= 10000) {
      alert("Bra jobbat! Nästa kapitel är nu upplåst");
      <Player />
    } else {
      alert("Du behöver gå fler steg för låsa upp nästa kapitel");
    }
  };
  return (
    <div>
      <input type="number" id="steps" />
      <button onClick={handleData}>Ange</button>
    </div>
  );
}
