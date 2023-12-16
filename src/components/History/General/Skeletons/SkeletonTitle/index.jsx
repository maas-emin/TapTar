import React from 'react';
import Skeleton from 'react-loading-skeleton';
import style from './styles.module.css';

function SkeletonTitle() {
  const emptyArr = new Array(1).fill(1);
  return emptyArr.map((skeleton, index) => {
    return (
      <div key={index} className={style.skeletonContact}>
        <Skeleton count={1} height="100%" />
      </div>
    );
  });
}

export default SkeletonTitle;
