import React, { useState } from "react";

import Back from "../components/Background";
import S8head from '../components/head/S8head';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import "../components/css/application.css"
import RedBox from "../components/RedBox";

export default function SignUp(){
    const [name, Setname] = useState("");
    const [email, Setemail] = useState("");
    const [dName, SetDName] = useState("");
    const [oName, SetOName] = useState("");
    const [apply, SetApply] = useState("Designer");
    const [applicationHelp, SetHelp] = useState("none");
    const [why, SetWhy] = useState("");
    const [cannotSend, SetCannot] = useState("none");
    const [appSent, SetAppSent] = useState("none");

    const Submit = () =>{
        if(name !== "" && email !== "" && dName !== "" && oName !== "" && why !== ""){
            const message = {
                name:name,
                email:email,
                discord:dName, 
                other:oName, 
                for:apply, 
                text:why.slice(why.indexOf(">")+1, - 4)
            }
            axios.post("/api/application", message)
            .then((res) => {
                if(res.data === true){
                    console.log(res.data)
                    SetCannot("block")
                } else {
                    console.log(res.data)
                    SetAppSent("block")
                }
            }).catch((error) => {
                console.log(error)
            });
        }
    }
    return(
        <React.Fragment>
            <S8head/>
            <div className="upper">
                <section>
                    <h1>Application for Staff Role</h1>
                    <div id="application">
                        <h3>Name</h3>
                        <input className="application-inputs" type="text" id="name" value={name} required onChange={e=>{Setname(e.target.value)}}/>
                        
                        <h3>Email</h3>
                        <input className="application-inputs" type="email" id="email" value={email} required onChange={e=>{Setemail(e.target.value)}}/>
                        
                        <h3>Discord Username and ID</h3>
                        <input className="application-inputs" type="discord" value={dName} required onChange={e=>{SetDName(e.target.value)}}/>
                        
                        <h3>Other Usernames, ex:Minecraft, Steam...</h3>
                        <input className="application-inputs" type="username" id="other" value={oName} onChange={e=>{SetOName(e.target.value)}}/>
                        
                        <h3>Applying for:</h3>
                        <div id="application-where">
                            <label>Designer</label>
                            <input type="radio" name="apply" value="Designer" onClick={()=>{SetApply("Designer")}} defaultChecked/>
                            <label>Builder</label>
                            <input type="radio" name="apply" value="Designer" onClick={()=>{SetApply("Builder")}}/>
                            <label>Moderator</label>
                            <input type="radio" name="apply" value="Designer" onClick={()=>{SetApply("Moderator")}}/>
                            <label>Admin</label>
                            <input type="radio" name="apply" value="Designer" onClick={()=>{SetApply("Admin")}}/>
                            <button id="application-role-help" onClick={()=>SetHelp("flex")}>?</button>
                        </div>
                        <h3>Why you want to apply for a staff role and ideas:</h3>
                        <Editor
                            apiKey="4ug2khe59dfh2084qdx2hi7uwgj8j5v93x3dsh71jrs24spi"
                            initialValue={why}
                            init={{
                            height: 300,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image', 
                                'charmap print preview anchor help',
                                'searchreplace visualblocks code',
                                'insertdatetime media table paste wordcount'
                            ],
                            toolbar:'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | help'}}
                            onEditorChange={content=>{SetWhy(content)}}
                        />
                    </div>
                    <button id="application-submit" onClick={()=>Submit()}>Submit</button>
                    <div style={{display:applicationHelp}}>
                        <HelpWindow click={()=>SetHelp("none")}/>
                    </div>
                    <div style={{display:cannotSend}}>
                        <RedBox height="30%" width="60%" filter="2px" click={()=>SetCannot("none")}>
                            <h2>
                                Either you have already sent an appliction under that email or our server is acting up, contact flossedmeat@s8gaming.net
                            </h2>
                        </RedBox>
                    </div>
                    <div style={{display:appSent}}>
                        <RedBox center="true" height="25%" width="50%" filter="2px" click={()=>SetAppSent("none")}>
                            <h2>
                                Application Sent!
                            </h2>
                        </RedBox>
                    </div>
                </section>
            </div>
            <Back/>
        </React.Fragment>
    )
}

function HelpWindow(props){
    return(
        <RedBox height="70%" width="45%" filter="2px" click={props.click}>
            <h3>Some Expectations of each role. But general guidelines and important info:</h3>
                <ul>
                    <li>- No paid roles</li>
                    <li>- What owner say's goes</li>
                    <li>- If I don't feel like you are doing your job, I am obligated to move you or remove you from your role.</li>
                </ul>
                <br></br>
                <div className="application-help-child">
                    <h2>Designer</h2>
                    <p>This basically comes down to helping design certain aspects of the server. This role is also in conjunction with builders.</p>
                    <p>What is needed is a new icon, banner for advertisement, and helping here and there with website ideas.</p>
                    <p>Also, with this comes desinging whatever has need of a designing perspective, like the plugin for quests, which I need help with dearly!</p>
                </div>
                <br></br>
                <div className="application-help-child">
                    <h3>Builder</h3>
                    <p>Very easy, but also very critical, need people to build in minecraft when needed to. Building arena's, spawns, shops and the such.</p>
                </div>
                <br></br>
                <div className="application-help-child">
                    <h3>Moderator</h3>
                    <p>Just monitor player interaction, help here and there, and make sure nothing gets out of hand. Swearing is allowed persay, but no hate speech or targeting others.</p>
                </div>
                <br></br>
                <div className="application-help-child">
                    <h3>Admin</h3>
                    <p>2nd level Moderator, and also more of a supervisor. I expect things to be handled such as I would, with alot of care but also leanency.</p>
                </div>
                <br></br>
                <p>Subject to change.</p>
        </RedBox>
    )
}