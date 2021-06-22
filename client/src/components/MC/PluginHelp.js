import "../css/minecraft/plugin-help.css"
export default function PluginHelp(props){
    return(
        <section id={props.idkey}>
            <div className="plugin-help-container">
                <a className="redButton" href={props.url}><h2>{props.title}</h2></a>
                <p>{props.description}</p>
                <div className="plugin-help-children">{props.children}</div>
            </div>
        </section>
    )
}