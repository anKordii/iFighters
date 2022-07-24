import React, { useEffect, useState } from "react";
import {Line} from './'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import news from "./components/styles/news.module.css"
import SkeletonNews from '../skeletons/SkeletonNews';
import { PlayerName, WalkaOPas} from '../backend/functions'

function Projects() {
  const [mistrzostwa, setMistrzostwa] = useState(null);

  useEffect(() => {
    setTimeout( async () => {
      const res = await fetch('https://api.ifighters.win/XD/latest').catch(error => {console.log(error);});
      const data = await res.json();
      if(res.status === 200){setMistrzostwa(data);}
      else{setMistrzostwa([{"id":999999,"federation":"famemma","edition":0,"winner":"BRAK-ZAWODNIKA","fighter1":"BRAK-ZAWODNIKA","fighter2":"BRAK-ZAWODNIKA","type":null}]);}
    }, 3000)
  }, [])

  return (
      <section>
        <Line />
        <div className="container mt-5 bb__panel">
            <div className="row justify-content-center">
                
                <div className="col-sm-9 mt-2">
                    <h2 className="przewodni" style={{fontWeight: '200', color: 'var(--fight-tekst)'}}>Ostatnie walki o <strong style={{fontWeight: '800', color: 'white'}}>MISTRZOSTWO</strong></h2>
                        {mistrzostwa && mistrzostwa.map(i => (
                            <div className={`${'p-4 m-3'} ${news.article}`}>
                                <div className="text-end">
                                    <span className={news.new}>NEW</span>
                                </div>
                                <h2>
                                    <PlayerName data={i.fighter1}/> <strong>vs</strong> <PlayerName data={i.fighter2} />
                                </h2>
                                <p>
                                    <WalkaOPas data={i.type} title={i.type_title} /> 
                                    &nbsp;<img src={`${"https://storage.ifighters.win/events/"+i.federation+".png"}`} alt={i.edition} className='img-fluid' style={{height: '1em'}}/> 
                                    &nbsp;<strong>{i.edition}</strong>
                                </p>
                                ZWYCIĘZCA <br/>
                                <span className={news.winner}>
                                    <PlayerName data={i.winner}/>
                                </span>
                            </div>
                        ))}
                        {!mistrzostwa && [1,2,3].map((numbers) => <SkeletonNews key={numbers} />)}
                </div>

                <div className="col-sm-3 mt-2">
                    <h2 className="przewodni" style={{fontWeight: '200'}}>Twitter</h2>
                    <div className="p-2" style={{backgroundColor: 'black', borderRadius: '5px'}}>
                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="ifighterswin"
                            noScrollbar
                            noBorders="true"
                            noFooter="true"
                            theme="dark"
                            transparent
                            options={{height: 400}} />
                    </div>
                </div>
            </div>
        </div>
      </section>
  );
}

export default Projects;