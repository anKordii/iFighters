/* 
Powodzenia przyszły ja w tym spaghetti pierdolonym 👍
00:07 2022-04-12


A function that takes in two props, data and fighterName. It then uses the reduce method to count
the number of times the fighterName prop is not the winner of the match.
 */

var CountScore = function(props) {
    let array = props.data;
    let playerName = props.fighterName;
    let enemyName;
    const count = array.reduce((acc, m) => {

        if(playerName === m.fighter1){enemyName = m.fighter2
        }else if(playerName === m.fighter2){enemyName = m.fighter1}

        if (m.winner === enemyName) {
            acc+= 1;
        }

        return (acc);
    }, 0);
      return (count);
}
export default CountScore;