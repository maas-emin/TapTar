import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Video from './Video';
import { getVideo } from '../../../../../../redux/ducks/historianCabinet';
import SkeletonTitle from '../../../../General/Skeletons/SkeletonTitle';
import SkeletonMedia from '../../../../General/Skeletons/SkeletonMedia';
import StartPage from '../../../../General/StartPage';

import style from '../stylesMedia.module.css';

function BookmarkVideos() {
  const dispatch = useDispatch();

  const videos = useSelector((state) => state.historianCabinet.materials);
  const loading = useSelector((state) => state.historianCabinet.loading);

  useEffect(() => {
    dispatch(getVideo());
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
            return <Video key={video.id} video={video} />;
          })}
        </div>
      )}
    </div>
  );
}

export default BookmarkVideos;
