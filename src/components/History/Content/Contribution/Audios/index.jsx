import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAudio } from '../../../../../redux/ducks/contribution';
import SkeletonMedia from '../../../General/Skeletons/SkeletonMedia';
import SkeletonTitle from '../../../General/Skeletons/SkeletonTitle';
import Audio from './Audio';
import StartPage from '../../../General/StartPage';

import style from '../stylesMedia.module.css';

function Audios() {
  const dispatch = useDispatch();

  const audios = useSelector((state) => state.contribution.audio);
  const loading = useSelector((state) => state.contribution.loading);

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
              return <Audio key={audio.file_id} audio={audio} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Audios;
