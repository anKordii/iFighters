import React from 'react'
import SkeletonElement from './SkeletonElement'

const SkeletonProfile = () => {

  return (
    <div className="row">
      <div className="col-sm-3 fighter_stats">
          <SkeletonElement type="avatar" />
          <SkeletonElement type="fighter_nickname" /> 
          <SkeletonElement type="fighter_name" /> 
          <div className="pb-2 pt-2">
          <p style={{color: "var(--fight-przewodni)", fontWeight: "bold"}}>Wynik</p>
            <SkeletonElement type="fighter_score2" />
          </div>
          <div className="pb-2 pt-2">
            <p style={{color: "var(--fight-przewodni)", fontWeight: "bold"}}>Zakontraktowany z</p>
            <SkeletonElement type="fighter_contracted" /> 
            <SkeletonElement type="fighter_contracted2" />
          </div>
          <div className="pb-2 pt-2">
            <p style={{color: "var(--fight-przewodni)", fontWeight: "bold"}}>Mistrzostwa</p> 
            <SkeletonElement type="fighter_belts2" />
          </div>
      </div>
      <div className="col-sm-9">
        <h2>Kariera</h2>
        <SkeletonElement type="fighter_description" /> 
      </div>
    </div>
  )
}

export default SkeletonProfile;