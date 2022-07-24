import React from 'react'
import SkeletonElement from './SkeletonElement'
import news from "../frontend/components/styles/news.module.css"

const SkeletonNews = () => {

  return (
    <div className={`${'p-4 m-3'} ${news.article}`}>
        <div className="text-end">
            <span className={news.new}>NEW</span>
        </div>
            <SkeletonElement type="vs" />
            <SkeletonElement type="vs" />
        WINNER <br/>
        <span>
            <SkeletonElement type="vs" />
        </span>
    </div>
  )
}

export default SkeletonNews