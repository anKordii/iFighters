var WalkaOPas = function(props) {
    if(props.data === 'PAS'){
        return (
            <em><strong>Walka O PAS ( <font style={{color: 'var(--fight-tekst)', fontWeight: 'normal'}}>{props.title}</font> ) -</strong></em>
        )
    }else{
        return (null)
    }
}
export default WalkaOPas;