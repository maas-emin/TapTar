import React, { useEffect } from 'react';
import Material from './Material';
import { useDispatch, useSelector } from 'react-redux';
import { getMaterial } from '../../../../../../redux/ducks/historianCabinet';
import SkeletonTitle from '../../../../General/Skeletons/SkeletonTitle';
import SkeletonMedia from '../../../../General/Skeletons/SkeletonMedia';
import StartPage from '../../../../General/StartPage';

import style from './style.module.css';

function BookmarkMaterials() {
  const dispatch = useDispatch();

  const materials = useSelector((state) => state.historianCabinet.materials);
  const loading = useSelector((state) => state.historianCabinet.loading);

  useEffect(() => {
    dispatch(getMaterial());
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
            return <Material key={material.id} material={material} />;
          })}
        </div>
      )}
    </div>
  );
}

export default BookmarkMaterials;
