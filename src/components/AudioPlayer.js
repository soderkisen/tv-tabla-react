import React from "react";
import ReactDOM from "react-dom";
import image from "./image32.png";

const Kapitel_1 = "http://soderkisen.com/bookstep/public/Books/MobyDick/mobydick_000.mp3";
const Kapitel_2 = "http://soderkisen.com/bookstep/public/Books/MobyDick/mobydick_003.mp3";

function getTime(time) {
  if (!isNaN(time)) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
}

class App extends React.Component {
  state = {
    selectedTrack: null,
    player: "stopped",
    currentTime: null,
    duration: null
  };

  componentDidMount() {
    this.player.addEventListener("timeupdate", e => {
      this.setState({
        currentTime: e.target.currentTime,
        duration: e.target.duration
      });
    });
  }

  componentWillUnmount() {
    this.player.removeEventListener("timeupdate", () => {});
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedTrack !== prevState.selectedTrack) {
      let track;
      switch (this.state.selectedTrack) {
        case "Kapitel 1":
          track = Kapitel_1;
          break;
        case "Kapitel 2":
          track = Kapitel_2;
          break;
        default:
          break;
      }
      if (track) {
        this.player.src = track;
        this.player.play();
        this.setState({ player: "playing", duration: this.player.duration });
      }
    }
    if (this.state.player !== prevState.player) {
      if (this.state.player === "paused") {
        this.player.pause();
      } else if (this.state.player === "stopped") {
        this.player.pause();
        this.player.currentTime = 0;
        this.setState({ selectedTrack: null });
      } else if (
        this.state.player === "playing" &&
        prevState.player === "paused"
      ) {
        this.player.play();
      }
    }
  }

  render() {
    const list = [
      { id: 1, title: "Kapitel 1" },
      { id: 2, title: "Kapitel 2" }
    ].map(item => {
      return (
        <li
          key={item.id}
          onClick={() => this.setState({ selectedTrack: item.title })}
        >
          {item.title}
        </li>
      );
    });

    const currentTime = getTime(this.state.currentTime);
    const duration = getTime(this.state.duration);

    return (  
      <div class="audio-player">
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css" integrity="sha512-u7ppO4TLg4v6EY8yQ6T6d66inT0daGyTodAi6ycbw9+/AU8KMLAF7Z7YGKPMRA96v7t+c7O1s6YCTGkok6p9ZA==" crossorigin="anonymous" />
        <div class="covern">
        </div>
        <div class="controls"  >

          <div class="player-ui" position="relative">
              <div class="title">
                  <h4 id="title">Moby Dick</h4>
              </div>
              <div class="author">
                  <h4>Av Herman Melville</h4>
              </div>
            <button id="previous"><i class="fas fa-backward"></i></button>
            {this.state.player === "paused" && (
              <button id="control-button" onClick={() => this.setState({ player: "playing" })}>
                <i class="fas fa-play"></i>
              </button>
            )}
            {this.state.player === "playing" && (
              <button id="control-button" onClick={() => this.setState({ player: "paused" })}>
                <i class="fas fa-pause"></i>
              </button>
            )}

            <button id="next"><i class="fas fa-forward"></i></button>
            <div class="extra-controls">
              <button id="moon"><i class="fas fa-moon"></i></button>
              <button id="speed">x1</button>
            </div>
        <div id="banner" class="row">
                <div id="banner-container">
                    <div class="float-left" id="logo"><img src="icons/Logotyp.png" alt="Logotyp"></img></div>
                    <div class="float-left" id="banner-text">
                        <p>Användare kan nu synkronisera
                        Bookstep med de senaste 
                        träningsapparna från App Store och 
                        Google Play. </p>
                    </div>
                    <div class="float-right" >
                        <button id="close-button"><i class="fas fa-times"></i></button>
                    </div>
                    <div class="big-buttons" id="buttons">
                        <div class=""  id="appStore">
                            <button id="button1" class="float-left"><i class="fab fa-apple"></i> </button>
                            <div id="small-text">
                                <p>DOWNLOAD FROM <strong>APP STORE</strong></p>                        
                            </div>                        
                        </div>
                    </div>
                    <div id="buttons">
                        <div  id="googlePlay">
                            <button id="button1" class="float-left"><i class="fab fa-google-play"></i> </button>
                            <div id="small-text">
                                <p>DOWNLOAD FROM <strong>Google play</strong></p>                        
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>


          </div>
        </div>
        
        {this.state.player === "playing" || this.state.player === "paused" ? (
          <div class="timeAndDuration">
            {currentTime} / {duration}
          </div>
        ) : (
          ""
        )}
        
        <audio ref={ref => (this.player = ref)} />

        <div class="controls" id="chapters">
          <button id="next"><i class="fas fa-backward"></i></button>
          <ul>{list}</ul>
          <button id="next"><i class="fas fa-forward"></i></button>
        </div>


      </div>
 
        




    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;