import React, { useState } from "react";
import styles from "./styles.css";
import Header from "./Header";
import Footer from "./Footer.js";
import Slideshow from "./Slideshow";
import TotalSteps from "./TotatalSteps";
import Player from "./Player.js";
import AudioPlayer from "./components/AudioPlayer.js";

function App() {
  return (
    <div class="container">
      <Header />
      <Slideshow />
      <AudioPlayer />
      {/* <TotalSteps /> */}
      <Player />
      
      <Footer />
    </div>
  );
}

export default App;
