var PlayerName = function(props) {
    let spliting = props.data.split('-');

    return (<a href={`/fighter/${props.data}`} style={{color: 'inherit'}}>{spliting[0]} {spliting[1]}</a>)
}
export default PlayerName;