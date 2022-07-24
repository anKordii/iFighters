var AdminHelp = function(props) {
    if(localStorage.getItem('admin-pass') === 'chujcidotego'){
        return (
          <a href={"https://dash.ifighters.win/admin/fighter/"+props.userID} style={{float: 'right', color: "#adadad"}} className="me-4 ms-4 d-inline"> Edytuj</a>
        );
    }else{
        return (null);
    }
}
export default AdminHelp;