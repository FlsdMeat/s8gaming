import React, { Component } from "react";
import discordImg from "../../img/discordLogo.jpg";
import DiscordBox from "./DiscordBox";

class Voice extends Component{
    
    constructor(){
        super();
        this.state = {
            discord:"none",
            back:"none",
            moveLeft:"moveLeftDiscord",
            moveRight:"moveRightDiscord"
        }
        this.activateDiscord = this.activateDiscord.bind(this);
        this.deactivateBoth = this.deactivateBoth.bind(this);
    }

    activateDiscord() {
        this.setState(() => {
            return {discord:"block", back:"block"}
        });
    }
    deactivateBoth(){
        this.setState(() => {
            return {discord:"none", ts:"none", back:"none"}
        });
    }

    render(){
        return (
            <React.Fragment>
                <div id="backdrop" style={{display:this.state.back}}></div>
                <div className="frame">
                    <div className="innerFrameImgs">
                        <button onClick={this.activateDiscord}><img alt="discord" id="discordImg" src={discordImg}/></button>
                    </div>
                    <button onClick={this.deactivateBoth} style={{display:this.state.back}} id="back">&#8594;</button>
                    <div id="discordBox" style={{display:this.state.discord}}><DiscordBox/></div>
                </div>
            </React.Fragment>
        )
    }
}
export default Voice;