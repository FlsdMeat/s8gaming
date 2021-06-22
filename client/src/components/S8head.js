import React from 'react';
import Voice from './Voice/Voice';
import "../css/desktop/banner.css"

function S8head(){
    return (
        <div className="banner">
        <div id="topLeftCorner"></div>
        <nav>
            <a href="#home">
                <h2>HOME</h2>
            </a>
            <a href="#bottom">
                <h2>ABOUT US</h2>
            </a>
            <a href="#mc">
                <h2>Minecraft</h2>
            </a>
        </nav>
        <Voice/>
      </div>
    );
}
export default S8head;