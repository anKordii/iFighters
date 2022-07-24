import React from 'react'
import SkeletonElement from './SkeletonElement'

const SkeletonFighters = () => {

  return (
    <div className="col-sm-6 col-md-5 col-lg-4 fighter">
        <div className="box m-2 p-2 wiki__list">
            <SkeletonElement type="avatar" />
            <SkeletonElement type="fighter_nickname" />
            <SkeletonElement type="fighter_name2" />
        </div>
    </div>
  )
}

export default SkeletonFighters