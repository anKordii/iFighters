import React, { useEffect } from "react";
import ReactGA from 'react-ga';
import { withRouter, useLocation, Link } from "react-router-dom";
import logo from '../../assets/img/logo.svg'

ReactGA.initialize('UA-218248816-3');
function Navigation() {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get('ref');

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
  
  if(name == null){
  }else{
    ReactGA.event({
      category: 'Referral',
      action: name
    });
  }
  return (
    <nav className="navbar navbar-light navbar-expand-lg navigation-clean-button" id="topnav">
        <div className="container">
          <Link to={`/`} className="navbar-brand" style={{fontSize: "1.25rem", fontWeight: "bold"}}><img src={logo} className="img-fluid" alt="logo" style={{height: "1em", color: 'red'}}/>iFighters</Link>
          <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-2"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navcol-2">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        Start
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link to={`/wiki`} className="nav-link">Wiki</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#federacje">Federacje</a>
                        <div className="dropdown-menu mb-2" style={{textTransform: "none"}}>
                          <a href={`/federacja/highleague`} className="dropdown-item">High League</a>
                          <a href={`/federacja/famemma`} className="dropdown-item">Fame MMA</a>
                          <a href={`/federacja/primemma`} className="dropdown-item">Prime MMA</a>
                        </div>
                    </li>
                    <li className="nav-item">
                      <Link to={`/searching`} className="nav-link">Szukaj <i className="icon ion-android-search" style={{fontSize: 'inherit'}}></i></Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#contact">Kontakt</a>
                        <div className="dropdown-menu mb-2" style={{textTransform: "none"}}>
                          <a className="dropdown-item" href="https://twitter.com/iFightersWin">Twitter</a>
                          <a className="dropdown-item" href="mailto:kontakt@ifighters.win">Email</a>
                        </div>
                    </li>
                </ul>
                <span className="navbar-text actions">
                  <a className="p-3" rel="noreferrer" href="https://twitter.com/iFightersWin"><i className="icon ion-social-twitter"></i></a>
                  <a className="p-3" rel="noreferrer" href="https://ko-fi.com/betterbrime"><i className="icon ion-coffee"></i></a>
                </span>
            </div>
        </div>
    </nav>
  );
}

export default withRouter(Navigation);