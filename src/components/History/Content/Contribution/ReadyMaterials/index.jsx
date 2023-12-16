import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReadyMaterial } from '../../../../../redux/ducks/contribution';
import SkeletonMedia from '../../../General/Skeletons/SkeletonMedia';
import SkeletonTitle from '../../../General/Skeletons/SkeletonTitle';
import StartPage from '../../../General/StartPage';
import ReadyMaterial from './ReadyMaterial';

import style from './style.module.css';

function ReadyMaterials() {
  const materials = useSelector((state) => state.contribution.readyMaterial);
  const loading = useSelector((state) => state.contribution.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReadyMaterial());
  }, [dispatch]);

  return (
    <div className={style.materials}>
      {loading ? (
        <SkeletonTitle />
      ) : (
        <div className={style.files__header}>
          <div className={style.files__title}>Материалы</div>
        </div>
      )}
      {loading ? (
        <SkeletonMedia />
      ) : !materials.length ? (
        <StartPage />
      ) : (
        <div className={style.materialsContainer}>
          {materials.map((material) => {
            return <ReadyMaterial key={material.id} material={material} />;
          })}
        </div>
      )}
    </div>
  );
}

export default ReadyMaterials;
