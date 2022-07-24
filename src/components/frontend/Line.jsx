import React from "react";
import { Link } from 'react-router-dom';

function Line() {
  return (
      <div className="container pt-5 mt-5">
          <div className="row">
              <div className="col-md-12 text-center" style={{position: "relative"}}>
                  <h1 className="bb__big">
                  <Link to="/" style={{color: 'rgb(255 255 255 / 26%)'}}>iFighters</Link></h1>
                  <h2 className="bb__small mb-4">strona główna</h2>
              </div>
          </div>
      </div>
  );
}

export default Line;