import React from 'react';
// import {howl} from "howler";

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css" integrity="sha512-u7ppO4TLg4v6EY8yQ6T6d66inT0daGyTodAi6ycbw9+/AU8KMLAF7Z7YGKPMRA96v7t+c7O1s6YCTGkok6p9ZA==" crossorigin="anonymous" />




export default function Player() {
    

   
   
   
   
   
    return (

        
        
        
 <div className="Player">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css" integrity="sha512-u7ppO4TLg4v6EY8yQ6T6d66inT0daGyTodAi6ycbw9+/AU8KMLAF7Z7YGKPMRA96v7t+c7O1s6YCTGkok6p9ZA==" crossorigin="anonymous" />


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
            {/* <div id="banner" class="row">
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
            </div> */}
            <div class="container-chapters">
                <div class="row">
                    <div class="column"><i class="fas fa-backward"></i></div>
                    <div class="column">
                        <a href="http://soderkisen.com/bookstep/public/Books/MobyDick/mobydick_000.mp3" target="_self">
                        <img class="chapter" src="icons/Kapitelupplåst.png" on click="currentSlide(1)"></img> 
                        </a>                                            
                    </div>
                    <div class="column">
                        <a href="Books.Testbook1/Enigma.mp3" target="_self">
                        <img class="chapter" src="icons/Kapitelupplåst.png" on click="currentSlide(1)"></img> 
                        <audio preload="auto" autobuffer> 
                            <source src="Books/Testbook1/Enigma.mp3" />
                            <source src="Books/Testbook1/Enigma.wav" /> 
                        </audio>
                        </a>                                            
                    </div>
                    <div class="column">
                        <img class="chapter" src="icons/Kapitelupplåst.png" on click="currentSlide(1)"></img>
                    </div>
                    <div class="column" id="next-collection"><i class="fas fa-forward"></i></div>

                </div>
            </div>
        </div>

    </div>

    <div >

    </div>    

   

 </div>
    

    );
};