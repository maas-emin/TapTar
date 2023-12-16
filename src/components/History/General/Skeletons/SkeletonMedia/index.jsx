import React from 'react';
import Skeleton from 'react-loading-skeleton';
import style from './styles.module.css';

function SkeletonMedia() {
  const emptyArr = new Array(8).fill(1);
  return (
    <div className={style.skeletonContainer}>
      {emptyArr.map((skeleton, index) => {
        return (
          <div key={index} className={style.skeletonItem}>
            <Skeleton count={1} height="100%" width="100%" />
          </div>
        );
      })}
    </div>
  );
}

export default SkeletonMedia;
