import React, {Component} from 'react';
import MCServerTile from './MCServerTile';
import S8RulesMc from '../S8RulesMc';
import "../../css/desktop/mc.css"

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
                <div id="left-mc-container">
                    <div className="list">
                        <h2>Minecraft Server</h2>
                        <h4>play.s8gaming.net</h4>
                        <h3>Admins:</h3>
                            <div id="Admins">
                                <h4>FlossedMeat</h4>
                                <h4>Jogr0XD</h4>
                            </div>
                        <h3>Server Info: </h3>
                            <div className="ServerInfo">
                                <ul>
                                    <li>A map of each server</li>
                                    <li>Permission list in for Roles</li>
                                </ul>
                            </div>
                        <button onClick={this.handleClick}><h3>Rule List</h3></button>
                        </div>
                    <div style={{display:this.state.showRules}}>
                        <S8RulesMc button={this.handleClick}/>
                    </div>
                </div>
                <div id="tile-container"><MCServerTile/></div>
            </React.Fragment>
        )
    }
}
export default MCinfo;