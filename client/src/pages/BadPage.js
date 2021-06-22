import React from 'react';

import "../components/css/main.css"
import "../components/css/badpage.css"

import Back from "../components/Background";
import S8head from '../components/head/S8head';

export default function BadPage() {
    return (
        <React.Fragment>
            <S8head/>
            <div className="upper">
                <div id="badpage">
                    <h1>404 Page Not Found</h1>
                </div>
            </div>
            <Back/>
        </React.Fragment>
    )
}