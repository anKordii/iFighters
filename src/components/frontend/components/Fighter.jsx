import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { useParams } from "react-router-dom";
import MarkdownIt from 'markdown-it';
import { useHistory } from 'react-router';
import styles from "./styles/fighter_profile.module.css"
import SkeletonProfile from '../../skeletons/SkeletonProfile';
import { AdminHelp, ChampionProfile, PlayerName, WalkaOPas, CountScore } from '../../backend/functions'

const Fighter = () => {
    const [profile, setProfile] = useState(null);
    const [fights, setFights] = useState(null);
    let { id } = useParams();
    const routerHistory = useHistory();
    var md;
    md = new MarkdownIt();

  // runs automatically after initial render
  useEffect(() => {
    setTimeout( async () => {
      const res = await fetch('https://api.ifighters.win/internal/fighter/'+id).catch(error => {console.log(error);});
      const data = await res.json();
      if(res.status === 200){setProfile(data);}
      else{routerHistory.push('/404');}
    }, 3000)
  }, [id, routerHistory])
  useEffect(() => {
    setTimeout( async () => {
      const res = await fetch('https://api.ifighters.win/XD/walka/'+id).catch(error => {console.log(error);});
      const data = await res.json();
      if(res.status === 200){setFights(data);}
      else{setFights([{"id":999999,"federation":"famemma","edition":0,"winner":"BRAK-ZAWODNIKA","fighter1":"BRAK-ZAWODNIKA","fighter2":"BRAK-ZAWODNIKA","type":null}]);}
    }, 3000)
  }, [id, routerHistory])

  return (
      <div className="container pt-5 mt-5">

          {profile && (<div className="row">
              <Helmet>
                <title>{profile.name} - iFighters</title>
                <meta property="og:image"  content={profile.avatar} />
                <meta name="twitter:image" content={profile.avatar} />
              </Helmet>
              <div className="col-sm-3 fighter_stats">
                <div className="text-center" style={{position: 'relative', top: '0', left: '0'}}>
                  <img className="img-fluid" src={profile.avatar} alt="avatar" style={{height: '250px', position: 'relative', top: '0', left: '0'}}/>
                  <img src="https://i.imgur.com/sxftdG4.png" alt="crown" style={{position: 'absolute', bottom: '200px', left: '0', transform: 'rotateZ(339deg)'}}/>
                </div>
                <ChampionProfile belt={profile.belt} />
                <h4 className={`${'mt-2'} ${styles.fighter_nickname}`}>{profile.nickname}</h4>
                <h3 className="fighter_name">{profile.name}</h3>
                <hr style={{backgroundColor: '#3a424c', width: '50%'}} />
                <div className="pb-2 pt-2">
                    <p className={styles.blue}>Wynik</p>
                    {fights && (
                      <small>

                      <strong style={{color: 'white'}}>
                        {fights.reduce((a, v) => (v.winner === id ? a + 1 : a), 0)}
                      </strong> Wygranych 

                      &nbsp;<strong style={{color: 'white'}}>/</strong>&nbsp;

                      <strong style={{color: 'white'}}>
                        <CountScore data={fights} fighterName={id}/>
                      </strong> Przegranych

                      </small>
                    )}
                </div>
                <hr style={{backgroundColor: '#3a424c', width: '70%'}} />
                <div className="pb-2 pt-2">
                    <p className={styles.blue}>Zakontraktowany z</p>
                    <small className={styles.famemma}>{profile.contracted}</small>
                </div>
                <hr style={{backgroundColor: '#3a424c', width: '50%'}} />
                <div className="pb-2 pt-2">
                    <p className={styles.blue}>Mistrzostwa</p>
                    <small className={styles.famemma}>{profile.belt}</small>
                </div>
                <hr style={{backgroundColor: '#3a424c', width: '70%'}} />
              </div>
              <div className="col-sm-9 tablediv">
                <div className="mb-3">
                  <h2 className="d-inline">Kariera</h2>
                  <AdminHelp userID={id} />
                </div>
                  <div dangerouslySetInnerHTML={{__html: md.render(profile.markdown_description)}} />
                <div className="mb-3 mt-3">
                  <h2 className="d-inline">Historia walk</h2>
                </div>

                <table>
                  <thead>
                    <tr>
                      <th>Federacja</th>
                      <th>Zwycięzca</th>
                      <th>Zawodnicy</th>
                      </tr>
                  </thead>
                  <tbody>
                  {fights && fights.map(fight => (
                    <tr>
                      <td><img src={`${"https://storage.ifighters.win/events/"+fight.federation+".png"}`} alt={fight.edition} /> <strong>{fight.edition}</strong></td>
                      <td><PlayerName data={fight.winner} /></td>
                      <td><WalkaOPas data={fight.type} title={fight.type_title} /> <PlayerName data={fight.fighter1} /> <strong>VS</strong> <PlayerName data={fight.fighter2} /></td>
                    </tr>
                  ))}
                  </tbody>
                </table>

              </div>
          </div>)}
          {!profile && <SkeletonProfile />}
      </div>
  );
}

export default Fighter;