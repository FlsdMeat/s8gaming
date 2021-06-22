import { Component, Fragment } from "react";
import "./maps.css";
export default class MCServerMapLinks extends Component{
    constructor(){
        super();
        this.state = {
            survival: false,
            creative: false
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        })
        this.callCreative()
              .then(res => this.setState({creative: true}))
              .catch(err => console.log(err));
        this.callSurvival()
            .then(res => this.setState({survival: true}))
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
            <Fragment>
                {this.state.creative ? <a id="map2" className="map-child" href="https://www.s8gaming.net/minecraft/creative"><h3>Creative</h3></a> :
                <div id="map2" className="offline-map"><h3>Offline</h3></div>}
            </Fragment>
        )
    }
}