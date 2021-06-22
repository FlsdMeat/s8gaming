import React from 'react';
import SlideShow from './SlideShow';
import MCinfo from './MC/MCinfo';
import "../css/desktop/main.css";
import "../css/desktop/intro.css";
import "../css/desktop/aboutus.css";
import "../css/desktop/background.css";

function S8body(){
    return(
        <div className="upper">
            <section id="home">
                <SlideShow />
                <div className="title">
                    <h1>S8 GAMING</h1>
                    <h2>COMMUNITY</h2>
                </div>
            </section>
            <section id="aboutus">
                <div className="aboutus">
                    <h2>What is Squad 8 Gaming?</h2>
                    <h3>S8 Gaming is a self-hosted game server. We plan on MC first, as it will be the easiest step off point. What you are reading right now is also apart of the game server, all built by 2. This server is hosted in New England, US (send help). We will also host a voice server for the peeps across the ocean on Teamspeak.</h3>
                    <br/>
                    <h3>Don't expect us to be the best of the best, we plan on being a very casual and fun server network. MC will have regular gamemodes such as Survival and Creative, but we will be adding teambased gamemodes as the community grows, hunger games, death match, parkour and the like.</h3>
                    <br/>
                    <h2>Road-Map</h2>
                    <h3>
                    <ol>
                        <li>Build Server icon and color palate</li>
                        <li>Finish MC Server and release to public</li>
                        <li>Start creating new areas for team based games</li>
                    </ol>
                    </h3>
                </div>
            </section>
            <section id="mc">
                <MCinfo />
            </section>
            <section id="bottom">
                <footer>
                    <div className="title">
                        <h1>S8 GAMING</h1>
                        <h2>COMMUNITY</h2>
                    </div>
                    <h5>S8 Gaming's Website is subject to change</h5>
                </footer>
            </section>
            <div className="streaks">
                <li><span></span></li>
                <li><span></span></li>
                <li><span></span></li>
                <li><span></span></li>
                <li><span></span></li>
                <li><span></span></li>
                <li><span></span></li>
                <li><span></span></li>
            </div>
      </div>
    )
}
export default S8body;