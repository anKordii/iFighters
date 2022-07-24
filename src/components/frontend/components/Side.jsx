import React from "react";
import { Link } from 'react-router-dom';
import styles from "./styles/side.module.css"

function Side() {
  return (
        <div className={styles.side_bar} id="sidenavigation">
          <div className={styles.site_header}>
            <Link to={"/wiki"} style={{fontSize: "1.25rem", fontWeight: "bold"}}>Documentation</Link>
          </div>
          <ul>
            <li>
              <Link to={`/docs/xi`} className={styles.nav_link}>Xayoo Industries Alerts</Link>
            </li>
            
          </ul>
        </div>
  );
}

export default Side;