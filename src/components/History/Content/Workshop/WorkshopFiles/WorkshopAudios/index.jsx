import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMasterAudio } from '../../../../../../redux/ducks/workshop';
import WorkshopAudio from './WorkshopAudio';
import SkeletonMedia from '../../../../General/Skeletons/SkeletonMedia';
import SkeletonTitle from '../../../../General/Skeletons/SkeletonTitle';
import StartPage from '../../../../General/StartPage';

import style from '../stylesMedia.module.css';

function WorkshopAudios() {
  const dispatch = useDispatch();

  const audios = useSelector((state) => state.workshop.audios);
  const loading = useSelector((state) => state.workshop.loading);

  useEffect(() => {
    dispatch(getMasterAudio());
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
      {loading ? (
        <SkeletonMedia />
      ) : !audios.length ? (
        <StartPage />
      ) : (
        <div className={style['files-content']}>
          {audios.map((audio) => {
            return <WorkshopAudio key={audio.file_id} audio={audio} />;
          })}
        </div>
      )}
    </div>
  );
}

export default WorkshopAudios;
