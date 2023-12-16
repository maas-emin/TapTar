import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMaterials } from '../../../../../../redux/ducks/workshop';
import SkeletonMedia from '../../../../General/Skeletons/SkeletonMedia';
import WorkshopAudio from '../WorkshopAudios/WorkshopAudio';
import WorkshopDocument from '../WorkShopDocuments/WorkshopDocument';
import WorkshopPhoto from '../WorkshopPhotos/WorkshopPhoto';
import WorkshopText from '../WorkshopText/WorkshopText';
import WorkshopVideo from '../WorkshopVideos/WorkshopVideo';
import StartPage from '../../../../General/StartPage';

import style from '../stylesMedia.module.css';

function WorkshopMaterials() {
  const dispatch = useDispatch();

  const materials = useSelector((state) => state.workshop.materials);
  const loading = useSelector((state) => state.workshop.loading);

  useEffect(() => {
    dispatch(getMaterials());
  }, [dispatch]);

  return (
    <div className={style.main}>
      {loading ? (
        <SkeletonMedia />
      ) : !materials.length ? (
        <StartPage />
      ) : (
        <div className={style['files-content']}>
          {materials.map((item) => {
            if (item.type === 'photo') {
              return <WorkshopPhoto key={item.file_id} photo={item} />;
            }
            if (item.type === 'video') {
              return <WorkshopVideo key={item.file_id} video={item} />;
            }
            if (item.type === 'document') {
              return <WorkshopDocument key={item.file_id} document={item} />;
            }
            if (item.type === 'audio') {
              return <WorkshopAudio key={item.file_id} audio={item} />;
            }
            if (item.type === 'text') {
              return <WorkshopText key={item.file_id} text={item} />;
            }

            return null;
          })}
        </div>
      )}
    </div>
  );
}

export default WorkshopMaterials;
