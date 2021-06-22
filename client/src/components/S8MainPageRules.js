import React from "react";
import "./css/rules.css";
import Rules from "./Rules";

export default function S8RulesMc(props){
    return(
        <div id="rules-container">
            <div id="rules">
                <button id="rules-close" onClick={props.button}>x</button>
                <Rules title="Global Rules">
                    <li>No Harrasment</li>
                    <li>No Cheating</li>
                    <li>Deity is Law</li>
                </Rules>
                <Rules title="Rules on Minecraft Servers">
                    <li>No Advertisements</li>
                    <li>No Spamming Chat</li>
                    <li>No Spamming Teleport Requests</li>
                </Rules>
                <Rules title="Rules on Survival Multiplayer (SMP)">
                    <li>No Harrasment</li>
                    <li>No Griefing</li>
                    <li>No Killing other players unless in team war or battle</li>
                </Rules>
                <Rules title="Rules on PvP Survival">
                    <li>No Harrasment</li>
                </Rules>
            </div>
        </div>
    )
}