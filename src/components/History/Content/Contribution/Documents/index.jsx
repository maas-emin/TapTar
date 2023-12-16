import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContributionDocument from './ContributionDocument';
import { getDocument } from '../../../../../redux/ducks/contribution';
import SkeletonTitle from '../../../General/Skeletons/SkeletonTitle';
import SkeletonMedia from '../../../General/Skeletons/SkeletonMedia';
import StartPage from '../../../General/StartPage';

import style from '../stylesMedia.module.css';

function Documents() {
  const dispatch = useDispatch();

  const documents = useSelector((state) => state.contribution.document);
  const loading = useSelector((state) => state.contribution.loading);

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
            return (
              <ContributionDocument
                key={document.file_id}
                document={document}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Documents;
