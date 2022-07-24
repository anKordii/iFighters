import { Helmet } from 'react-helmet';
import React from "react";
import { Link } from 'react-router-dom';
import {japczan, nitro, polak, takefun } from '../../../assets/img/mPopular'
import styles from "../components/styles/wiki.module.css"

function Wiki() {
  return (
      <section>
        <Helmet>
            <title>Fighters Wiki - iFighters</title>
        </Helmet>
        <div className="container mt-5 bb__panel pb-5">
        <div className="row">
            <div className="col-sm-3">
                <ul>
                    <li className="p-2 bb__active"><Link to={`/wiki`} className={styles.ahrefA}>Fighters Wiki</Link></li>
                    <li className="p-2"><Link to={`/champions`} className={styles.ahref}>Mistrzowie</Link></li>
                    <li className="p-2"><Link to={`/new`} className={styles.ahref}>Nowe twarze</Link></li>
                </ul>
            </div>
            <div className="col-sm-9">
                <div>
                    <h1 className="d-inline">Popularne twarze</h1>
                    <p>Wschodzące gwiazdy.</p>
                </div>

                <div className={styles.fighters}>

                <div className="col-sm-6 col-md-5 col-lg-4 fighter">
                    <div className="box m-2 p-2 wiki__list">
                      <div className='text-center'>
                        <img className={styles.fighter_avatar} src="https://storage.ifighters.win/famemma14/XAYOO_ZAWODNICY_FAME_14.webp" alt="avatar"/>
                      </div>
                      <h4 className={`${'mt-2'} ${styles.fighter_nickname}`}>Xayoo</h4>
                      <h3 className="fighter_name">Marcin Majkut</h3>
                      <Link to={`/fighter/marcin-majkut`} className='learn-more'>Pokaż profil »</Link>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-5 col-lg-4 fighter">
                    <div className="box m-2 p-2 wiki__list">
                      <div className='text-center'>
                        <img className={styles.fighter_avatar} src={polak} alt="avatar"/>
                      </div>
                      <h4 className={`${'mt-2'} ${styles.fighter_nickname}`}>Polak</h4>
                      <h3 className="fighter_name">Adrian Polański</h3>
                      <Link to={`/fighter/adrian-polanski`} className='learn-more'>Pokaż profil »</Link>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-5 col-lg-4 fighter">
                    <div className="box m-2 p-2 wiki__list">
                      <div className='text-center'>
                        <img className={styles.fighter_avatar} src="https://storage.ifighters.win/famemma14/FAGATA_ZAWODNICY_FAME_14.webp" alt="avatar"/>
                      </div>
                      <h4 className={`${'mt-2'} ${styles.fighter_nickname}`}>Fagata</h4>
                      <h3 className="fighter_name">Agata Fąk</h3>
                      <Link to={`/fighter/agata-fak`} className='learn-more'>Pokaż profil »</Link>
                    </div>
                  </div>
                  
                  
                  <div className="col-sm-6 col-md-5 col-lg-4 fighter">
                    <div className="box m-2 p-2 wiki__list">
                      <div className='text-center'>
                        <img className={styles.fighter_avatar} src={japczan} alt="avatar"/>
                      </div>
                      <h4 className={`${'mt-2'} ${styles.fighter_nickname}`}>Japczan</h4>
                      <h3 className="fighter_name">Jakub Piotrowicz</h3>
                      <Link to={`/fighter/jakub-piotrowicz`} className='learn-more'>Pokaż profil »</Link>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-5 col-lg-4 fighter">
                    <div className="box m-2 p-2 wiki__list">
                      <div className='text-center'>
                        <img className={styles.fighter_avatar} src={nitro} alt="avatar"/>
                      </div>
                      <h4 className={`${'mt-2'} ${styles.fighter_nickname}`}>Nitro</h4>
                      <h3 className="fighter_name">Sergiusz Górski</h3>
                      <Link to={`/fighter/sergiusz-gorski`} className='learn-more'>Pokaż profil »</Link>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-5 col-lg-4 fighter">
                    <div className="box m-2 p-2 wiki__list">
                      <div className='text-center'>
                        <img className={styles.fighter_avatar} src={takefun} alt="avatar"/>
                      </div>
                      <h4 className={`${'mt-2'} ${styles.fighter_nickname}`}>Takefun</h4>
                      <h3 className="fighter_name">Rafał Górniak</h3>
                      <Link to={`/fighter/rafal-gorniak`} className='learn-more'>Pokaż profil »</Link>
                    </div>
                  </div>

                </div>
            </div>
        </div>
    </div>
      </section>
  );
}

export default Wiki;