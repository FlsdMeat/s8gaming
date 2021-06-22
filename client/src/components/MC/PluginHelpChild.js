import "../css/minecraft/plugin-help-child.css"
export default function PluginHelpChild(props){
    return(
        <div className="plugin-help-child">
            <div>
                <h3>{props.title}</h3>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}