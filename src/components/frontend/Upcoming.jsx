import React, { useEffect, useState } from "react";
import news from "./components/styles/news.module.css"
import styles from "./components/styles/wiki.module.css"
import { PlayerName} from '../backend/functions'
import SkeletonLatest from '../skeletons/SkeletonLatest';

function Upcoming() {
    const [ostatniewalki, setOstatniewalki] = useState(null);

    useEffect(() => {
      setTimeout( async () => {
        const res = await fetch('https://api.ifighters.win/XD/latest-fights').catch(error => {console.log(error);});
        const data = await res.json();
        if(res.status === 200){setOstatniewalki(data);}
        else{setOstatniewalki([{"id":999999,"federation":"famemma","edition":0,"winner":"BRAK-ZAWODNIKA","fighter1":"BRAK-ZAWODNIKA","fighter2":"BRAK-ZAWODNIKA","type":null}]);}
      }, 3000)
    }, [])

  return (
      <section>
        <div className="container mt-5 bb__panel pb-5">
            <div className="row">
                <div className="col-md-12 mb-2">
                    <h2>Ostatnie walki</h2>
                    <p>Ostatnie walki dodane do systemu</p>
                </div>
                <div className={`${'col-md-12'}`} >
                    <div className={`${'justify-content-center'} ${styles.fighters}`}>
                        {ostatniewalki && ostatniewalki.map(i => (
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
                        ))}
                        {!ostatniewalki && [1,2,3,4,5,6].map((numbers) => <SkeletonLatest key={numbers} />)}
                    </div>
                </div>
            </div>
        </div>
      </section>
  );
}

export default Upcoming;