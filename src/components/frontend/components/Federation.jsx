import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router';
import news from "./styles/news.module.css";
import styles from "./styles/wiki.module.css";
import SkeletonLatest from '../../skeletons/SkeletonLatest';
import {PlayerName} from '../../backend/functions';

const Federation = () => {
    const [ostatniewalki, setOstatniewalki] = useState(null);
    let { id } = useParams();
    const routerHistory = useHistory();

  useEffect(() => {
    setTimeout( async () => {
      const res = await fetch('https://api.ifighters.win/federacje/walki/'+id).catch(error => {console.log(error);});
      const data = await res.json();
      if(res.status === 200){
        const cats = data.reduce((catsSoFar, currentValue) => {
            if (!catsSoFar[currentValue['edition']]) catsSoFar[currentValue['edition']] = [];
            catsSoFar[currentValue['edition']].push(currentValue);
            return catsSoFar;
        }, {});
        setOstatniewalki(cats)
      }
      else{setOstatniewalki([{"id":999999,"federation":"famemma","edition":0,"winner":"BRAK-ZAWODNIKA","fighter1":"BRAK-ZAWODNIKA","fighter2":"BRAK-ZAWODNIKA","type":null}]);}
    }, 3000)
  }, [id, routerHistory])

  return (
      <section>
        <Helmet>
            <title>Wszystkie walki {id.toUpperCase()} - iFighters</title>
        </Helmet>
        <div className="container mt-5 bb__panel pb-5">
            <div className="row">
                <div className="col-md-12 mb-2">
                    <h2 style={{fontWeight: '100', color: 'var(--fight-tekst)'}}>Wszystkie zarejestrowane walki <strong style={{textTransform: 'uppercase', color: 'white', fontWeight: 'bold'}}>{id}</strong></h2>
                </div>
                <div className={`${'col-md-12'}`} >
                    <div className={`${'justify-content-center'} ${styles.fighters}`} id="fightslist">
                        {
                        ostatniewalki && ostatniewalki.map((propKey) => {
                        <li key={propKey}>
                            {this.props.data[propKey]}
                            <ul>            
                                {Object.keys(this.props.data[propKey]).map((childPropKey) => {
                                    <li key={childPropKey}>
                                        {this.props.data[propKey][childPropKey]}
                                    </li>
                                })}
                            </ul>
                        </li>
                        })
                        /*ostatniewalki && ostatniewalki.map(i => (
                            <div className={`${'p-4 m-3'} ${news.article} ${styles.latest__fights}`} style={{textAlign: 'center'}}>
                                <h2 >
                                    <PlayerName data={i.fighter1}/> <br/><strong>vs</strong><br/> <PlayerName data={i.fighter2} />
                                </h2>
                                <p style={{borderTop: '1px solid var(--fight-tlo)'}}>
                                    <br/>
                                    <img src={`${"https://storage.ifighters.win/events/"+i.federation+".png"}`} alt={i.edition} className='img-fluid' style={{height: '2em'}}/> 
                                    &nbsp;<strong style={{color: 'var(--fight-przewodni)'}}>{i.edition}</strong>
                                </p>
                            </div>
                        ))*/}
                        {!ostatniewalki && [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((numbers) => <SkeletonLatest key={numbers} />)}
                    </div>
                </div>
            </div>
        </div>
      </section>
  );
}

export default Federation;