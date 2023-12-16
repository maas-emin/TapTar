import React from 'react';
import Skeleton from 'react-loading-skeleton';
import style from './styles.module.css';

function ContributionMaterialSkeleton() {
  const emptyArr = new Array(6).fill(1);
  return emptyArr.map((skeleton, index) => {
    return (
      <div key={index} className={style.skeletonContact}>
        <Skeleton count={1} height="100%" key={index} />
      </div>
    );
  });
}

export default ContributionMaterialSkeleton;
