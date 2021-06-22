import React, {Component} from 'react';
import S8RulesMc from '../S8MainPageRules';
import "./mc.css"
import {Link} from "react-router-dom"

class MCinfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            showRules: "none"
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(() => {
            if(this.state.showRules === "none") return{ showRules: "block" };
            return{ showRules: "none" };
        });
    }

    render(){
        return(
            <React.Fragment>
                <div id="left-container">
                    <div id="mc-info-container">
                        <div className="list">
                            <h1>S8 Minecraft Server</h1>
                            <h3>play.s8gaming.net</h3>
                            <h2>Staff:</h2>
                                <div id="Admins">
                                    <h3>FlossedMeat</h3>
                                </div>
                            <h2>Server Info: </h2>
                                <div className="ServerInfo">
                                    <ul>
                                        <h4>Hosted by FlossedMeat</h4>
                                        <h4>BungeeCord Proxy</h4>
                                        <h4>Regular Server Restarts Every 6 Hours</h4>
                                        <h4>Full Server Host Restart 2x a week</h4>
                                    </ul>
                                </div>
                            <div id="bottom-of-mc-info">
                                <button onClick={this.handleClick}><h3>Rule List</h3></button>
                                <button><Link to="/minecraft"><h3>More Info</h3></Link></button>
                            </div>
                            </div>
                        <div style={{display:this.state.showRules}}>
                            <S8RulesMc button={this.handleClick}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default MCinfo;
//<div id="tile-container"><MCServerTile/></div>