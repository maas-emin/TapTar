import React, { useEffect } from 'react';
import Material from './Material';
import { useDispatch, useSelector } from 'react-redux';
import { getMaterial } from '../../../../../redux/ducks/contribution';
import ContributionMaterialSkeleton from '../../../General/Skeletons/SkeletonMaterialContribution';
import StartPage from '../../../General/StartPage';

import style from './style.module.css';

function Materials() {
  const dispatch = useDispatch();

  const materials = useSelector((state) => state.contribution.material);
  const loading = useSelector((state) => state.contribution.loading);

  useEffect(() => {
    dispatch(getMaterial());
  }, [dispatch]);

  return (
    <div className={style.materials}>
      {loading ? (
        <ContributionMaterialSkeleton />
      ) : !materials.length ? (
        <StartPage />
      ) : (
        materials.map((material) => {
          return <Material key={material.id} material={material} />;
        })
      )}
    </div>
  );
}

export default Materials;
