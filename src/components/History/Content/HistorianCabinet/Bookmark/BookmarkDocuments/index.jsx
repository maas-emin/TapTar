import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Document from './Document';
import { getDocument } from '../../../../../../redux/ducks/historianCabinet';
import SkeletonTitle from '../../../../General/Skeletons/SkeletonTitle';
import SkeletonMedia from '../../../../General/Skeletons/SkeletonMedia';
import StartPage from '../../../../General/StartPage';

import style from '../stylesMedia.module.css';

function BookmarkDocuments() {
  const dispatch = useDispatch();

  const documents = useSelector((state) => state.historianCabinet.materials);
  const loading = useSelector((state) => state.historianCabinet.loading);

  useEffect(() => {
    dispatch(getDocument());
  }, [dispatch]);

  return (
    <div className={style.main}>
      {loading ? (
        <SkeletonTitle />
      ) : (
        <div className={style.files__header}>
          <div className={style.files__title}>Документы</div>
        </div>
      )}
      {loading ? (
        <SkeletonMedia />
      ) : !documents.length ? (
        <StartPage />
      ) : (
        <div className={style['files-content']}>
          {documents.map((document) => {
            return <Document key={document.id} document={document} />;
          })}
        </div>
      )}
    </div>
  );
}

export default BookmarkDocuments;
