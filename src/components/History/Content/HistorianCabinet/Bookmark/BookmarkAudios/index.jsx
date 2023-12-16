import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAudio } from '../../../../../../redux/ducks/historianCabinet';
import SkeletonMedia from '../../../../General/Skeletons/SkeletonMedia';
import SkeletonTitle from '../../../../General/Skeletons/SkeletonTitle';
import StartPage from '../../../../General/StartPage';
import Audio from './Audio';

import style from '../stylesMedia.module.css';

function BookmarkAudios() {
  const dispatch = useDispatch();

  const audios = useSelector((state) => state.historianCabinet.materials);
  const loading = useSelector((state) => state.historianCabinet.loading);

  useEffect(() => {
    dispatch(getAudio());
  }, [dispatch]);

  return (
    <div className={style.main}>
      {loading ? (
        <SkeletonTitle />
      ) : (
        <div className={style.files__header}>
          <div className={style.files__title}>Аудио</div>
        </div>
      )}
      <div>
        {loading ? (
          <SkeletonMedia />
        ) : !audios.length ? (
          <StartPage />
        ) : (
          <div className={style['files-content']}>
            {audios.map((audio) => {
              return <Audio key={audio.id} audio={audio} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default BookmarkAudios;
