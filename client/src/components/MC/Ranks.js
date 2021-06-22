export default function Ranks(props){
    return(
        <div style={{backgroundColor:props.color}} className="ranks-tiles">
            <h3>{props.rankName}</h3>
            <h4>Hours: {props.rankHour} Homes: {props.homes}</h4>
            <h4>Rewards: ☭{props.money}{props.children}</h4>
            <h4>Claim Size: {props.blocks}</h4>
        </div>
    )
}