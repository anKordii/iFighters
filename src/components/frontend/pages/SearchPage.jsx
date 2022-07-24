import React, { useState, useEffect } from "react";
import styles from "../components/styles/wiki.module.css"

function SearchPage() {
    const [APIData, setAPIData] = useState([])
    const [Loading, setLoading] = useState(null)
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        setTimeout( async () => {
            const res = await fetch('https://api.ifighters.win/internal/search').catch(error => {console.log(error);});
            const data = await res.json();
            setAPIData(data)
            setLoading(data)
          }, 2000)
    }, [])
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }
    }

    return (
          <section>
            <div className="container mt-5 bb__panel" style={{minHeight: '600px'}}>
                <div className="row">
                    <div className="col-md-12 mb-2 p-4" style={{borderRadius: '20px', backgroundColor: 'var(--fight-tlo-akcent)'}}>
                        <h2>Wyszukiwarka</h2>
                        <input style={{width: '100%'}} className="btn__better_white"
                            placeholder='Szukaj...'
                            onChange={(e) => searchItems(e.target.value)}
                        />
                    </div>
                    <div className="col-md-12 mt-5">
                        <div className={`${'justify-content-md-center'} ${styles.fighters}`}>
                        {searchInput.length > 1 ? (
                            filteredResults.map((item) => {
                                    return (
                                        <div className='col-xs-3 col-lg-2 p-2 ms-2 me-2 mb-2' style={{backgroundColor: 'rgb(0 0 0 / 23%)', borderRadius: '5px'}}>
                                            <a href={"/fighter/"+item.name_line}>
                                                <div className="text-center">
                                                    <img src={item.avatar} className="img-fluid" style={{height: '150px'}} alt={item.name}></img>
                                                </div>
                                                <div className='m-2'>
                                                    <h4>{item.nickname}</h4>
                                                    <p>{item.name}</p>
                                                </div>
                                            </a>
                                        </div>)
                                })
                                ) : (
                                    APIData.map((item) => {
                                    return (
                                        <div className='col-xs-3 col-lg-2 p-2 ms-2 me-2 mb-2' style={{backgroundColor: 'rgb(0 0 0 / 23%)', borderRadius: '5px'}}>
                                            <a href={"/fighter/"+item.name_line}>
                                                <div className="text-center">
                                                    <img src={item.avatar} className="img-fluid" style={{height: '150px'}} alt={item.name}></img>
                                                </div>
                                                <div className='m-2'>
                                                    <h4 style={{color: 'var(--fight-przewodni)'}}>{item.nickname}</h4>
                                                    <p>{item.name}</p>
                                                </div>
                                            </a>
                                        </div>
                                    )
                                })
                            )}
                        </div>
                    </div>
                    {!Loading && <div className="center__loading">
                            <div className="bar bar1"></div>
                            <div className="bar bar2"></div>
                            <div className="bar bar3"></div>
                            <div className="bar bar4"></div>
                            <div className="bar bar5"></div>
                            <div className="bar bar6"></div>
                            <div className="bar bar7"></div>
                            <div className="bar bar8"></div>
                            </div>}
                </div>
            </div>
          </section>
      );
}

export default SearchPage;