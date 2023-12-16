import React from 'react';
import { useDispatch } from 'react-redux';
import {
  changeProgressError,
  cleanUploadFiles,
} from '../../../../../../../redux/ducks/uploadFiles';

import style from './styles.module.css';

function PreloadError() {
  const dispatch = useDispatch();
  const body = document.querySelector('body');

  const closeDialogPreload = () => {
    body.style.overflow = 'visible';
    dispatch(changeProgressError());
    dispatch(cleanUploadFiles());
  };

  return (
    <div className={style['dialog-remove']}>
      <div className={style.title}>Произошла ошибка</div>
      <div className={style.buttons}>
        <div onClick={closeDialogPreload} className={style.button}>
          Ok
        </div>
      </div>
    </div>
  );
}

export default PreloadError;
