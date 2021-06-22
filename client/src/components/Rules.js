export default function Rules(props){
    return(
        <div>
            <h3 className="rules-title">{props.title}</h3>
            <ol>
                {props.children}
            </ol>
        </div>
    )
}
