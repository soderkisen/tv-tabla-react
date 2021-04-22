import React from 'react';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css" integrity="sha512-u7ppO4TLg4v6EY8yQ6T6d66inT0daGyTodAi6ycbw9+/AU8KMLAF7Z7YGKPMRA96v7t+c7O1s6YCTGkok6p9ZA==" crossorigin="anonymous" />


export default function Player() {
    




    return (
        
 <div className="Player">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css" integrity="sha512-u7ppO4TLg4v6EY8yQ6T6d66inT0daGyTodAi6ycbw9+/AU8KMLAF7Z7YGKPMRA96v7t+c7O1s6YCTGkok6p9ZA==" crossorigin="anonymous" />
     <audio id="audio-player" controls autoplay muted>
        <source src="Books/Taylor.ogg" type="audio/ogg"></source>
        <source src="Books/Taylor.mp3" type="audio/mpeg"></source>
        Your browser does not support the audio element.
    </audio>





    <div class="audio-player">
        <div class="cover"></div>
        <div class="player-ui" position="relative">
            <div class="title">
                <h4 id="title">Moby Dick</h4>
            </div>
            <div class="author">
                <h4>Av Herman Melville</h4>
            </div>
            <div class="controls" >
                <button id="previous"><i class="fas fa-backward"></i></button>
                <button id="play-button"><i class="fas fa-play"></i></button>
                <button id="next"><i class="fas fa-forward"></i></button>
            </div>
            <div class="extra-controls">
                <button id="moon"><i class="fas fa-moon"></i></button>
                <button id="speed">x1</button>
            </div>
            <div id="banner" class="row">
                <div id="banner-container">
                    <div class="float-left" id="logo"><img src="Logotyp.png" alt="Logotyp"></img></div>
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
            <div class="Chapters">
                
            </div>
        </div>
        <div class="chapters">

        </div>

    </div>



   

 </div>
    

    );
};