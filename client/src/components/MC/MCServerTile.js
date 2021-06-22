import React, { Component } from "react";
import "../../css/loading.css";
import "../../css/desktop/serverTile.css";
const loading = {
    height: "50px",
    width: "50px",
    border: "3px solid rgba(196, 22, 27, 0.5)",
    borderRadius: "50%",
}

class MCServerTile extends Component{
    constructor(){
        super();
        this.state = {
            isLoading: true,
            creative: {},
            survival: {}
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        })
        this.callCreative()
              .then(res => this.setState({creative: res.success}))
              .catch(err => console.log(err));
        this.callSurvival()
            .then(res => this.setState({survival: res.success}))
            .catch(err => console.log(err));
    }

    callSurvival = async () => {
        const response = await fetch('/api/survival');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        
        return body;
    };
    callCreative = async () => {
        const response = await fetch('/api/creative');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        
        return body;
    };
    render(){
        return(
            <React.Fragment>
            { this.state.isLoading ? <div className="loading" style={loading}></div> : 
                <div className="mcTile" id="mcSurvival">   
                    <div className="serverTitle">
                        <h2>Survival:</h2>
                        {this.state.survival.motd !== undefined? <h2 style={{backgroundColor: "green", padding:"0px 5px"}}>ONLINE</h2>:<h2 style={{backgroundColor: "red", padding:"0px 5px"}}>OFFLINE</h2>}
                    </div>
                    <h5>MOTD: {this.state.survival.motd}</h5>
                    <h4>Players: {this.state.survival.online_players} / {this.state.survival.max_players}</h4>
                    <h5>Version: {this.state.survival.version}</h5>
                    <div className="playerlist">
                        <ol>
                        {
                            this.state.survival.players !== undefined && this.state.survival.players.length !== 0 ? this.state.survival.players.map((players) => <li>{players}</li>):
                            <li className="no_players">No Players Online</li>
                        }
                        </ol>
                    </div>
                </div>
            }
            { this.state.isLoading ? <div className="loading" style={loading}></div> : 
                <div className="mcTile" id="mcCreative">
                    <div className="serverTitle">
                        <h2>Creative:</h2>
                        {this.state.creative.motd !== undefined? <h2 style={{backgroundColor: "green", padding:"0px 5px"}}>ONLINE</h2>:<h2 style={{backgroundColor: "red", padding:"0px 5px"}}>OFFLINE</h2>}
                    </div>
                    <h5>MOTD: {this.state.creative.motd}</h5>
                    <h4>Players: {this.state.creative.online_players} / {this.state.creative.max_players}</h4>
                    <h5>Version: {this.state.creative.version}</h5>
                    <div className="playerlist">
                        <ol>
                        {
                            this.state.creative.players !== undefined && this.state.creative.players.length !== 0 ? this.state.creative.players.map((players) => <li>{players}</li>):
                            <li className="no_players">No Players Online</li>
                        }
                        </ol>
                    </div>
                </div>
            }
            </React.Fragment>
        )
    }
}
export default MCServerTile;
///<Loader type="RevolvingDot" color="#c4161b" height={100} width={100}/>