import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WorkshopVideo from './WorkshopVideo';
import { getMasterVideos } from '../../../../../../redux/ducks/workshop';
import SkeletonTitle from '../../../../General/Skeletons/SkeletonTitle';
import SkeletonMedia from '../../../../General/Skeletons/SkeletonMedia';
import StartPage from '../../../../General/StartPage';

import style from '../stylesMedia.module.css';

function WorkshopVideos() {
  const dispatch = useDispatch();

  const videos = useSelector((state) => state.workshop.videos);
  const loading = useSelector((state) => state.workshop.loading);

  useEffect(() => {
    dispatch(getMasterVideos());
  }, [dispatch]);

  return (
    <div className={style.main}>
      {loading ? (
        <SkeletonTitle />
      ) : (
        <div className={style.files__header}>
          <div className={style.files__title}>Видео</div>
        </div>
      )}
      {loading ? (
        <SkeletonMedia />
      ) : !videos.length ? (
        <StartPage />
      ) : (
        <div className={style['files-content']}>
          {videos.map((video) => {
            return <WorkshopVideo key={video.file_id} video={video} />;
          })}
        </div>
      )}
    </div>
  );
}

export default WorkshopVideos;
