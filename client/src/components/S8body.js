import React from 'react';
import SlideShow from './home/Slides/SlideShow';
import MCinfo from './MC/MCinfo';
import "./css/main.css";
import "./home/intro.css";
import "./css/aboutus.css";
import "./css/background.css";

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
                    <h3>S8 Gaming is a self-hosted game server. We plan on MC first, as it will be the easiest step off point. What you are reading right now is also apart of the game server, all built by 2 individuals. This server is hosted in New England, US (send help). We will also host a voice server for the peeps across the ocean on Teamspeak.</h3>
                    <br/>
                    <h3>Don't expect us to be the best of the best, we plan on being a very casual and fun server network. We only have an SMP Server at the moment as it is the most popular. For MC, we do plan for another 1 or 2 servers. One being a secret, and another is a multi gamemode server.</h3>
                    <br/>
                    <h2>Road-Map</h2>
                    <h3>
                    <ol>
                        <li>Create more content in the SMP Server</li>
                        <li>Build up donations to upgrade the server from 8 cores to 16</li>
                        <li>Build another MC Server, ORRRR build a different game server.</li>
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
        </div>
    )
}
export default S8body;