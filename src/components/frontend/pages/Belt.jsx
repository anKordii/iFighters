import { Helmet } from 'react-helmet';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import styles from "../components/styles/wiki.module.css"
import SkeletonFighters from '../../skeletons/SkeletonFighters';
import {AdminHelp} from '../../backend/functions'

function Belt() {
    const [belts, setBelts] = useState(null);

      // runs automatically after initial render
    useEffect(() => {
        setTimeout( async () => {
        const res = await fetch('https://api.ifighters.win/internal/belts');
        const data = await res.json();
        setBelts(data);
        }, 3000)
    }, [])
  return (
      <section>
        <Helmet>
            <title>Mistrzowie - iFighters</title>
        </Helmet>
        <div className="container mt-5 bb__panel pb-5">
        <div className="row">
            <div className="col-sm-3">
                <ul>
                    <li className="p-2"><Link to={`/wiki`} className={styles.ahref}>Fighters Wiki</Link></li>
                    <li className="p-2 bb__active"><Link to={`/champions`} className={styles.ahrefA}>Mistrzowie</Link></li>
                    <li className="p-2"><Link to={`/new`} className={styles.ahref}>Nowe twarze</Link></li>
                </ul>
            </div>
            <div className="col-sm-9">
                <div>
                    <h1 className="d-inline">Mistrzowie</h1>
                    <div className="float-end"></div>
                    <p>Mistrzowie ze wspieranych federacji.</p>
                </div>

                <div className={styles.fighters}>

                {belts && belts.map(belt => (
                  <div className="col-sm-6 col-md-5 col-lg-4 fighter">
                    <div className="box m-2 p-2 wiki__list">
                      <div className='text-center'>
                        <img className={styles.fighter_avatar} src={belt.avatar} alt="avatar"/>
                        <div className="win__block"> CHAMPION </div>
                      </div>
                      <h4 className={`${'mt-2'} ${styles.fighter_nickname}`}>{belt.nickname}</h4>
                      <h3 className="fighter_name">{belt.name}</h3>
                      <Link to={`/fighter/${belt.name_line}`} className='learn-more'>Pokaż profil »</Link>
                      <AdminHelp userID={belt.name_line}/>
                    </div>
                  </div>
                ))}

                {!belts && [1,2,3,4,5,6].map((n) => <SkeletonFighters key={n} />)}

                </div>
            </div>
        </div>
    </div>
      </section>
  );
}

export default Belt;