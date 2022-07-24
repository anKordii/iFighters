import { Helmet } from 'react-helmet';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import styles from "../components/styles/wiki.module.css";
import SkeletonFighters from '../../skeletons/SkeletonFighters';
import {AdminHelp} from '../../backend/functions';

function New() {
    const [newFighters, setnewFighters] = useState(null);

      // runs automatically after initial render
    useEffect(() => {
        setTimeout( async () => {
        const res = await fetch('https://api.ifighters.win/internal/newfighters');
        const data = await res.json();
        setnewFighters(data);
        }, 3000)
    }, [])
  return (
      <section>
        <Helmet>
            <title>Nowe twarze - iFighters</title>
        </Helmet>
        <div className="container mt-5 bb__panel pb-5">
        <div className="row">
            <div className="col-sm-3">
                <ul>
                    <li className="p-2"><Link to={`/wiki`} className={styles.ahref}>Fighters Wiki</Link></li>
                    <li className="p-2"><Link to={`/champions`} className={styles.ahref}>Mistrzowie</Link></li>
                    <li className="p-2 bb__active"><Link to={`/new`} className={styles.ahrefA}>Nowe twarze</Link></li>
                </ul>
            </div>
            <div className="col-sm-9">
                <div>
                    <h1 className="d-inline">Nowe twarze</h1>
                    <div className="float-end"></div>
                    <p>Nowi zawodnicy ze wspieranych federacji.</p>
                </div>

                <div className={styles.fighters}>

                {newFighters && newFighters.map(newfighter => (
                  <div className="col-sm-6 col-md-5 col-lg-4 fighter">
                    <div className="box m-2 p-2 wiki__list">
                      <div className='text-center'>
                        <img className={styles.fighter_avatar} src={newfighter.avatar} alt="avatar"/>
                      </div>
                      <h4 className={`${'mt-2'} ${styles.fighter_nickname}`}>{newfighter.nickname}</h4>
                      <h3 className="fighter_name">{newfighter.name}</h3>
                      <Link to={`/fighter/${newfighter.name_line}`} className='learn-more'>Pokaż profil »</Link>
                      <AdminHelp userID={newfighter.name_line}/>
                    </div>
                  </div>
                ))}

                {!newFighters && [1,2,3,4,5,6,8,9,10].map((numbers) => <SkeletonFighters key={numbers} />)}

                </div>
            </div>
        </div>
    </div>
      </section>
  );
}

export default New;