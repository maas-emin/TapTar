import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMasterText } from '../../../../../../redux/ducks/workshop';
import WorkshopText from './WorkshopText';
import SkeletonTitle from '../../../../General/Skeletons/SkeletonTitle';
import SkeletonMedia from '../../../../General/Skeletons/SkeletonMedia';
import StartPage from '../../../../General/StartPage';

import style from '../stylesMedia.module.css';

function WorkshopTexts() {
  const dispatch = useDispatch();

  const texts = useSelector((state) => state.workshop.text);
  const loading = useSelector((state) => state.workshop.loading);

  useEffect(() => {
    dispatch(getMasterText());
  }, [dispatch]);

  return (
    <div className={style.main}>
      {loading ? (
        <SkeletonTitle />
      ) : (
        <div className={style.files__header}>
          <div className={style.files__title}>Текст</div>
        </div>
      )}
      {loading ? (
        <SkeletonMedia />
      ) : !texts.length ? (
        <StartPage />
      ) : (
        <div className={style['files-content']}>
          {texts.map((text) => {
            return <WorkshopText key={text.file_id} text={text} />;
          })}
        </div>
      )}
    </div>
  );
}

export default WorkshopTexts;
