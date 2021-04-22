import React from "react";
import styles from "./styles.css";

export default function Slideshow() {
  return (
    <div class="slideshow">
      <div class="slideshow-content">
        <h5 id="slideshow-header">
          Lås upp ljudböcker med motion och håll
          <br />
          träningsmotivationen igång
        </h5>
        <div id="box1"></div>
        <div id="box2"></div>
        <div id="box3"></div>
        <div class="slideshow-content-header-dots">
          <img id="dot1" src="./img/Ellipse.png" alt="A dot" />
          <img id="dot2" src="./img/Ellipse-dark.png" alt="A dot" />
          <img id="dot3" src="./img/Ellipse.png" alt="A dot" />
          <img id="dot4" src="./img/Ellipse.png" alt="A dot" />
        </div>
        <div class="runner">
          <img src="./img/Slideshow-page1-runner.png" alt="runner" />
        </div>
      </div>
    </div>
  );
}
