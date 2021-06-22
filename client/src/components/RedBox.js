import "./css/redbox.css"
export default function RedBox(props){
    return(
        <div className="redbox-layout" style={{backdropFilter:"blur("+props.filter+")"}}>
            <div className="redbox-container" style={{width:props.width, height:props.height, ...(props.center && {justifyContent:"center", alignItems:"center"})}}>
                <button className="redbox-close" onClick={props.click}>x</button>
                {props.children}
            </div>
        </div>
    )
}