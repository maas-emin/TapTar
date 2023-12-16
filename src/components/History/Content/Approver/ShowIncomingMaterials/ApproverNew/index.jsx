import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewMaterial from './NewMaterial';
import SkeletonTitle from '../../../../General/Skeletons/SkeletonTitle';
import SkeletonMedia from '../../../../General/Skeletons/SkeletonMedia';
import { getNewMaterialsApprover } from '../../../../../../redux/ducks/approver';
import StartPage from '../../../../General/StartPage';

import style from '../materials.module.css';

function ApproverNew() {
  const dispatch = useDispatch();

  const materials = useSelector((state) => state.approver.materials);
  const loading = useSelector((state) => state.approver.loading);
  const message = useSelector((state) => state.incomingMaterials.message);

  useEffect(() => {
    dispatch(getNewMaterialsApprover());
  }, [dispatch, message]);

  return (
    <div className={style.materials}>
      {loading ? (
        <SkeletonTitle />
      ) : (
        <div className={style.files__header}>
          <div className={style.files__title}>Новые материалы</div>
          <div className={style.file__count}>
            {Array.isArray(materials) ? materials.length : 0}
          </div>
        </div>
      )}
      {loading ? (
        <SkeletonMedia />
      ) : !materials.length ? (
        <StartPage />
      ) : (
        <div className={style['files-content']}>
          {materials.map((material) => {
            return (
              <NewMaterial key={material.material_id} material={material} />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ApproverNew;
