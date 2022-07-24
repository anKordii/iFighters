var ChampionProfile = function(props) {
    if(props.belt !== 'None'){
        return (
          <div className="win__block text-center"> CHAMPION </div>
        );
      }else{
        return (null);
      }
}
export default ChampionProfile;