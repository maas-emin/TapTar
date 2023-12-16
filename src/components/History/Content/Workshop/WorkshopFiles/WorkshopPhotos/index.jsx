import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMasterPhotos } from '../../../../../../redux/ducks/workshop';
import WorkshopPhoto from './WorkshopPhoto';
import SkeletonTitle from '../../../../General/Skeletons/SkeletonTitle';
import SkeletonMedia from '../../../../General/Skeletons/SkeletonMedia';

import style from '../stylesMedia.module.css';
import StartPage from '../../../../General/StartPage';

function WorkshopPhotos() {
  const dispatch = useDispatch();

  const photos = useSelector((state) => state.workshop.photos);
  const loading = useSelector((state) => state.workshop.loading);

  useEffect(() => {
    dispatch(getMasterPhotos());
  }, [dispatch]);

  return (
    <div className={style.main}>
      {loading ? (
        <SkeletonTitle />
      ) : (
        <div className={style.files__header}>
          <div className={style.files__title}>Фото</div>
        </div>
      )}
      {loading ? (
        <SkeletonMedia />
      ) : !photos.length ? (
        <StartPage />
      ) : (
        <div className={style['files-content']}>
          {photos.map((photo) => {
            return <WorkshopPhoto key={photo.file_id} photo={photo} />;
          })}
        </div>
      )}
    </div>
  );
}

export default WorkshopPhotos;
