import React, { useEffect } from 'react';
import Photo from './Photo';
import { useDispatch, useSelector } from 'react-redux';
import { getPhoto } from '../../../../../../redux/ducks/historianCabinet';
import SkeletonMedia from '../../../../General/Skeletons/SkeletonMedia';
import SkeletonTitle from '../../../../General/Skeletons/SkeletonTitle';
import StartPage from '../../../../General/StartPage';

import style from '../stylesMedia.module.css';

function BookmarkPhotos() {
  const dispatch = useDispatch();

  const photos = useSelector((state) => state.historianCabinet.materials);
  const loading = useSelector((state) => state.historianCabinet.loading);

  useEffect(() => {
    dispatch(getPhoto());
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
            return <Photo key={photo.id} photo={photo} />;
          })}
        </div>
      )}
    </div>
  );
}

export default BookmarkPhotos;
