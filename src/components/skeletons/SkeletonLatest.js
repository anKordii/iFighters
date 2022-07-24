import React from 'react'
import SkeletonElement from './SkeletonElement'
import news from "../frontend/components/styles/news.module.css"
import styles from "../frontend/components/styles/wiki.module.css"

const SkeletonLatest = () => {

  return (
    <div className={`${'p-4 m-3'} ${news.article} ${styles.latest__fights}`}>
            <SkeletonElement type="vsLatest" />
            <SkeletonElement type="vsLatest" />
    </div>
  )
}

export default SkeletonLatest