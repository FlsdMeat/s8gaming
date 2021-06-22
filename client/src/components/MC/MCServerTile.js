import React, { useEffect, useState } from "react";
import "../css/loading.css";
import "./serverTile.css";

const loading = {
    height: "50px",
    width: "50px",
    border: "3px solid rgba(196, 22, 27, 0.5)",
    borderRadius: "50%",
}

export default function MCServerTile(){
    const [isLoading, changeIsLoading] = useState(true);
    const [smp, ChangeSMPData] = useState({});
    const [showPlugins, PluginsOn] = useState(false);
    const [disabled, SetDisabled] = useState(false);
    useEffect(()=>{
        setTimeout(() => {
            changeIsLoading(false);
        })
        //refreshCreative();
        refreshPVE();
        
    }, []);
    const refreshPVE = async () =>{
        SetDisabled(true);
        callSMP()
            .then(res => {
                if (res === false) ChangeSMPData(false)
                else ChangeSMPData(res.success)
            }).catch(
                err => console.log("errrorrr " + err)
                );
        
        setTimeout(() => {
            SetDisabled(false);
        }, 15000);
    }
    const callSMP = async () => {
        const response = await fetch('/api/smp');
        if (response !== undefined){
            if(response !== null ){
                const body = await response.json();
                if (response.status !== 200) throw Error(body.message);
                return body;
            }
        }
        return null; 
    }
    return(
        <React.Fragment>
        { isLoading && smp !== null? <div className="loading" style={loading}></div> : 
            <div className="mcTile" id="mcsmp">   
                <div className="serverTitle">
                    <h2>SMP:</h2>
                    {smp !== false ? <h2 style={{backgroundColor: "green", padding:"0px 5px"}}>ONLINE</h2>:<h2 style={{backgroundColor: "red", padding:"0px 5px"}}>OFFLINE</h2>}
                </div>
                <button className="redButton" onClick={()=>{smp !== false && PluginsOn(true)}}><h3>Display Plugins</h3></button>
                <div style={{position:"relative", display:"flex"}}>
                    <h4>Players: {smp.online_players} / {smp.max_players} </h4>
                    <button className="mcTile-refresh redButton" onClick={()=>{refreshPVE()}} disabled={disabled} dangerouslySetInnerHTML={{__html: "<h3>&#8593;&#8595;</h3>"}}></button>
                </div>
                <h5>Version: {smp.version}</h5>
                <div className="playerlist">
                <ol>
                    {
                        smp.players !== undefined && smp.players.length !== 0 ? smp.players.map((players, index) => <li key={index}>{players}</li>):
                        <li className="no_players">No Players Online</li>
                    }
                    
                    </ol>
                </div>
            </div>
        }
        {showPlugins && <PluginWindow server="SMP" plugins={smp.plugins} close={()=>PluginsOn(false)}/>}
        </React.Fragment>
    )
}

function PluginWindow(props){
    let pluginTemp = props.plugins.split(': ');
    var plugins = pluginTemp[1].split(';');
    return(
        <div className="mc-plugin-container">
            <div className="mc-plugin-window">
                <h2>Plugins for {props.server}</h2>
                <button id="rules-close" onClick={props.close}>x</button>
                <ul>
                    {plugins.map((element, index) => <li key={index}><h3>- {element}</h3></li>)}
                </ul>
            </div>
            
        </div>
    )
}