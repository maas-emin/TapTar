import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProcessingFiles } from '../../../../../../redux/ducks/workshop';
import SkeletonMedia from '../../../../General/Skeletons/SkeletonMedia';
import WorkshopAudio from '../WorkshopAudios/WorkshopAudio';
import WorkshopDocument from '../WorkShopDocuments/WorkshopDocument';
import WorkshopPhoto from '../WorkshopPhotos/WorkshopPhoto';
import WorkshopText from '../WorkshopText/WorkshopText';
import WorkshopVideo from '../WorkshopVideos/WorkshopVideo';
import StartPage from '../../../../General/StartPage';

import style from '../stylesMedia.module.css';

function WorkshopProcessing() {
  const dispatch = useDispatch();

  const processing = useSelector((state) => state.workshop.processing);
  const loading = useSelector((state) => state.workshop.loading);

  useEffect(() => {
    dispatch(getProcessingFiles());
  }, [dispatch]);

  return (
    <div className={style.main}>
      {loading ? (
        <SkeletonMedia />
      ) : !processing.length ? (
        <StartPage />
      ) : (
        <div className={style['files-content']}>
          {processing.map((item) => {
            if (item.type === 'photo') {
              return <WorkshopPhoto key={item.id} photo={item} />;
            }
            if (item.type === 'video') {
              return <WorkshopVideo key={item.id} video={item} />;
            }
            if (item.type === 'audio') {
              return <WorkshopAudio key={item.id} audio={item} />;
            }
            if (item.type === 'document') {
              return <WorkshopDocument key={item.id} document={item} />;
            }
            if (item.type === 'text') {
              return <WorkshopText key={item.id} text={item} />;
            }

            return null;
          })}
        </div>
      )}
    </div>
  );
}

export default WorkshopProcessing;
