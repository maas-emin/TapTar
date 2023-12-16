import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMasterApplications } from '../../../../../../redux/ducks/workshop';
import WorkshopDocument from './WorkshopDocument';
import SkeletonTitle from '../../../../General/Skeletons/SkeletonTitle';
import SkeletonMedia from '../../../../General/Skeletons/SkeletonMedia';
import StartPage from '../../../../General/StartPage';

import style from '../stylesMedia.module.css';

function WorkshopDocuments() {
  const dispatch = useDispatch();

  const applications = useSelector((state) => state.workshop.applications);
  const loading = useSelector((state) => state.workshop.loading);
  useEffect(() => {
    dispatch(getMasterApplications());
  }, [dispatch]);

  return (
    <div className={style.main}>
      {loading ? (
        <SkeletonTitle />
      ) : (
        <div className={style.files__header}>
          <div className={style.files__title}>Документы</div>
        </div>
      )}
      {loading ? (
        <SkeletonMedia />
      ) : !applications.length ? (
        <StartPage />
      ) : (
        <div className={style['files-content']}>
          {applications.map((document) => {
            return (
              <WorkshopDocument key={document.file_id} document={document} />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default WorkshopDocuments;
