import React from "react";
import S8Global from "./S8RulesGlobal";
import "../css/rules.css";

function S8RulesMc(props){
    return(
        <div id="rules-container">
            <div id="rules">
                <button id="rules-close" onClick={props.button}>x</button>
                <S8Global/>
                <h2>Rules on Minecraft</h2>
                <ol>
                    <li>No spamming teleport requests, kick will be issued after 2nd warning.</li>
                </ol>
            </div>
        </div>
    )
}
export default S8RulesMc;