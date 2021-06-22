import React, { useState } from 'react';
import Voice from './Voice/Voice';
import "./banner.css"
import "./nav.css"
import { Link } from "react-router-dom";


export default function S8head(){
    return (
        <div className="banner">
            <div id="topLeftCorner"></div>
            <nav>
                <ul>
                    <NavItem to="/" name="HOME"/>
                    <NavItem to="/minecraft" name="Minecraft"/>
                </ul>
            </nav>
            <Voice/>
      </div>
    );
};

function NavItem(props){
    const [open, setOpen] = useState(false);
    return(
        <li className="nav-child" onMouseEnter={() => {setOpen(true); console.log()}} onMouseLeave={()=>setOpen(false)}>
            <Link to={props.to}>
                <h2>{props.name}</h2>
            </Link>
        </li>
    )
};